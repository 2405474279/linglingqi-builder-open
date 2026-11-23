import { register } from '@elementor/frontend-handlers';
import { refreshTree } from '@elementor/alpinejs';
import { TAB_ELEMENT_TYPE, TAB_CONTENT_ELEMENT_TYPE, getIndex } from './utils';
import { setActiveTabIndex } from './editor-tabs-state';

register( {
	elementType: 'e-tabs',
	id: 'e-tabs-preview-handler',
	callback: ( { element, signal, listenToChildren } ) => {
		const instanceId = () => element.dataset.eTabsInstance || element.dataset.id;
		const activateDescendant = ( id ) => {
			if ( ! id ) return;
			const target = element.querySelector( `[data-id="${ CSS.escape( String( id ) ) }"]` );
			const item = target?.closest( `[data-element_type="${ TAB_ELEMENT_TYPE }"], [data-element_type="${ TAB_CONTENT_ELEMENT_TYPE }"]` );
			if ( ! item || item.closest( '[data-e-type="e-tabs"]' ) !== element ) return;
			const index = getIndex( item, item.dataset.element_type );
			if ( index >= 0 ) setActiveTabIndex( instanceId(), index );
		};

		window.parent.addEventListener( 'elementor/navigator/item/click', ( event ) => {
			activateDescendant( event.detail?.id );
		}, { signal } );

		window.parent.addEventListener( 'elementor/commands/run/after', ( event ) => {
			if ( event.detail?.command !== 'document/elements/select' ) return;
			const selected = window.parent.elementor?.selection?.getElements?.()?.[ 0 ];
			activateDescendant( selected?.id );
		}, { signal } );

		window.parent.addEventListener( 'linglingqi/tabs/activate', ( event ) => {
			const { rootId, index } = event.detail ?? {};
			if ( rootId === element.dataset.id && Number.isInteger( index ) && index >= 0 ) {
				setActiveTabIndex( instanceId(), index );
			}
		}, { signal } );

		// Re-initialize Alpine to sync with editor DOM manipulations that bypass Alpine's reactivity.
		listenToChildren( [ TAB_ELEMENT_TYPE, TAB_CONTENT_ELEMENT_TYPE ] )
			.render( ( event ) => {
				const childElement = event.detail.element;
				const nearestTabs = childElement.closest( '[data-e-type="e-tabs"]' );

				if ( nearestTabs !== element ) {
					return;
				}

				refreshTree( element );
			} );
	},
} );
