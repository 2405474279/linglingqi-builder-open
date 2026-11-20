<?php
namespace Elementor\Modules\WpCli;

use Elementor\Plugin;
use Elementor\TemplateLibrary\Source_Local;
use Elementor\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor Page Builder cli tools.
 */
class Command extends \WP_CLI_Command {

	/**
	 * Flush the Elementor Page Builder CSS Cache.
	 *
	 * [--network]
	 *      Flush CSS Cache for all the sites in the network.
	 *
	 * [--regenerate]
	 *      Re-create the CSS files. Otherwise they will be created by a page visit.
	 *
	 * ## EXAMPLES
	 *
	 *  1. wp elementor flush-css
	 *      - This will flush the CSS files for elementor page builder.
	 *
	 *  2. wp elementor flush-css --network
	 *      - This will flush the CSS files for elementor page builder for all the sites in the network.
	 *
	 *  3. wp elementor flush-css --regenerate
	 *      - This will flush the CSS files for elementor page builder and re-create the new CSS files.
	 *
	 * @since 2.1.0
	 * @access public
	 * @alias flush-css
	 */
	public function flush_css( $args, $assoc_args ) {
		$network = ! empty( $assoc_args['network'] ) && is_multisite();
		$should_regenerate = ! empty( $assoc_args['regenerate'] );

		if ( $network ) {
			$blog_ids = get_sites( [
				'fields' => 'ids',
				'number' => 0,
			] );

			foreach ( $blog_ids as $blog_id ) {
				switch_to_blog( $blog_id );

				$this->handle_flush( $should_regenerate, 'Flushed the Elementor CSS Cache for site - ' . get_option( 'home' ) );

				restore_current_blog();
			}
		} else {
			$this->handle_flush( $should_regenerate, 'Flushed the Elementor CSS Cache' );
		}
	}

	private function handle_flush( bool $should_regenerate, string $success_message ): void {
		Plugin::$instance->files_manager->clear_cache();

		if ( $should_regenerate ) {
			Plugin::$instance->files_manager->generate_css();
		}

		\WP_CLI::success( $success_message );
	}

	/**
	 * Print system info powered by Elementor
	 *
	 * ## EXAMPLES
	 *
	 *  1. wp elementor system-info
	 *      - This will print the System Info in JSON format
	 *
	 * @since 3.0.11
	 * @access public
	 * @alias system-info
	 */
	public function system_info() {
		echo wp_json_encode( \Elementor\Tracker::get_tracking_data() );
	}

	/**
	 * Replace old URLs with new URLs in all Elementor pages.
	 *
	 * [--force]
	 *      Suppress error messages. instead, return "0 database rows affected.".
	 *
	 * ## EXAMPLES
	 *
	 *  1. wp elementor replace-urls <old> <new>
	 *      - This will replace all <old> URLs with the <new> URL.
	 *
	 *  2. wp elementor replace-urls <old> <new> --force
	 *      - This will replace all <old> URLs with the <new> URL without throw errors.
	 *
	 * @access public
	 * @alias replace-urls
	 */
	public function replace_urls( $args, $assoc_args ) {
		if ( empty( $args[0] ) ) {
			\WP_CLI::error( 'Please set the `old` URL' );
		}

		if ( empty( $args[1] ) ) {
			\WP_CLI::error( 'Please set the ew` URL' );
		}

		try {
			$results = Utils::replace_urls( $args[0], $args[1] );
			\WP_CLI::success( $results );
		} catch ( \Exception $e ) {
			if ( isset( $assoc_args['force'] ) ) {
				\WP_CLI::success( '0 database rows affected.' );
			} else {
				\WP_CLI::error( $e->getMessage() );
			}
		}
	}


}
