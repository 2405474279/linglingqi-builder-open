<?php

namespace Elementor\Core\Utils\Promotions;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Promotion manager (de-promoted build).
 *
 * Kept with the original public signature so every caller in the codebase keeps
 * working. All outbound promotion/upgrade URLs are stripped, therefore no
 * upgrade link or remote brand destination can ever be rendered.
 */
class Filtered_Promotions_Manager {

	const EDITOR_PANEL_STICKY_FILTER = 'elementor/editor/panel/get_pro_details-sticky';

	/**
	 * @return array
	 */
	public static function get_editor_panel_sticky_promotion(): array {
		return [];
	}

	/**
	 * Mirrors the upstream signature exactly.
	 *
	 * @param array  $promotion_data
	 * @param string $filter_name
	 * @param string $url_key
	 * @param string $url_sub_key
	 *
	 * @return array
	 */
	public static function get_filtered_promotion_data( array $promotion_data, string $filter_name, string $url_key, string $url_sub_key = '' ): array {
		$new_promotion_data = apply_filters( $filter_name, $promotion_data );

		if ( ! is_array( $new_promotion_data ) ) {
			$new_promotion_data = $promotion_data;
		}

		$new_promotion_data = array_intersect_key( $new_promotion_data, array_flip( array_keys( $promotion_data ) ) );

		// Never expose an upgrade/remote destination.
		$new_promotion_data = array_replace( $promotion_data, $new_promotion_data );
		if ( isset( $new_promotion_data[ $url_key ] ) ) {
			if ( '' === $url_sub_key ) {
				$new_promotion_data[ $url_key ] = '';
			} elseif ( is_array( $new_promotion_data[ $url_key ] ) ) {
				$new_promotion_data[ $url_key ][ $url_sub_key ] = '';
			}
		}

		return $new_promotion_data;
	}
}
