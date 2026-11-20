<?php
namespace Elementor;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<script type="text/template" id="tmpl-elementor-panel-elements">
	<# if ( $e.components.get( 'document/elements' ).utils.allowAddingWidgets()) { #>
	<div id="elementor-panel-elements-navigation" class="elementor-panel-navigation">
		<button class="elementor-component-tab elementor-panel-navigation-tab" data-tab="categories"><?php echo esc_html__( 'Elements', 'elementor' ); ?></button>
	</div>
	<# } #>
	<div id="elementor-panel-elements-search-area"></div>
	<div id="elementor-panel-elements-notice-area"></div>
	<div id="elementor-panel-elements-wrapper"></div>
	<div id="elementor-panel-elements-widget-creation-area"></div>
</script>

<script type="text/template" id="tmpl-elementor-panel-categories">
	<div id="elementor-panel-categories"></div>
	</script>

<script type="text/template" id="tmpl-elementor-panel-element-sticky-promotion"></script>

<script type="text/template" id="tmpl-elementor-panel-elements-category">
	<button class="elementor-panel-heading elementor-panel-category-title">
		<span class="elementor-panel-heading-toggle">
			<i class="eicon-caret-right" aria-hidden="true"></i>
		</span>
		<span class="elementor-panel-heading-title">{{{ title }}}</span>
		<?php do_action( 'elementor/editor/templates/panel/category' ); ?>
		<# if ( 'undefined' !== typeof promotion && promotion ) { #>
			<span class="elementor-panel-heading-promotion">
				<a href="{{{ promotion.url }}}" target="_blank">
					<i class="eicon-upgrade-crown-full"></i>{{{ promotion.text || <?php echo wp_json_encode( __( 'Upgrade', 'elementor' ) ); ?> }}}
				</a>
			</span>
		<# } #>
	</button>
	<div class="elementor-panel-category-items elementor-responsive-panel">
		<?php do_action( 'elementor/editor/templates/panel/category/content' ); ?>
	</div>
</script>

<script type="text/template" id="tmpl-elementor-panel-element-search">
	<label for="elementor-panel-elements-search-input" class="screen-reader-text"><?php echo esc_html__( 'Search Widget:', 'elementor' ); ?></label>
	<input type="search" id="elementor-panel-elements-search-input" placeholder="<?php esc_attr_e( 'Search Widget...', 'elementor' ); ?>" autocomplete="off"/>
	<i class="eicon-search-bold" aria-hidden="true"></i>
</script>

<script type="text/template" id="tmpl-elementor-element-library-element">
	<# const v4Categories = ['v4-elements', 'atomic-form']; #>
	<# const isV4 = obj.categories.some( category => v4Categories.includes( category ) ); #>
	<# const showNewBadge = isV4 && obj.isNew && ! obj.integration && false !== obj.editable; #>
	<button class="elementor-element" data-library-element-type="{{ elType === 'widget' ? widgetType : elType }}">
	<# if ( obj.integration ) { #>
			<i class="eicon-plug"></i>
		<# } else if ( false === obj.editable ) { #>
			<i class="eicon-lock"></i>
		<# } else if ( isV4 ) { #>
			<i class="eicon-atomic"></i>
		<# } #>
		<div class="icon">
			<i class="{{ icon }}" aria-hidden="true"></i>
		</div>
		<div class="title-wrapper">
			<div class="title">{{{ title }}}</div>
			<# if ( showNewBadge ) { #>
				<span class="e-widget-new-badge" aria-label="<?php echo esc_attr__( 'New', 'elementor' ); ?>">（<?php echo esc_html__( 'New', 'elementor' ); ?>）</span>
			<# } #>
		</div>
	</button>
</script>

<script type="text/template" id="tmpl-elementor-panel-elements-widget-creation-empty-state">
	<div class="elementor-panel-elements-widget-creation__title"><?php echo esc_html__( 'No widget found for', 'elementor' ); ?> "{{{ searchTerm }}}"</div>
	<div class="elementor-panel-elements-widget-creation__message"><?php echo esc_html__( 'You can register your own custom widget to extend the builder.', 'elementor' ); ?></div>
</script>

<script type="text/template" id="tmpl-elementor-panel-elements-widget-creation-search-footer">
	<div class="elementor-panel-elements-widget-creation__title"><?php echo esc_html__( "Couldn't find what you're looking for?", 'elementor' ); ?></div>
	<div class="elementor-panel-elements-widget-creation__message"><?php echo esc_html__( 'You can register your own custom widget to extend the builder.', 'elementor' ); ?></div>
</script>

<script type="text/template" id="tmpl-elementor-panel-global"></script>

