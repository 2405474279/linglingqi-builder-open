<?php
namespace Elementor;

use Elementor\Core\Admin\Menu\Admin_Menu_Manager;
use Elementor\Core\Kits\Manager;
use Elementor\Includes\Settings\AdminMenuItems\Tools_Menu_Item;
use Elementor\Modules\EditorOne\Classes\Menu_Data_Provider;
use Elementor\Includes\Settings\AdminMenuItems\Editor_One_Tools_Menu;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor "Tools" page in WordPress Dashboard.
 *
 * Elementor settings page handler class responsible for creating and displaying
 * Elementor "Tools" page in WordPress dashboard.
 *
 * @since 1.0.0
 */
class Tools extends Settings_Page {

	const CAPABILITY = 'manage_options';

	/**
	 * Settings page ID for Elementor tools.
	 */
	const PAGE_ID = 'elementor-tools';

	/**
	 * Clear cache.
	 *
	 * Delete post meta containing the post CSS file data. And delete the actual
	 * CSS files from the upload directory.
	 *
	 * Fired by `wp_ajax_elementor_clear_cache` action.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function ajax_elementor_clear_cache() {
		check_ajax_referer( 'elementor_clear_cache', '_nonce' );

		if ( ! current_user_can( static::CAPABILITY ) ) {
			wp_send_json_error( 'Permission denied' );
		}

		Plugin::$instance->files_manager->clear_cache();

		wp_send_json_success();
	}

	public function admin_post_elementor_site_clear_cache() {
		check_ajax_referer( 'elementor_site_clear_cache' );

		if ( ! current_user_can( static::CAPABILITY ) ) {
			wp_die( 'Permission denied' );
		}

		Plugin::$instance->files_manager->clear_cache();

		$http_referer = wp_get_raw_referer();
		if ( empty( $http_referer ) ) {
			$http_referer = admin_url( 'admin.php?page=' . static::PAGE_ID );
		}

		wp_safe_redirect( $http_referer );
		die;
	}

	/**
	 * Recreate kit.
	 *
	 * Recreate default kit (only when default kit does not exist).
	 *
	 * Fired by `wp_ajax_elementor_recreate_kit` action.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function ajax_elementor_recreate_kit() {
		check_ajax_referer( 'elementor_recreate_kit', '_nonce' );

		if ( ! current_user_can( static::CAPABILITY ) ) {
			wp_send_json_error( 'Permission denied' );
		}

		$kit = Plugin::$instance->kits_manager->get_active_kit();

		if ( $kit->get_id() ) {
			wp_send_json_error( [ 'message' => esc_html__( 'There\'s already an active kit.', 'elementor' ) ], 400 );
		}

		$created_default_kit = Plugin::$instance->kits_manager->create_default();

		if ( ! $created_default_kit ) {
			wp_send_json_error( [ 'message' => esc_html__( 'An error occurred while trying to create a kit.', 'elementor' ) ], 500 );
		}

		update_option( Manager::OPTION_ACTIVE, $created_default_kit );

		wp_send_json_success( esc_html__( 'New kit have been created successfully', 'elementor' ) );
	}

	/**
	 * Replace URLs.
	 *
	 * Sends an ajax request to replace old URLs to new URLs. This method also
	 * updates all the Elementor data.
	 *
	 * Fired by `wp_ajax_elementor_replace_url` action.
	 *
	 * @since 1.1.0
	 * @access public
	 */
	public function ajax_elementor_replace_url() {
		check_ajax_referer( 'elementor_replace_url', '_nonce' );

		if ( ! current_user_can( static::CAPABILITY ) ) {
			wp_send_json_error( 'Permission denied' );
		}

		$from = Utils::get_super_global_value( $_POST, 'from' ) ?? '';
		$to = Utils::get_super_global_value( $_POST, 'to' ) ?? '';

		try {
			$results = Utils::replace_urls( $from, $to );
			wp_send_json_success( $results );
		} catch ( \Exception $e ) {
			wp_send_json_error( $e->getMessage() );
		}
	}

	/**
	 * Elementor version rollback.
	 *
	 * Rollback to previous Elementor version.
	 *
	 * Fired by `admin_post_elementor_rollback` action.
	 *
	 * @since 1.5.0
	 * @access public
	 */
	public function post_elementor_rollback() {
		check_admin_referer( 'elementor_rollback' );

		if ( ! static::can_user_rollback_versions() ) {
			wp_die( esc_html__( 'Not allowed to rollback versions', 'elementor' ) );
		}

		$rollback_versions = $this->get_rollback_versions();
		$version = Utils::get_super_global_value( $_GET, 'version' );

		if ( empty( $version ) || ! in_array( $version, $rollback_versions, true ) ) {
			wp_die( esc_html__( 'An error occurred, the selected version is invalid. Try selecting different version.', 'elementor' ) );
		}

		/**
		 * Filter to allow override the rollback process.
		 * Should return an instance of `Rollback` class.
		 *
		 * @since 3.16.0
		 *
		 * @param Rollback|null $rollback The rollback instance.
		 * @param string        $version  The version to roll back to.
		 */
		// This self-maintained build has no upstream package on wordpress.org, and
		// the default Rollback uses the main file name as the download slug. Refuse
		// outright: the admin-post route stays reachable even when the UI hides it.
		wp_die(
			esc_html__( 'Version rollback is not available in this self-maintained build. Upload a new plugin package to update.', 'elementor' ),
			esc_html__( 'Rollback to Previous Version', 'elementor' ),
			[ 'response' => 400 ]
		);
	}

	/**
	 * Tools page constructor.
	 *
	 * Initializing Elementor "Tools" page.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {
		parent::__construct();

		add_action( 'elementor/editor-one/menu/register', function ( Menu_Data_Provider $menu_data_provider ) {
			$this->register_editor_one_menu( $menu_data_provider );
		} );

		add_action( 'wp_ajax_elementor_clear_cache', [ $this, 'ajax_elementor_clear_cache' ] );
		add_action( 'admin_post_elementor_site_clear_cache', [ $this, 'admin_post_elementor_site_clear_cache' ] );
		add_action( 'wp_ajax_elementor_replace_url', [ $this, 'ajax_elementor_replace_url' ] );
		add_action( 'wp_ajax_elementor_recreate_kit', [ $this, 'ajax_elementor_recreate_kit' ] );

		add_action( 'admin_post_elementor_rollback', [ $this, 'post_elementor_rollback' ] );
	}

	private function register_editor_one_menu( Menu_Data_Provider $menu_data_provider ) {
		$menu_data_provider->register_menu( new Editor_One_Tools_Menu() );
	}

	public function get_warning_span( string $text ): string {
		$color = 'var(--e-one-palette-error-main)';
		return sprintf( '<span style="color: %s;">%s</span>', esc_attr( $color ), esc_html( $text ) );
	}

	private function get_rollback_versions() {
		// Self-maintained build: no upstream version list is fetched.
		return apply_filters( 'elementor/settings/rollback/versions', [] );
	}

	/**
	 * Create tabs.
	 *
	 * Return the tools page tabs, sections and fields.
	 *
	 * @since 1.5.0
	 * @access protected
	 *
	 * @return array An array with the page tabs, sections and fields.
	 */
	protected function create_tabs() {
		$rollback_html = '<select class="elementor-rollback-select">';

		foreach ( $this->get_rollback_versions() as $version ) {
			$rollback_html .= "<option value='{$version}'>$version</option>";
		}
		$rollback_html .= '</select>';

		$tabs = [
			'general' => [
				'label' => esc_html__( 'General', 'elementor' ),
				'sections' => [
					'tools' => [
						'fields' => [
							'clear_cache' => [
								'label' => esc_html__( 'Elementor Cache', 'elementor' ),
								'field_args' => [
									'type' => 'raw_html',
									'html' => sprintf( '<button data-nonce="%s" data-id="elementor-tools-general-button-clear-files-data" class="button elementor-button-spinner" id="elementor-clear-cache-button">%s</button>', wp_create_nonce( 'elementor_clear_cache' ), esc_html__( 'Clear Files & Data', 'elementor' ) ),
									'desc' => esc_html__( "Clear outdated CSS files and cached data in the database (rendered HTML, JS/CSS assets, etc.). We'll regenerate those files the next time someone visits any page on your website.", 'elementor' ),
								],
							],
							'reset_api_data' => [
								'label' => esc_html__( 'Sync Library', 'elementor' ),
								'field_args' => [
									'type' => 'raw_html',
									'html' => sprintf( '<button data-nonce="%s" data-id="elementor-tools-general-button-sync-library" class="button elementor-button-spinner" id="elementor-library-sync-button">%s</button>', wp_create_nonce( 'elementor_reset_library' ), esc_html__( 'Sync Library', 'elementor' ) ),
									'desc' => esc_html__( 'Elementor Library automatically updates on a daily basis. You can also manually update it by clicking on the sync button.', 'elementor' ),
								],
							],
						],
					],
				],
			],
			'replace_url' => [
				'label' => esc_html__( 'Replace URL', 'elementor' ),
				'sections' => [
					'replace_url' => [
						'callback' => function() {
							echo '<h2>' . esc_html__( 'Replace URL', 'elementor' ) . '</h2>';
							printf(
								'<p><strong>%1$s</strong> %2$s</p>',
								esc_html__( 'Important:', 'elementor' ),
								sprintf(
									/* translators: 1: Link open tag, 2: Link close tag. */
									esc_html__( 'It is strongly recommended to %1$sbackup the database%2$s before using replacing URLs.', 'elementor' ),
									'<strong>',
									'</strong>'
								)
							);
						},
						'fields' => [
							'replace_url' => [
								'label' => esc_html__( 'Update Site Address (URL)', 'elementor' ),
								'field_args' => [
									'type' => 'raw_html',
									'html' => sprintf( '<input type="text" name="from" placeholder="https://old.example.com" class="large-text"><input type="text" name="to" placeholder="https://new.example.com" class="large-text"><button data-nonce="%s" data-id="elementor-tools-replace_url-button-replace-url" class="button elementor-button-spinner" id="elementor-replace-url-button">%s</button>', wp_create_nonce( 'elementor_replace_url' ), esc_html__( 'Replace URL', 'elementor' ) ),
									'desc' => esc_html__( 'Enter your old and new URLs for your WordPress installation, to update all Elementor data (Relevant for domain transfers or move to \'HTTPS\').', 'elementor' ),
								],
							],
						],
					],
				],
			],
			'versions' => [
				'show_if' => static::can_user_rollback_versions(),
				'label' => esc_html__( 'Version Control', 'elementor' ),
				'sections' => [
					'rollback' => [
						'label' => esc_html__( 'Rollback to Previous Version', 'elementor' ),
						'callback' => function() {
							$intro_text = '<p>' . esc_html__( 'This is a self-maintained build. It does not follow upstream releases, so rolling back to an official version is not available.', 'elementor' ) . '</p>';

							Utils::print_unescaped_internal_string( $intro_text );
						},
						'fields' => [
							'rollback' => [
								'label' => esc_html__( 'Version', 'elementor' ),
								'field_args' => [
									'type' => 'raw_html',
									'html' => '<p class="description">' . sprintf( esc_html__( 'Current version: %s. To update, upload a new plugin package.', 'elementor' ), ELEMENTOR_VERSION ) . '</p>',
									'desc' => '',
								],
							],
						],
					],
					'beta' => [
						'show_if' => false,
						'label' => esc_html__( 'Beta Tester', 'elementor' ),
						'fields' => [
							'beta' => [
								'label' => esc_html__( 'Beta Tester', 'elementor' ),
								'field_args' => [
									'type' => 'select',
									'std' => 'no',
									'options' => [
										'no' => esc_html__( 'Disable', 'elementor' ),
										'yes' => esc_html__( 'Enable', 'elementor' ),
									],
									'desc' => $this->get_warning_span( esc_html__( 'Please Note: We do not recommend updating to a beta version on production sites.', 'elementor' ) ),
								],
							],
						],
					],
				],
			],
		];

		if ( ! Plugin::$instance->kits_manager->get_active_kit()->get_id() ) {
			$tabs['general']['sections']['tools']['fields']['recreate_kit'] = [
				'label' => esc_html__( 'Recreate Kit', 'elementor' ),
				'field_args' => [
					'type' => 'raw_html',
					'html' => sprintf( '<button data-nonce="%s" class="button elementor-button-spinner" id="elementor-recreate-kit-button">%s</button>', wp_create_nonce( 'elementor_recreate_kit' ), esc_html__( 'Recreate Kit', 'elementor' ) ),
					'desc' => esc_html__( 'It seems like your site doesn\'t have any active Kit. The active Kit includes all of your Site Settings. By recreating your Kit you will able to start edit your Site Settings again.', 'elementor' ),
				],
			];
		}
		return $tabs;
	}

	/**
	 * Get tools page title.
	 *
	 * Retrieve the title for the tools page.
	 *
	 * @since 1.5.0
	 * @access protected
	 *
	 * @return string Tools page title.
	 */
	protected function get_page_title() {
		return esc_html__( '工具', 'elementor' );
	}

	/**
	 * Check if the current user can access the version control tab and rollback versions.
	 *
	 * @return bool
	 */
	public static function can_user_rollback_versions() {
		return current_user_can( 'activate_plugins' ) && current_user_can( 'update_plugins' );
	}

	/**
	 * Check if the beta tester should be displayed.
	 *
	 * @since 3.19.0
	 *
	 * @return bool
	 */
	public function display_beta_tester(): bool {
		// Beta programme removed from this build.
		$display_beta_tester = false;
		/**
		 * Filter to allow override the display of the beta tester.
		 *
		 * @param bool $display_beta_tester Whether to display the beta tester.
		 *
		 * @since 3.19.0
		 *
		 * return bool
		 */
		return apply_filters( 'elementor/admin/show_beta_tester', $display_beta_tester );
	}
}


