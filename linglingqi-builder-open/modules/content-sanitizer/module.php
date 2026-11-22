<?php

namespace Elementor\Modules\ContentSanitizer;

use Elementor\Core\Base\Module as BaseModule;
use Elementor\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends BaseModule {

	const WIDGET_TO_SANITIZE = 'heading';

	public function __construct() {
		parent::__construct();

		add_filter( 'elementor/document/save/data', [ $this, 'sanitize_content' ], 10, 2 );
	}

	public function get_name() {
		return 'content-sanitizer';
	}

	public function sanitize_content( $data, $document ): array {
		if ( current_user_can( 'manage_options' ) || empty( $data['elements'] ) || ! is_array( $data['elements'] ) ) {
			return $data;
		}

		$data['elements'] = Plugin::$instance->db->iterate_data( $data['elements'], function ( $element ) {
			$title = $element['settings']['title'] ?? null;
			if ( ( $element['widgetType'] ?? null ) === self::WIDGET_TO_SANITIZE && is_string( $title ) ) {
				$heading = Plugin::$instance->widgets_manager->get_widget_types( self::WIDGET_TO_SANITIZE );
				if ( is_callable( [ $heading, 'sanitize' ] ) ) {
					$element['settings']['title'] = $heading->sanitize( $title );
				}
			}

			return $element;
		} );

		return $data;
	}
}
