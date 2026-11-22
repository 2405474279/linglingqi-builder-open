<?php

namespace Elementor\Modules\AtomicWidgets\OptIn;

use Elementor\Core\Common\Modules\Ajax\Module as Ajax;
use Elementor\Core\Experiments\Manager as Experiments_Manager;
use Elementor\Modules\AtomicWidgets\Module as AtomicWidgetsModule;
use Elementor\Plugin;
use Elementor\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Opt_In {
	const EXPERIMENT_NAME = 'e_opt_in_v4';

	const OPT_IN_CLICKED_OPTION = 'elementor_v4_opt_in_clicked';

	const SETTINGS_PAGE = 'linglingqi-editor-mode';

	const PREFERENCE_OPTION = 'linglingqi_new_page_mode';
	const PREFER_CLASSIC = 'classic';
	const PREFER_V4 = 'v4';

	public function init() {
		$this->register_feature();

		add_action( 'elementor/ajax/register_actions', fn( Ajax $ajax ) => $this->add_ajax_actions( $ajax ) );
		add_action( 'rest_api_init', fn() => $this->register_routes() );
		add_action( 'admin_menu', [ $this, 'register_settings_page' ], 25 );
		add_action( 'admin_post_linglingqi_editor_mode', [ $this, 'save_settings' ] );
	}

	public static function prefers_v4(): bool {
		$preference = get_option( self::PREFERENCE_OPTION );
		if ( in_array( $preference, [ self::PREFER_V4, self::PREFER_CLASSIC ], true ) ) {
			return self::PREFER_V4 === $preference;
		}

		$experiments = Plugin::$instance->experiments;
		if ( ! $experiments->is_feature_active( 'container' ) ) {
			return false;
		}

		// Historical state affects authoring preference and never disables stored content.
		foreach ( [ self::EXPERIMENT_NAME, AtomicWidgetsModule::EXPERIMENT_NAME ] as $feature ) {
			$value = get_option( $experiments->get_feature_option_key( $feature ) );
			if ( ! in_array( $value, [ false, '', Experiments_Manager::STATE_DEFAULT, Experiments_Manager::STATE_ACTIVE ], true ) ) {
				return false;
			}
		}

		return true;
	}

	private function register_feature() {
		// Keep the upstream V4 capability flag for style parsing and integrations.
		Plugin::$instance->experiments->add_feature( [
			'name' => self::EXPERIMENT_NAME,
			'title' => esc_html__( 'Editor V4', 'elementor' ),
			'hidden' => true,
			'mutable' => false,
			'default' => Experiments_Manager::STATE_ACTIVE,
			'release_status' => Experiments_Manager::RELEASE_STATUS_BETA,
		] );
	}

	public function register_settings_page() {
		add_submenu_page(
			Settings::PAGE_ID,
			__( '编辑器模式', 'elementor' ),
			__( '编辑器模式', 'elementor' ),
			'manage_options',
			self::SETTINGS_PAGE,
			[ $this, 'render_settings_page' ]
		);
	}

	public function render_settings_page() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'Permission denied', 'elementor' ) );
		}

		$prefer_v4 = self::prefers_v4();
		?>
		<div class="wrap">
			<h1><?php esc_html_e( '凌凌漆编辑器模式', 'elementor' ); ?></h1>
			<p><?php esc_html_e( '此设置决定空白画布默认插入的布局和组件面板的优先顺序。经典、V4 和混合页面都可以继续显示、编辑和保存。', 'elementor' ); ?></p>
			<form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post">
				<?php wp_nonce_field( 'linglingqi_editor_mode' ); ?>
				<input type="hidden" name="action" value="linglingqi_editor_mode">
				<fieldset>
					<legend><?php esc_html_e( '新建页编辑偏好', 'elementor' ); ?></legend>
					<p><label><input type="radio" name="editor_mode" value="v4" <?php checked( $prefer_v4 ); ?>> <?php esc_html_e( '新建页优先使用 V4', 'elementor' ); ?></label></p>
					<p><label><input type="radio" name="editor_mode" value="classic" <?php checked( ! $prefer_v4 ); ?>> <?php esc_html_e( '新建页优先使用经典', 'elementor' ); ?></label></p>
				</fieldset>
				<?php submit_button( __( '确认保存编辑偏好', 'elementor' ) ); ?>
			</form>
		</div>
		<?php
	}

	public function save_settings() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'Permission denied', 'elementor' ) );
		}

		check_admin_referer( 'linglingqi_editor_mode' );
		$mode = isset( $_POST['editor_mode'] ) && is_string( $_POST['editor_mode'] )
			? sanitize_key( wp_unslash( $_POST['editor_mode'] ) )
			: '';

		if ( ! in_array( $mode, [ self::PREFER_V4, self::PREFER_CLASSIC ], true ) ) {
			wp_die( esc_html__( '无效的编辑器模式。', 'elementor' ) );
		}

		update_option( self::PREFERENCE_OPTION, $mode );
		wp_safe_redirect( admin_url( 'admin.php?page=' . self::SETTINGS_PAGE ) );
		exit;
	}

	private function get_legacy_notice(): string {
		return __( '请到「网站可视化构建器 → 编辑器模式」确认新建页编辑偏好。', 'elementor' );
	}

	public function ajax_opt_out_v4() {
		$this->reject_legacy_mode_change();
	}

	public function ajax_opt_in_v4() {
		$this->reject_legacy_mode_change();
	}

	private function reject_legacy_mode_change() {
		if ( ! current_user_can( 'manage_options' ) ) {
			throw new \Exception( esc_html__( 'Permission denied', 'elementor' ), 403 );
		}

		throw new \Exception( $this->get_legacy_notice(), 409 );
	}

	private function add_ajax_actions( Ajax $ajax ) {
		$ajax->register_ajax_action( 'editor_v4_opt_in', fn() => $this->ajax_opt_in_v4() );
		$ajax->register_ajax_action( 'editor_v4_opt_out', fn() => $this->ajax_opt_out_v4() );
	}

	private function handle_rest_opt_in_v4() {
		return new \WP_Error( 'linglingqi_editor_mode_confirmation_required', $this->get_legacy_notice(), [
			'status' => 409,
			'settings_url' => admin_url( 'admin.php?page=' . self::SETTINGS_PAGE ),
		] );
	}

	private function register_routes() {
		register_rest_route( 'elementor/v1', '/operations/opt-in-v4', [
			'methods' => 'POST',
			'callback' => fn() => $this->handle_rest_opt_in_v4(),
			'permission_callback' => fn() => current_user_can( 'manage_options' ),
		] );
	}
}
