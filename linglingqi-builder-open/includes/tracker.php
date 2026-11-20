<?php
namespace Elementor;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Tracker {
	public static function init() {}
	public static function check_for_settings_optin( $new_value ) { return 'no'; }
	public static function send_tracking_data( $override = false ) {}
	public static function is_allow_track() { return false; }
	public static function handle_tracker_actions() {}
	public static function set_last_update_time() {}
	public static function get_last_update_time() { return false; }
	public static function has_terms_changed() { return false; }
	public static function get_posts_usage() { return []; }
	public static function get_library_usage() { return []; }
	public static function get_tracking_data() { return []; }
	public static function set_opt_in( $value ) {}
}
