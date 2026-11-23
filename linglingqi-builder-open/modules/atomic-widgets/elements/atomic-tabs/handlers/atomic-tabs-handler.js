import { register } from '@elementor/frontend-handlers';
import { Alpine } from '@elementor/alpinejs';
import { TAB_ELEMENT_TYPE, TAB_CONTENT_ELEMENT_TYPE, getTabId, getTabContentId, getIndex, getChildren, getDirectTabCount } from './utils';
import { getActiveTabId, setActiveTabIndex, validateActiveTab } from './editor-tabs-state';

const SELECTED_CLASS = 'e--selected';

register( {
	elementType: 'e-tabs',
	id: 'e-tabs-handler',
	callback: ( { element, settings } ) => {
		const tabsId = element.dataset.eTabsInstance || element.dataset.id;
		const defaultActiveTab = settings[ 'default-active-tab' ] || getTabId( tabsId, 0 );

		Alpine.data( `eTabs${ tabsId }`, () => ( {
			init() {
				validateActiveTab( tabsId, getDirectTabCount( this.$el ) );
			},
			get activeTab() {
				return getActiveTabId( tabsId, defaultActiveTab );
			},
			activateTab( tab ) {
				const index = getIndex( tab, TAB_ELEMENT_TYPE );
				if ( index >= 0 ) {
					setActiveTabIndex( tabsId, index );
				}
			},

			navigateTabs( event ) {
				const { key, currentTarget: tab } = event;
				if ( ! [ 'ArrowLeft', 'ArrowRight', 'Home', 'End' ].includes( key ) ) {
					return;
				}

				const tabs = getChildren( tab, TAB_ELEMENT_TYPE );
				const currentIndex = tabs.indexOf( tab );
				if ( currentIndex < 0 ) {
					return;
				}

				let nextIndex;
				if ( 'Home' === key ) {
					nextIndex = 0;
				} else if ( 'End' === key ) {
					nextIndex = tabs.length - 1;
				} else {
					const isRtl = 'rtl' === window.getComputedStyle( tab ).direction;
					const step = ( key === 'ArrowRight' ) !== isRtl ? 1 : -1;
					nextIndex = ( currentIndex + step + tabs.length ) % tabs.length;
				}

				event.preventDefault();
				setActiveTabIndex( tabsId, nextIndex );
				tabs[ nextIndex ].focus();
			},
			tab: {
				':id'() {
					const index = getIndex( this.$el, TAB_ELEMENT_TYPE );

					return getTabId( tabsId, index );
				},
				'@click'() {
					this.activateTab( this.$el );
				},
				'@focus'() {
					this.activateTab( this.$el );
				},
				'@keydown'( event ) {
					this.navigateTabs( event );
				},
				':class'() {
					const id = this.$el.id;

					return { [ SELECTED_CLASS ]: this.activeTab === id };
				},
				':aria-selected'() {
					const id = this.$el.id;

					return this.activeTab === id ? 'true' : 'false';
				},
				':tabindex'() {
					const id = this.$el.id;

					return this.activeTab === id ? '0' : '-1';
				},
				':aria-controls'() {
					const index = getIndex( this.$el, TAB_ELEMENT_TYPE );

					return getTabContentId( tabsId, index );
				},
			},

			tabContent: {
				':aria-labelledby'() {
					const index = getIndex( this.$el, TAB_CONTENT_ELEMENT_TYPE );

					return getTabId( tabsId, index );
				},
				':hidden'() {
					return this.activeTab !== getTabId( tabsId, getIndex( this.$el, TAB_CONTENT_ELEMENT_TYPE ) );
				},
				':class'() {
					return { [ SELECTED_CLASS ]: this.activeTab === getTabId( tabsId, getIndex( this.$el, TAB_CONTENT_ELEMENT_TYPE ) ) };
				},
				':id'() {
					const index = getIndex( this.$el, TAB_CONTENT_ELEMENT_TYPE );

					return getTabContentId( tabsId, index );
				},
			},
		} ) );
	},
} );

