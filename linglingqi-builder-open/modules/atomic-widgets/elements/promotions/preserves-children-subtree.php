<?php

namespace Elementor\Modules\AtomicWidgets\Elements\Promotions;

use Elementor\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

trait Preserves_Children_Subtree {

	// These editor-only placeholders have no schema for the original component.
	// Preserve its opaque payload through template import and document saves.
	protected function prepare_settings_and_children_for_save( array &$data ): void {
		$data['settings'] = $this->get_data( 'settings' ) ?? [];
		$data['elements'] = $this->get_data( 'elements' ) ?? [];
	}

	protected function _get_default_child_type( array $element_data ) {
		$document = Plugin::$instance->documents->get_current();

		if ( $document && $document->is_saving() ) {
			return new Preserved_Element();
		}

		return null;
	}
}
