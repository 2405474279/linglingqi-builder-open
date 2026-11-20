<?php
namespace Elementor;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Compatibility for extensions that still probe the former rollback action.
 * Releases are installed using the standard WordPress ZIP replacement flow.
 */
class Rollback {
	public function run() {
		return new \WP_Error( 'remote_rollback_disabled', '请在 WordPress 插件页上传要恢复的本地版本。' );
	}
}
