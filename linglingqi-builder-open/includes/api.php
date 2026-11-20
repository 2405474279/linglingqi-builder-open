<?php
namespace Elementor;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Api {
	// Option / transient key names are retained (plain identifiers, no remote
	// URLs). core/upgrade/upgrades.php and the template library still read them.
	const LIBRARY_OPTION_KEY = 'elementor_remote_info_library';
	const FEED_OPTION_KEY = 'elementor_remote_info_feed_data';
	const TRANSIENT_KEY_PREFIX = 'elementor_remote_info_api_data_';

	public static function init() {}
	public static function get_info_data( $force = false, $context = '' ) { return []; }
	public static function get_upgrade_notice() { return false; }
	public static function get_admin_notice() { return false; }
	public static function get_canary_deployment_info( $force = false ) { return false; }
	public static function get_promotion_widgets() { return []; }
	public static function get_library_data( bool $force_update = false ) { return []; }
	public static function get_feed_data( $force_update = false ) { return []; }
	public static function get_deactivation_data() { return false; }
	public static function get_uninstalled_data() { return false; }
	public static function get_template_content( $template_id ) { return new \WP_Error( 'disabled', 'Remote templates disabled.' ); }
	public static function send_feedback( $feedback_key, $feedback_text ) { return new \WP_Error( 'disabled', 'Feedback disabled.' ); }
	public static function ajax_reset_api_data() { wp_send_json_success(); }
	public static function get_site_key() { return false; }
}
