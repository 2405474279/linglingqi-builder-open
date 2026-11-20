<?php
namespace Elementor\Core\Upgrade;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Custom_Tasks {
	public static function opt_in_recalculate_usage( $updater ) {
		return Upgrades::recalc_usage_data( $updater );
	}

	public static function opt_in_send_tracking_data() {
		return;
	}
}
