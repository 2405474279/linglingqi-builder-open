<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Build WordPress update metadata from the official public GitHub Release.
 */
function linglingqi_open_fetch_release_update() {
	$repo = '2405474279/linglingqi-builder-open';
	$response = wp_safe_remote_get( 'https://api.github.com/repos/' . $repo . '/releases/latest', [
		'timeout' => 4,
		'redirection' => 0,
		'limit_response_size' => 256 * 1024,
		'user-agent' => 'LingLingQi-Builder-Update',
		'headers' => [
			'Accept' => 'application/vnd.github+json',
		],
	] );

	if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {
		return [];
	}

	$release = json_decode( wp_remote_retrieve_body( $response ), true );
	$tag = $release['tag_name'] ?? null;

	if ( false !== ( $release['draft'] ?? null ) || false !== ( $release['prerelease'] ?? null ) ||
		! is_string( $tag ) || ! preg_match( '/^v((?:0|[1-9][0-9]*)(?:\.(?:0|[1-9][0-9]*)){2})$/D', $tag, $match ) ||
		! is_array( $release['assets'] ?? null ) ) {
		return [];
	}

	$asset_name = 'linglingqi-builder-open-' . $tag . '.zip';
	$release_url = 'https://github.com/' . $repo . '/releases/';
	$package_url = $release_url . 'download/' . $tag . '/' . $asset_name;

	foreach ( $release['assets'] as $asset ) {
		if ( $asset_name === ( $asset['name'] ?? null ) && 'uploaded' === ( $asset['state'] ?? null ) &&
			$package_url === ( $asset['browser_download_url'] ?? null ) && (int) ( $asset['size'] ?? 0 ) > 0 ) {
			return [
				'slug' => 'linglingqi-builder-open',
				'version' => $match[1],
				'url' => $release_url . 'tag/' . $tag,
				'package' => $package_url,
			];
		}
	}

	return [];
}

/**
 * Let core compare versions and handle update permissions and installation.
 */
function linglingqi_open_release_update( $update, $plugin_data, $plugin_file ) {
	if ( ELEMENTOR_PLUGIN_BASE !== $plugin_file ||
		'https://github.com/2405474279/linglingqi-builder-open' !== ( $plugin_data['UpdateURI'] ?? '' ) ) {
		return $update;
	}

	$cache_key = 'linglingqi_open_release_update_v1';
	$release = get_site_transient( $cache_key );

	if ( false === $release ) {
		$release = linglingqi_open_fetch_release_update();
		set_site_transient( $cache_key, $release, $release ? 15 * MINUTE_IN_SECONDS : MINUTE_IN_SECONDS );
	}

	return $release ?: $update;
}
add_filter( 'update_plugins_github.com', 'linglingqi_open_release_update', 10, 3 );

/**
 * Apply core's package compatibility checks to this plugin's online updates.
 */
function linglingqi_open_check_update_package( $source, $remote_source, $upgrader, $hook_extra ) {
	if ( is_wp_error( $source ) || 'update' !== ( $hook_extra['action'] ?? '' ) ||
		ELEMENTOR_PLUGIN_BASE !== ( $hook_extra['plugin'] ?? '' ) || ! $upgrader instanceof \Plugin_Upgrader ) {
		return $source;
	}

	global $wp_filesystem;

	if ( dirname( ELEMENTOR_PLUGIN_BASE ) !== basename( untrailingslashit( $source ) ) ||
		! $wp_filesystem->is_file( trailingslashit( $source ) . basename( ELEMENTOR_PLUGIN_BASE ) ) ) {
		return new WP_Error( 'linglingqi_invalid_update_package', __( '升级包缺少凌凌漆开源版的插件目录或入口文件。', 'elementor' ) );
	}

	return $upgrader->check_package( $source );
}
add_filter( 'upgrader_source_selection', 'linglingqi_open_check_update_package', 10, 4 );
