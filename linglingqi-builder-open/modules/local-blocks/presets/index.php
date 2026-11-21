
<?php

use Elementor\Modules\AtomicWidgets\PropTypes\Background_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Color_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Dimensions_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Escaped_Html_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Flex_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Image_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Image_Src_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Link_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Number_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Url_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// The library creates fresh element and local-style IDs when it inserts a preset.
$next_id = 0;
$node = static function ( string $type, array $settings, array $props, array $children = [], array $mobile = [] ) use ( &$next_id ): array {
	$id = sprintf( '%07x', ++$next_id );
	$style_id = 'e-' . $id . '-preset';
	$style = Style_Definition::make()
		->set_label( 'preset' )
		->add_variant( Style_Variant::make()->set_breakpoint( 'desktop' )->add_props( $props ) );

	if ( $mobile ) {
		$style->add_variant( Style_Variant::make()->set_breakpoint( 'mobile' )->add_props( $mobile ) );
	}

	$settings['classes'] = Classes_Prop_Type::generate( [ $style_id ] );
	$element = [
		'id' => $id,
		'elType' => $type,
		'settings' => $settings,
		'styles' => [
			$style_id => $style->build( $style_id ),
		],
		'elements' => $children,
	];

	if ( 'e-flexbox' !== $type ) {
		$element['elType'] = 'widget';
		$element['widgetType'] = $type;
	}

	return $element;
};

$string = [ String_Prop_Type::class, 'generate' ];
$color = [ Color_Prop_Type::class, 'generate' ];
$size = static function ( $value, string $unit = 'px' ): array {
	return Size_Prop_Type::generate( [
		'size' => $value,
		'unit' => $unit,
	] );
};

$padding = static function ( int $block, int $inline ) use ( $size ): array {
	return Dimensions_Prop_Type::generate( [
		'block-start' => $size( $block ),
		'inline-end' => $size( $inline ),
		'block-end' => $size( $block ),
		'inline-start' => $size( $inline ),
	] );
};

$background = static function ( string $value ) use ( $color ): array {
	return Background_Prop_Type::generate( [ 'color' => $color( $value ) ] );
};

$flex = static function ( array $children, array $props, array $mobile = [], string $tag = 'div' ) use ( $node, $string ): array {
	return $node( 'e-flexbox', [ 'tag' => $string( $tag ) ], $props + [
		'display' => $string( 'flex' ),
		'flex-direction' => $string( 'row' ),
	], $children, $mobile );
};

$heading = static function ( string $content, int $font_size, array $props = [], string $tag = 'h2' ) use ( $node, $string, $size, $color ): array {
	return $node( 'e-heading', [
		'title' => Escaped_Html_Prop_Type::generate( $content ),
		'tag' => $string( $tag ),
	], $props + [
		'color' => $color( '#172641' ),
		'font-size' => $size( $font_size ),
		'font-weight' => $string( '700' ),
		'line-height' => $size( 1.2, 'em' ),
		'margin' => $size( 0 ),
	] );
};

$paragraph = static function ( string $content, array $props = [] ) use ( $node, $color, $size ): array {
	return $node( 'e-paragraph', [
		'paragraph' => Escaped_Html_Prop_Type::generate( $content ),
	], $props + [
		'color' => $color( '#45556d' ),
		'font-size' => $size( 16 ),
		'line-height' => $size( 1.65, 'em' ),
		'margin' => $size( 0 ),
	] );
};

$image = static function ( string $name, string $alt, array $props = [] ) use ( $node, $size, $string ): array {
	return $node( 'e-image', [
		'image' => Image_Prop_Type::generate( [
			'src' => Image_Src_Prop_Type::generate( [
				'url' => Url_Prop_Type::generate( ELEMENTOR_ASSETS_URL . "images/linglingqi-presets/{$name}.jpg" ),
				'alt' => $string( $alt ),
			] ),
			'size' => $string( 'full' ),
		] ),
	], $props + [
		'width' => $size( 100, '%' ),
		'aspect-ratio' => $string( '3 / 2' ),
		'object-fit' => $string( 'cover' ),
		'border-radius' => $size( 12 ),
	] );
};

$button = static function ( string $label, string $destination, array $props = [] ) use ( $node, $background, $padding, $size, $string, $color ): array {
	return $node( 'e-button', [
		'text' => Escaped_Html_Prop_Type::generate( $label ),
		'link' => Link_Prop_Type::generate( [
			'destination' => Url_Prop_Type::generate( $destination ),
			'tag' => $string( 'a' ),
		] ),
	], $props + [
		'background' => $background( '#2452bf' ),
		'color' => $color( '#ffffff' ),
		'text-decoration' => $string( 'none' ),
		'font-weight' => $string( '600' ),
		'border-radius' => $size( 8 ),
		'padding' => $padding( 12, 24 ),
	] );
};

$equal_width = [
	'min-width' => $size( 0 ),
	'flex' => Flex_Prop_Type::generate( [
		'flexGrow' => Number_Prop_Type::generate( 1 ),
		'flexShrink' => Number_Prop_Type::generate( 1 ),
		'flexBasis' => $size( 0, '%' ),
	] ),
];

$stack = [
	'flex-direction' => $string( 'column' ),
	'width' => $size( 100, '%' ),
	'padding' => $size( 0 ),
];

$mobile_full = [
	'flex' => Flex_Prop_Type::generate( [
		'flexGrow' => Number_Prop_Type::generate( 0 ),
		'flexShrink' => Number_Prop_Type::generate( 1 ),
		'flexBasis' => $size( null, 'auto' ),
	] ),
	'width' => $size( 100, '%' ),
];

$media = [
	[ 'coast', __( '蓝色海岸的抽象层叠图案', 'elementor' ) ],
	[ 'structure', __( '暖色建筑的抽象几何图案', 'elementor' ) ],
	[ 'dunes', __( '青绿色沙丘的抽象波纹图案', 'elementor' ) ],
];

$image_text = $flex( [
	$flex( [ $image( ...$media[0] ) ], $equal_width + [ 'padding' => $size( 0 ) ], $mobile_full ),
	$flex( [
		$heading( __( '用图片引出主题', 'elementor' ), 28 ),
		$paragraph( __( '在这里介绍这张图片和它所代表的内容。文字和图片都可以独立调整。', 'elementor' ) ),
	], $equal_width + $stack + [ 'gap' => $size( 12 ) ], $mobile_full ),
], [
	'width' => $size( 100, '%' ),
	'gap' => $size( 28 ),
	'align-items' => $string( 'center' ),
	'padding' => $padding( 24, 0 ),
], [
	'flex-direction' => $string( 'column' ),
	'gap' => $size( 16 ),
], 'section' );

$card_content = [
	[ __( '核心特点', 'elementor' ), __( '概述最值得读者了解的特点。', 'elementor' ) ],
	[ __( '适用场景', 'elementor' ), __( '说明读者可以在什么情况下使用它。', 'elementor' ) ],
	[ __( '接下来', 'elementor' ), __( '告诉读者下一步可以做什么。', 'elementor' ) ],
];

$cards = [];
$tiles = [];
foreach ( $media as $index => [ $name, $alt ] ) {
	[ $title, $description ] = $card_content[ $index ];
	$cards[] = $flex( [
		$image( $name, $alt ),
		$heading( $title, 21, [], 'h3' ),
		$paragraph( $description ),
	], $equal_width + [
		'flex-direction' => $string( 'column' ),
		'gap' => $size( 12 ),
		'padding' => $size( 16 ),
		'background' => $background( '#f2f5fa' ),
		'border-radius' => $size( 16 ),
	], $mobile_full, 'article' );

	$tiles[] = $flex( [ $image( $name, $alt ) ], $equal_width + [ 'padding' => $size( 0 ) ], $mobile_full );
}

$three_columns = [
	'width' => $size( 100, '%' ),
	'align-items' => $string( 'stretch' ),
	'gap' => $size( 16 ),
	'padding' => $size( 0 ),
];
$single_column = [ 'flex-direction' => $string( 'column' ) ];

$cta = $flex( [
	$heading( __( '准备好继续了解了吗？', 'elementor' ), 28, [ 'text-align' => $string( 'center' ) ] ),
	$paragraph( __( '用一句话说明两个入口分别通向哪里。', 'elementor' ), [ 'text-align' => $string( 'center' ) ] ),
	$flex( [
		$button( __( '浏览首页', 'elementor' ), home_url( '/' ) ),
		$button( __( '回到内容顶部', 'elementor' ), '#', [
			'background' => $background( '#e0e9fb' ),
			'color' => $color( '#183f98' ),
		] ),
	], [
		'justify-content' => $string( 'center' ),
		'flex-wrap' => $string( 'wrap' ),
		'gap' => $size( 12 ),
		'padding' => $size( 0 ),
	], $single_column ),
], [
	'width' => $size( 100, '%' ),
	'flex-direction' => $string( 'column' ),
	'align-items' => $string( 'center' ),
	'gap' => $size( 16 ),
	'background' => $background( '#eff4ff' ),
	'border-radius' => $size( 16 ),
	'padding' => $padding( 36, 24 ),
], [
	'padding' => $padding( 24, 16 ),
], 'section' );

return [
	'image-text' => [
		'title' => __( '图文双栏', 'elementor' ),
		'model' => $image_text,
	],
	'cards' => [
		'title' => __( '三列图文卡片', 'elementor' ),
		'model' => $flex( $cards, $three_columns, $single_column, 'section' ),
	],
	'image-wall' => [
		'title' => __( '图片墙', 'elementor' ),
		'model' => $flex( $tiles, $three_columns, $single_column, 'section' ),
	],
	'cta' => [
		'title' => __( '双按钮 CTA', 'elementor' ),
		'model' => $cta,
	],
];

