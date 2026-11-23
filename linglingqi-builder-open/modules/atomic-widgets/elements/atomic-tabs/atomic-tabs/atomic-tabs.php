<?php
namespace Elementor\Modules\AtomicWidgets\Elements\Atomic_Tabs\Atomic_Tabs;

use Elementor\Modules\AtomicWidgets\Elements\Atomic_Paragraph\Atomic_Paragraph;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Element_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Element_Template;
use Elementor\Modules\AtomicWidgets\Elements\Base\Html_Tag_Computer;
use Elementor\Modules\AtomicWidgets\Elements\Base\Render_Context;
use Elementor\Modules\AtomicWidgets\PropTypes\Escaped_Html_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Number_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Dimensions_Prop_Type;
use Elementor\Modules\AtomicWidgets\Controls\Types\Elements\Tabs_Control;
use Elementor\Modules\AtomicWidgets\Elements\Loader\Frontend_Assets_Loader;
use Elementor\Modules\AtomicWidgets\Elements\Atomic_Tabs\Atomic_Tab\Atomic_Tab;
use Elementor\Modules\AtomicWidgets\Elements\Atomic_Tabs\Atomic_Tab_Content\Atomic_Tab_Content;
use Elementor\Modules\AtomicWidgets\Elements\Atomic_Tabs\Atomic_Tabs_Menu\Atomic_Tabs_Menu;
use Elementor\Modules\AtomicWidgets\Elements\Atomic_Tabs\Atomic_Tabs_Content_Area\Atomic_Tabs_Content_Area;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;
use Elementor\Core\Utils\Collection;
use Elementor\Utils;
use Elementor\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Atomic_Tabs extends Atomic_Element_Base {
	use Has_Element_Template;

	const BASE_STYLE_KEY = 'base';
	const ELEMENT_TYPE_TABS_MENU = 'e-tabs-menu';
	const ELEMENT_TYPE_TABS_CONTENT_AREA = 'e-tabs-content-area';
	const ELEMENT_TYPE_TAB = 'e-tab';
	const ELEMENT_TYPE_TAB_CONTENT = 'e-tab-content';

	public static $widget_description = 'Create a tabbed interface with customizable tabs and content areas. Structure: e-tabs contains e-tabs-menu (with e-tab triggers) and e-tabs-content-area (with e-tab-content panels). The number of e-tab elements MUST equal the number of e-tab-content elements. Each e-tab at index N is paired with the e-tab-content at index N.';

	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );
		$this->meta( 'is_container', true );
		$this->meta( 'is_compound', true );
	}

	public static function get_type() {
		return 'e-tabs';
	}

	public static function get_element_type(): string {
		return 'e-tabs';
	}

	public function get_title() {
		return esc_html__( '原子选项卡', 'elementor' );
	}

	public function get_keywords() {
		return [ 'atomic', 'tabs', 'tab', '选项卡', '标签页', '原子' ];
	}

	public function get_icon() {
		return 'eicon-tabs';
	}

	public static function get_computed_html_tag( array $settings ): string {
		return Html_Tag_Computer::compute( $settings, 'div' );
	}

	protected static function define_props_schema(): array {
		return [
			'classes' => Classes_Prop_Type::make()
				->default( [] ),
			'default-active-tab' => Number_Prop_Type::make()
				->default( 0 )
				->meta( Overridable_Prop_Type::ignore() ),
			'attributes' => Attributes_Prop_Type::make()->meta( Overridable_Prop_Type::ignore() ),
		];
	}

	protected function define_atomic_controls(): array {
		return [
			Section::make()
				->set_label( __( 'Content', 'elementor' ) )
				->set_id( 'content' )
				->set_items( [
					Tabs_Control::make()
					->set_label( __( '选项卡条目', 'elementor' ) )
					->set_meta( [
						'layout' => 'custom',
					] ),
				] ),
			Section::make()
				->set_label( __( '设置', 'elementor' ) )
				->set_id( 'settings' )
				->set_items( [
					Text_Control::bind_to( '_cssid' )
						->set_label( __( 'ID', 'elementor' ) )
						->set_meta( [
							'layout' => 'two-columns',
						] ),
				] ),
		];
	}

	protected function define_base_styles(): array {
		$styles = [
			'display' => String_Prop_Type::generate( 'flex' ),
			'flex-direction' => String_Prop_Type::generate( 'column' ),
			'gap' => Size_Prop_Type::generate( [
				'size' => 30,
				'unit' => 'px',
			]),
			'padding' => Dimensions_Prop_Type::generate( [
				'block-start' => Size_Prop_Type::generate( [
					'size' => 0,
					'unit' => 'px',
				]),
			] ),
		];

		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->add_props( $styles )
				),
		];
	}

	protected function define_default_children() {
		$tab_elements = [];
		$tab_content_elements = [];

		$examples = [
			[ __( '概览', 'elementor' ), __( '在这里介绍页面的要点。', 'elementor' ) ],
			[ __( '使用说明', 'elementor' ), __( '选中这个内容面板，可以加入图片、按钮或其他原子组件。', 'elementor' ) ],
		];

		foreach ( $examples as $index => [ $label, $body ] ) {
			$position = $index + 1;
			$tab_elements[] = Atomic_Tab::generate()
				->editor_settings( [
					'title' => $label,
					'initial_position' => $position,
				] )
				->children( [
					Atomic_Paragraph::generate()
						->settings( [
							'paragraph' => Escaped_Html_Prop_Type::generate( $label ),
							'tag' => String_Prop_Type::generate( 'span' ),
						] )
						->build(),
				] )
				->build();

			$tab_content_elements[] = Atomic_Tab_Content::generate()
				->editor_settings( [
					'title' => $label,
					'initial_position' => $position,
				] )
				->children( [
					Atomic_Paragraph::generate()
						->settings( [ 'paragraph' => Escaped_Html_Prop_Type::generate( $body ) ] )
						->build(),
				] )
				->build();
		}

		$tabs_menu = Atomic_Tabs_Menu::generate()
			->children( $tab_elements )
			->build();

		$tabs_content_area = Atomic_Tabs_Content_Area::generate()
			->children( $tab_content_elements )
			->build();

		return [
			$tabs_menu,
			$tabs_content_area,
		];
	}

	public function get_script_depends() {
		$global_depends = parent::get_script_depends();

		if ( Plugin::$instance->preview->is_preview_mode() ) {
			return array_merge( $global_depends, [ 'elementor-tabs-handler', 'elementor-tabs-preview-handler' ] );
		}

		return array_merge( $global_depends, [ 'elementor-tabs-handler' ] );
	}

	public function register_frontend_handlers() {
		$assets_url = ELEMENTOR_ASSETS_URL;
		$min_suffix = ( Utils::is_script_debug() || Utils::is_elementor_tests() ) ? '' : '.min';

		wp_register_script(
			'elementor-tabs-handler',
			"{$assets_url}js/tabs-handler{$min_suffix}.js",
			[ Frontend_Assets_Loader::FRONTEND_HANDLERS_HANDLE, Frontend_Assets_Loader::ALPINEJS_HANDLE ],
			ELEMENTOR_VERSION,
			true
		);

		wp_register_script(
			'elementor-tabs-preview-handler',
			"{$assets_url}js/tabs-preview-handler{$min_suffix}.js",
			[ Frontend_Assets_Loader::FRONTEND_HANDLERS_HANDLE, Frontend_Assets_Loader::ALPINEJS_HANDLE ],
			ELEMENTOR_VERSION,
			true
		);
	}

	private function get_filtered_children_ids( $parent_element, $child_type ) {
		if ( ! $parent_element ) {
			return [];
		}

		return Collection::make( $parent_element->get_children() )
			->filter( fn( $element ) => $element->get_type() === $child_type )
			->map( fn( $element ) => $element->get_id() )
			->flip()
			->all();
	}

	protected function define_render_context(): array {
		$children = Collection::make( $this->get_children() );
		$menu = $children->filter( fn( $child ) => $child->get_type() === self::ELEMENT_TYPE_TABS_MENU )->first();
		$content_area = $children->filter( fn( $child ) => $child->get_type() === self::ELEMENT_TYPE_TABS_CONTENT_AREA )->first();
		$tabs = $this->get_filtered_children_ids( $menu, self::ELEMENT_TYPE_TAB );
		$panels = $this->get_filtered_children_ids( $content_area, self::ELEMENT_TYPE_TAB_CONTENT );
		$paired_count = min( count( $tabs ), count( $panels ) );
		$default_active_tab = (int) $this->get_atomic_setting( 'default-active-tab' );
		if ( $default_active_tab < 0 || $default_active_tab >= $paired_count ) {
			$default_active_tab = 0;
		}

		$tabs_id = Plugin::$instance->preview->is_preview_mode() ? $this->get_id() : wp_unique_id( 'llq_tabs_' );

		return [
			[
				'context' => [
					'default-active-tab' => $default_active_tab,
					'get-tab-index' => fn( $tab_id ) => $tabs[ $tab_id ] ?? null,
					'get-tab-content-index' => fn( $tab_content_id ) => $panels[ $tab_content_id ] ?? null,
					'tabs-id' => $tabs_id,
				],
			],
		];
	}

	protected function build_template_context(): array {
		$context = Render_Context::get( self::class );

		return array_merge( $this->build_base_template_context(), [
			'tabs_instance_id' => $context['tabs-id'] ?? $this->get_id(),
			'tabs_default_index' => $context['default-active-tab'] ?? 0,
		] );
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/atomic-tabs' => __DIR__ . '/atomic-tabs.html.twig',
		];
	}

	public static function get_tab_id( $tabs_id, $index ) {
		return "{$tabs_id}-tab-{$index}";
	}

	public static function get_tab_content_id( $tabs_id, $index ) {
		return "{$tabs_id}-tab-content-{$index}";
	}
}

