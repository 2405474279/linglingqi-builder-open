<?php
namespace Elementor\TemplateLibrary;

use Elementor\Core\Base\Document;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Private post storage for site settings and reusable design data. */
final class Source_Local {
	const CPT = 'elementor_library';

	private static $template_types = [];

	public static function register_storage(): void {
		register_post_type( self::CPT, [
			'public' => false,
			'show_ui' => false,
			'show_in_rest' => false,
			'rewrite' => false,
			'query_var' => false,
			'supports' => [ 'title', 'author', 'elementor', 'custom-fields' ],
		] );
	}

	public static function add_template_type( $type ): void {
		self::$template_types[ $type ] = $type;
	}

	public static function get_template_types(): array {
		return self::$template_types;
	}

	public static function get_template_type( $post_id ) {
		return get_post_meta( $post_id, Document::TYPE_META_KEY, true );
	}
}
