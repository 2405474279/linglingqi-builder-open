<?php
namespace Elementor\Core\Admin;

use Elementor\Api;
use Elementor\Core\Admin\UI\Components\Button;
use Elementor\Core\Base\Module;
use Elementor\Core\Utils\Hints;
use Elementor\Core\Utils\Promotions\Filtered_Promotions_Manager;
use Elementor\Plugin;
use Elementor\Tracker;
use Elementor\User;
use Elementor\Utils;
use Elementor\Core\Admin\Notices\Base_Notice;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Admin_Notices extends Module {

	const DEFAULT_EXCLUDED_PAGES = [ 'plugins.php', 'plugin-install.php', 'plugin-editor.php' ];

	const EXIT_EARLY_FOR_BACKWARD_COMPATIBILITY = false;

	private $plain_notices = [
		// Keep only local/plugin-maintenance notices. Tracking, review, AI and
		// Pro-promotion notices point at removed remote services in this build.
		'api_notice',
		'api_upgrade_plugin',
	];

	private $current_screen_id = null;

	private function get_notices() {
		/**
		 * Admin notices.
		 *
		 * Filters Elementor admin notices.
		 *
		 * This hook can be used by external developers to manage existing
		 * admin notice or to add new notices for Elementor add-ons.
		 *
		 * @param array $notices A list of notice classes.
		 */
		$notices = apply_filters( 'elementor/core/admin/notices', [] );

		return $notices;
	}

	private function notice_api_upgrade_plugin() {
		$upgrade_notice = Api::get_upgrade_notice();
		if ( empty( $upgrade_notice ) ) {
			return false;
		}

		if ( ! current_user_can( 'update_plugins' ) ) {
			return false;
		}

		if ( ! $this->is_elementor_admin_screen_with_system_info() ) {
			return false;
		}

		// Check for upgrades.
		$update_plugins = get_site_transient( 'update_plugins' );

		$has_remote_update_package = ! ( empty( $update_plugins ) || empty( $update_plugins->response[ ELEMENTOR_PLUGIN_BASE ] ) || empty( $update_plugins->response[ ELEMENTOR_PLUGIN_BASE ]->package ) );

		if ( ! $has_remote_update_package && empty( $upgrade_notice['update_link'] ) ) {
			return false;
		}

		if ( $has_remote_update_package ) {
			$product = $update_plugins->response[ ELEMENTOR_PLUGIN_BASE ];

			$details_url = self_admin_url( 'plugin-install.php?tab=plugin-information&plugin=' . $product->slug . '&section=changelog&TB_iframe=true&width=600&height=800' );
			$upgrade_url = wp_nonce_url( self_admin_url( 'update.php?action=upgrade-plugin&plugin=' . ELEMENTOR_PLUGIN_BASE ), 'upgrade-plugin_' . ELEMENTOR_PLUGIN_BASE );
			$new_version = $product->new_version;
		} else {
			$upgrade_url = $upgrade_notice['update_link'];
			$details_url = $upgrade_url;

			$new_version = $upgrade_notice['version'];
		}

		// Check if upgrade messages should be shown.
		if ( version_compare( ELEMENTOR_VERSION, $upgrade_notice['version'], '>=' ) ) {
			return false;
		}

		$notice_id = 'upgrade_notice_' . $upgrade_notice['version'];
		if ( User::is_user_notice_viewed( $notice_id ) ) {
			return false;
		}

		$message = sprintf(
			/* translators: 1: Details URL, 2: Accessibility text, 3: Version number, 4: Update URL, 5: Accessibility text. */
			__( 'There is a new version of Elementor Page Builder available. <a href="%1$s" class="thickbox open-plugin-details-modal" aria-label="%2$s">View version %3$s details</a> or <a href="%4$s" class="update-link" aria-label="%5$s">update now</a>.', 'elementor' ),
			esc_url( $details_url ),
			sprintf(
				/* translators: %s: Elementor version. */
				esc_attr__( 'View Elementor version %s details', 'elementor' ),
				$new_version
			),
			$new_version,
			esc_url( $upgrade_url ),
			esc_attr__( 'Update Now', 'elementor' )
		);

		$options = [
			'title' => esc_html__( 'Update Notification', 'elementor' ),
			'description' => $message,
			'button' => [
				'icon_classes' => 'dashicons dashicons-update',
				'text' => esc_html__( 'Update Now', 'elementor' ),
				'url' => $upgrade_url,
			],
			'id' => $notice_id,
		];

		$this->print_admin_notice( $options );

		return true;
	}

	private function notice_api_notice() {
		$admin_notice = Api::get_admin_notice();
		if ( empty( $admin_notice ) ) {
			return false;
		}

		if ( ! current_user_can( 'manage_options' ) ) {
			return false;
		}

		if ( ! $this->is_elementor_admin_screen_with_system_info() ) {
			return false;
		}

		$notice_id = 'admin_notice_api_' . $admin_notice['notice_id'];
		if ( User::is_user_notice_viewed( $notice_id ) ) {
			return false;
		}

		$options = [
			'title' => esc_html__( 'Update Notification', 'elementor' ),
			'description' => $admin_notice['notice_text'],
			'id' => $notice_id,
		];

		$this->print_admin_notice( $options );

		return true;
	}

	private function is_elementor_page(): bool {
		return 0 === strpos( $this->current_screen_id, 'elementor_page' );
	}

	private function is_elementor_admin_screen(): bool {
		return in_array( $this->current_screen_id, [ 'toplevel_page_elementor', 'edit-elementor_library' ], true );
	}

	private function is_elementor_admin_screen_with_system_info(): bool {
		return in_array( $this->current_screen_id, [ 'toplevel_page_elementor', 'edit-elementor_library', 'elementor_page_elementor-system-info', 'dashboard' ], true );
	}

	/**
	 * For testing purposes
	 */
	public function get_elementor_version() {
		return ELEMENTOR_VERSION;
	}

	public function print_admin_notice( array $options, $exclude_pages = self::DEFAULT_EXCLUDED_PAGES ) {
		global $pagenow;

		if ( in_array( $pagenow, $exclude_pages, true ) ) {
			return;
		}

		$default_options = [
			'id' => null,
			'title' => '',
			'description' => '',
			'classes' => [ 'notice', 'e-notice' ], // We include WP's default notice class so it will be properly handled by WP's js handler
			'type' => '',
			'dismissible' => true,
			'icon' => 'eicon-elementor-circle',
			'button' => [],
			'button_secondary' => [],
		];

		$options = array_replace_recursive( $default_options, $options );

		$notice_classes = $options['classes'];
		$dismiss_button = '';
		$icon = '';

		if ( $options['type'] ) {
			$notice_classes[] = 'e-notice--' . $options['type'];
		}

		$wrapper_attributes = [
			'role' => 'region',
			'aria-label' => esc_html__( 'Elementor notice', 'elementor' ),
		];

		if ( $options['dismissible'] ) {
			$label = esc_html__( 'Dismiss this notice.', 'elementor' );
			$notice_classes[] = 'e-notice--dismissible';
			$dismiss_button = '<i class="e-notice__dismiss" role="button" aria-label="' . $label . '" tabindex="0"></i>';

			$wrapper_attributes['data-nonce'] = wp_create_nonce( 'elementor_set_admin_notice_viewed' );
		}

		if ( $options['icon'] ) {
			$notice_classes[] = 'e-notice--extended';
			$icon = '<div class="e-notice__icon-wrapper"><i class="' . esc_attr( $options['icon'] ) . '" aria-hidden="true"></i></div>';
		}

		$wrapper_attributes['class'] = $notice_classes;

		if ( $options['id'] ) {
			$wrapper_attributes['data-notice_id'] = $options['id'];
		}

		if ( ! empty( $options['source'] ) ) {
			$wrapper_attributes['data-source'] = $options['source'];
		}
		?>
		<div <?php Utils::print_html_attributes( $wrapper_attributes ); ?>>
			<?php echo $dismiss_button; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			<div class="e-notice__aside">
				<?php echo $icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			</div>
			<div class="e-notice__content">
				<?php if ( $options['title'] ) { ?>
					<h3><?php echo wp_kses_post( $options['title'] ); ?></h3>
				<?php } ?>

				<?php if ( $options['description'] ) { ?>
					<p><?php echo wp_kses_post( $options['description'] ); ?></p>
				<?php } ?>

				<?php if ( ! empty( $options['button']['text'] ) || ! empty( $options['button_secondary']['text'] ) ) { ?>
					<div class="e-notice__actions">
						<?php

						foreach ( [ $options['button'], $options['button_secondary'] ] as $index => $button_settings ) {
							if ( empty( $button_settings['variant'] ) && $index ) {
								$button_settings['variant'] = 'outline';
							}

							if ( empty( $button_settings['text'] ) ) {
								continue;
							}

							$button = new Button( $button_settings );
							$button->print_button();
						} ?>
					</div>
				<?php } ?>
			</div>
		</div>
	<?php }

	public function admin_notices() {
		$this->current_screen_id = get_current_screen()->id;

		foreach ( $this->plain_notices as $notice ) {
			$method_callback = "notice_{$notice}";
			if ( $this->$method_callback() ) {
				return;
			}
		}

		/** @var Base_Notice $notice_instance */
		foreach ( $this->get_notices() as $notice_instance ) {
			if ( ! $notice_instance->should_print() ) {
				continue;
			}

			$this->print_admin_notice( $notice_instance->get_config() );

			// It exits the method to make sure it prints only one notice.
			return;
		}
	}

	public static function add_plg_campaign_data( $url, $campaign_data ) {
		return $url;
	}

	/**
	 * @since 2.9.0
	 * @access public
	 */
	public function __construct() {
		add_action( 'admin_notices', [ $this, 'admin_notices' ], 20 );
	}

	/**
	 * Get module name.
	 *
	 * Retrieve the module name.
	 *
	 * @since  2.9.0
	 * @access public
	 *
	 * @return string Module name.
	 */
	public function get_name() {
		return 'admin-notices';
	}
}

