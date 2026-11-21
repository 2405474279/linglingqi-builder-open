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

	const OPT_IN_FEATURES = [
		self::EXPERIMENT_NAME,
		'container',
		AtomicWidgetsModule::EXPERIMENT_NAME,
	];

	const OPT_OUT_FEATURES = [
		self::EXPERIMENT_NAME,
		AtomicWidgetsModule::EXPERIMENT_NAME,
	];


	public function init() {
		$this->register_feature();

		add_action( 'elementor/ajax/register_actions', fn( Ajax $ajax ) => $this->add_ajax_actions( $ajax ) );
		add_action( 'rest_api_init', fn() => $this->register_routes() );
		add_action( 'admin_menu', [ $this, 'register_settings_page' ], 25 );
		add_action( 'admin_post_linglingqi_editor_mode', [ $this, 'save_settings' ] );
	}

	private function register_feature() {
		$experiments = Plugin::$instance->experiments;
		$enabled = $experiments->is_feature_active( 'container' );

		// An older explicit switch-off can be stored under either option.
		foreach ( self::OPT_OUT_FEATURES as $feature ) {
			$value = get_option( $experiments->get_feature_option_key( $feature ) );
			if ( ! in_array( $value, [ false, '', Experiments_Manager::STATE_DEFAULT, Experiments_Manager::STATE_ACTIVE ], true ) ) {
				$enabled = false;
				break;
			}
		}

		$experiments->add_feature( [
			'name' => self::EXPERIMENT_NAME,
			'title' => esc_html__( 'Editor V4', 'elementor' ),
			'description' => esc_html__( 'Enable Editor V4.', 'elementor' ),
			'hidden' => true,
			'mutable' => false,
			'default' => $enabled ? Experiments_Manager::STATE_ACTIVE : Experiments_Manager::STATE_INACTIVE,
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

		$enabled = Plugin::$instance->experiments->is_feature_active( self::EXPERIMENT_NAME );
		?>
		<div class="wrap">
			<h1><?php esc_html_e( '凌凌漆编辑器模式', 'elementor' ); ?></h1>
			<p><?php echo $enabled ? esc_html__( '当前模式：V4（原子元素）', 'elementor' ) : esc_html__( '当前模式：经典编辑器', 'elementor' ); ?></p>
			<p><?php esc_html_e( '关闭 V4 后，已发布页面的原子元素可能暂时无法显示或编辑。切换期间请勿保存含原子元素的页面。重新启用 V4 即可恢复原子元素及其样式。', 'elementor' ); ?></p>
			<p><?php esc_html_e( '启用 V4 同时启用容器布局。切换模式会保留现有页面数据和区块原稿。', 'elementor' ); ?></p>
			<form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post">
				<?php wp_nonce_field( 'linglingqi_editor_mode' ); ?>
				<input type="hidden" name="action" value="linglingqi_editor_mode">
				<input type="hidden" name="editor_mode" value="<?php echo $enabled ? 'classic' : 'v4'; ?>">
				<?php submit_button( $enabled ? __( '确认切换到经典编辑器', 'elementor' ) : __( '启用 V4 并恢复原子元素', 'elementor' ) ); ?>
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

		if ( 'v4' === $mode ) {
			$this->opt_in_v4();
		} elseif ( 'classic' === $mode ) {
			$this->opt_out_v4();
		} else {
			wp_die( esc_html__( '无效的编辑器模式。', 'elementor' ) );
		}

		wp_safe_redirect( admin_url( 'admin.php?page=' . self::SETTINGS_PAGE ) );
		exit;
	}

	private function opt_out_v4() {
		foreach ( self::OPT_OUT_FEATURES as $feature ) {
			$feature_key = Plugin::$instance->experiments->get_feature_option_key( $feature );
			update_option( $feature_key, Experiments_Manager::STATE_INACTIVE );
		}
	}

	private function opt_in_v4() {
		foreach ( self::OPT_IN_FEATURES as $feature ) {
			$feature_key = Plugin::$instance->experiments->get_feature_option_key( $feature );
			update_option( $feature_key, Experiments_Manager::STATE_ACTIVE );
		}

		update_option( self::OPT_IN_CLICKED_OPTION, true );
	}

	public function ajax_opt_out_v4() {
		if ( ! current_user_can( 'manage_options' ) ) {
			throw new \Exception( 'Permission denied' );
		}

		$this->opt_out_v4();
	}

	public function ajax_opt_in_v4() {
		if ( ! current_user_can( 'manage_options' ) ) {
			throw new \Exception( 'Permission denied' );
		}

		$this->opt_in_v4();
	}

	private function add_ajax_actions( Ajax $ajax ) {
		$ajax->register_ajax_action( 'editor_v4_opt_in', fn() => $this->ajax_opt_in_v4() );
		$ajax->register_ajax_action( 'editor_v4_opt_out', fn() => $this->ajax_opt_out_v4() );
	}

	private function handle_rest_opt_in_v4() {
		$this->ajax_opt_in_v4();
		return new \WP_REST_Response( [
			'success' => true,
		], 200 );
	}

	private function register_routes() {
		register_rest_route( 'elementor/v1', '/operations/opt-in-v4', [
			'methods' => 'POST',
			'callback' => fn() => $this->handle_rest_opt_in_v4(),
			'permission_callback' => fn() => current_user_can( 'manage_options' ),
		] );
	}
}
