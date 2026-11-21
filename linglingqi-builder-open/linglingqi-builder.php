<?php
/**
 * Plugin Name: 凌凌漆可视化编辑器（开源版）
 * Description: WordPress 可视化编辑器，支持响应式布局及 Elementor 基础和常规组件。
 * Version: 1.1.0
 * Author: 凌凌漆
 * Requires PHP: 7.4
 * Requires at least: 6.8
 * Text Domain: elementor
 *
 * @package LingLingQiBuilder
 * @category Core
 *
 * Elementor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * Elementor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Both editions use Elementor's classes and WordPress data keys.
$llq_open_active_plugins = (array) get_option( 'active_plugins', [] );
if ( is_multisite() ) {
	$llq_open_active_plugins = array_merge( $llq_open_active_plugins, array_keys( (array) get_site_option( 'active_sitewide_plugins', [] ) ) );
}
foreach ( $llq_open_active_plugins as $llq_open_plugin_file ) {
	$llq_open_plugin_name = basename( $llq_open_plugin_file );
	if ( $llq_open_plugin_file !== plugin_basename( __FILE__ ) && in_array( $llq_open_plugin_name, [ 'elementor.php', 'linglingqi-builder.php' ], true ) ) {
		add_action( 'admin_notices', static function () {
			echo '<div class="notice notice-warning"><p>' . esc_html__( '请先停用其他版本的 Elementor 或凌凌漆，再使用凌凌漆开源版。', 'elementor' ) . '</p></div>';
		} );
		return;
	}
}
if ( defined( 'ELEMENTOR_VERSION' ) ) {
	return;
}

define( 'ELEMENTOR_VERSION', '1.1.0' );

/**
 * Compatibility baseline of the upstream codebase this build is derived from.
 *
 * Elementor gates several features on "was this site first installed at or
 * after version X". Renumbering the plugin to 1.0.0 would otherwise make
 * every install look ancient and silently disable flex/grid containers and
 * other `new_site` gated features.
 */
define( 'ELEMENTOR_COMPAT_BASELINE', '4.3.6' );
define( 'ELEMENTOR_MINIMUM_WP_VERSION', '6.8' );

define( 'ELEMENTOR__FILE__', __FILE__ );
define( 'ELEMENTOR_PLUGIN_BASE', plugin_basename( ELEMENTOR__FILE__ ) );
define( 'ELEMENTOR_PATH', plugin_dir_path( ELEMENTOR__FILE__ ) );

if ( defined( 'ELEMENTOR_TESTS' ) && ELEMENTOR_TESTS ) {
	define( 'ELEMENTOR_URL', 'file://' . ELEMENTOR_PATH );
} else {
	define( 'ELEMENTOR_URL', plugins_url( '/', ELEMENTOR__FILE__ ) );
}

define( 'ELEMENTOR_MODULES_PATH', plugin_dir_path( ELEMENTOR__FILE__ ) . '/modules' );
define( 'ELEMENTOR_ASSETS_PATH', ELEMENTOR_PATH . 'assets/' );
define( 'ELEMENTOR_ASSETS_URL', ELEMENTOR_URL . 'assets/' );

/**
 * Load the bundled translation catalog.
 *
 * Upstream relies on WordPress fetching translations from
 * wp-content/languages/plugins/. This build ships its own catalog inside the
 * plugin so translations work on any site with no round-trip to WordPress.org.
 * Registered early on `init` so it runs before any string is translated.
 */
function linglingqi_open_load_textdomain() {
	// The catalog is request-invariant once loaded; parsing the ~300 KB MO file
	// a second time (and merging it into itself) only costs CPU and memory.
	if ( is_textdomain_loaded( 'elementor' ) ) {
		return;
	}

	$locale = determine_locale();

	/**
	 * Load by absolute path first. `load_plugin_textdomain()` resolves against
	 * WP_PLUGIN_DIR and silently no-ops when that resolution does not match the
	 * real install location, which would leave the whole UI in English.
	 */
	$mofile = ELEMENTOR_PATH . 'languages/elementor-' . $locale . '.mo';

	$loaded = false;

	if ( is_readable( $mofile ) ) {
		$loaded = load_textdomain( 'elementor', $mofile );
	}

	// Fallback only: a second load would re-parse and merge the same catalog.
	if ( ! $loaded ) {
		load_plugin_textdomain( 'elementor', false, dirname( ELEMENTOR_PLUGIN_BASE ) . '/languages' );
	}
}
// Loaded on plugins_loaded (not init) so that post-type and taxonomy labels,
// which WordPress captures at registration time, are already translated.
add_action( 'plugins_loaded', 'linglingqi_open_load_textdomain', 0 );
add_action( 'init', 'linglingqi_open_load_textdomain', 1 );

/**
 * Serve JS-side translations from inside the plugin.
 *
 * WordPress resolves script translations to
 * WP_LANG_DIR/plugins/<domain>-<locale>-<md5 of relative src>.json, i.e. OUTSIDE
 * the plugin directory. That is why upstream depends on translation files
 * downloaded from translate.wordpress.org. Pointing the lookup at the bundled Jed
 * JSON keeps the editor UI translated with no network access and no dependency on
 * wp-content/languages being populated.
 *
 * The catalog is injected ONCE per request. Every handle shares the single
 * `elementor` text domain and wp.i18n accumulates locale data, so handing the
 * same ~260 KB JSON to all ~36 handles would inline it 36 times and inflate the
 * editor document to ~9 MB. The first requesting handle carries the catalog -
 * in practice `elementor-common`, because WordPress prints scripts in
 * dependency order.
 */
function linglingqi_open_script_translation_file( $file, $handle, $domain ) {
	if ( 'elementor' !== $domain ) {
		return $file;
	}

	static $injected = false;

	// Injected once per request; every other handle reuses the same domain data.
	if ( $injected ) {
		return false;
	}

	$path = ELEMENTOR_PATH . 'languages/elementor-' . determine_locale() . '.json';

	if ( ! is_readable( $path ) ) {
		return $file;
	}

	$injected = true;

	return $path;
}
add_filter( 'load_script_translation_file', 'linglingqi_open_script_translation_file', 10, 3 );

/**
 * Hide dead outbound links inside the JS-rendered Atomic editor opt-in panel.
 *
 * That panel is a prebuilt React bundle; its "learn more" anchors point at
 * github.com and at scrubbed relative paths that 404 locally. The bundle is
 * official webpack output kept byte-faithful, so the links are hidden at the
 * presentation layer instead of patching minified JavaScript.
 */
function linglingqi_open_hide_dead_optin_links() {
	// Scoped to this plugin's admin screens; printing the rule on unrelated
	// admin pages would add dead bytes to every request.
	if ( ! isset( $_GET['page'] ) || 0 !== strpos( sanitize_text_field( wp_unslash( $_GET['page'] ) ), 'elementor' ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return;
	}

	echo "<style>#tab-editor-v4-opt-in a[href^=\"/\"],#tab-editor-v4-opt-in a[href*=\"github.com\"],#tab-editor-v4-opt-in a[href=\"\"],#editor-one-sidebar-navigation a[href=\"\"],#editor-one-sidebar-navigation button:not(.MuiButtonBase-root){display:none !important;}</style>\n";
}
add_action( 'admin_head', 'linglingqi_open_hide_dead_optin_links' );

/**
 * One-time repair for a false Font Awesome 4 migration flag.
 *
 * Builds <= 1.0.6 let their own 1.x version reach the Elementor DB-version
 * option, so the upgrade runner replayed every historical routine above 1.x,
 * including the 2.6.0 routine that sets the FA4 migration flag. On a site that
 * never stored Font Awesome 4 icons the flag is a false positive: it flips
 * `elementor.config.icons_update_needed` to true, which makes the editor
 * dereference an unset panel element when a widget is added from the panel
 * (TypeError: Cannot read properties of undefined (reading 'model')).
 *
 * The flag is cleared only when no stored content references the FA4 icon
 * library, so sites that genuinely migrated from an old Elementor keep their
 * migration tooling. Runs once per site.
 */
function linglingqi_open_repair_false_fa4_flag() {
	if ( get_option( 'linglingqi_fa4_flag_repaired' ) ) {
		return;
	}

	update_option( 'linglingqi_fa4_flag_repaired', time() );

	if ( null === get_option( 'elementor_icon_manager_needs_update', null ) ) {
		return;
	}

	global $wpdb;

	// FA4 icons survive either as an icons-control array with library "fa",
	// or as pre-migration string values such as "fa fa-star".
	$found = $wpdb->get_var(
		$wpdb->prepare(
			"SELECT post_id FROM {$wpdb->postmeta} WHERE meta_key = '_elementor_data' AND ( meta_value LIKE %s OR meta_value LIKE %s ) LIMIT 1",
			'%"library":"fa"%',
			'%fa fa-%'
		)
	);

	if ( $found ) {
		return;
	}

	delete_option( 'elementor_icon_manager_needs_update' );
	delete_option( 'elementor_load_fa4_shim' );
}
add_action( 'admin_init', 'linglingqi_open_repair_false_fa4_flag', 5 );


if ( file_exists( ELEMENTOR_PATH . 'vendor/autoload_packages.php' ) ) {
	require_once ELEMENTOR_PATH . 'vendor/autoload_packages.php';
} elseif ( file_exists( ELEMENTOR_PATH . 'vendor/autoload.php' ) ) {
	require_once ELEMENTOR_PATH . 'vendor/autoload.php';
	// We need this file because of the DI\create function that we are using.
	// Autoload classmap doesn't include this file.
}

$deprecation_func_file = ELEMENTOR_PATH . 'vendor_prefixed/twig/symfony/deprecation-contracts/function.php';
if ( file_exists( $deprecation_func_file ) ) {
	require_once $deprecation_func_file;
	if ( ! function_exists( 'trigger_deprecation' ) ) {
		function trigger_deprecation( string $package, string $version, string $message, ...$args ): void {
			\ElementorDeps\trigger_deprecation( $package, $version, $message, ...$args );
		}
	}
}

if ( ! version_compare( PHP_VERSION, '7.4', '>=' ) ) {
	add_action( 'admin_notices', 'linglingqi_open_fail_php_version' );
} elseif ( ! version_compare( get_bloginfo( 'version' ), ELEMENTOR_MINIMUM_WP_VERSION, '>=' ) ) {
	add_action( 'admin_notices', 'linglingqi_open_fail_wp_version' );
} else {
	require ELEMENTOR_PATH . 'includes/plugin.php';
}

/**
 * Elementor admin notice for minimum PHP version.
 *
 * Warning when the site doesn't have the minimum required PHP version.
 *
 * @since 1.0.0
 *
 * @return void
 */
function linglingqi_open_fail_php_version() {
	$html_message = sprintf(
		'<div class="error"><h3>%1$s</h3><p>%2$s</p></div>',
		esc_html__( 'Elementor isn’t running because PHP is outdated.', 'elementor' ),
		sprintf(
			/* translators: %s: PHP version. */
			esc_html__( 'Update to version %s and get back to creating!', 'elementor' ),
			'7.4'
		),
		esc_html__( 'Show me how', 'elementor' )
	);

	echo wp_kses_post( $html_message );
}

/**
 * Elementor admin notice for minimum WordPress version.
 *
 * Warning when the site doesn't have the minimum required WordPress version.
 *
 * @since 1.5.0
 *
 * @return void
 */
function linglingqi_open_fail_wp_version() {
	$html_message = sprintf(
		'<div class="error"><h3>%1$s</h3><p>%2$s</p></div>',
		esc_html__( 'Elementor isn’t running because WordPress is outdated.', 'elementor' ),
		sprintf(
			/* translators: %s: WordPress version. */
			esc_html__( 'Update to version %s and get back to creating!', 'elementor' ),
			ELEMENTOR_MINIMUM_WP_VERSION
		),
		esc_html__( 'Show me how', 'elementor' )
	);

	echo wp_kses_post( $html_message );
}



