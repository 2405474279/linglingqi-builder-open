<?php
namespace Elementor\Core\Upgrade;

use Elementor\Core\Base\DB_Upgrades_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Manager extends DB_Upgrades_Manager {

	/**
	 * @deprecated 3.17.0
	 */
	const INSTALLS_HISTORY_META = 'elementor_install_history';

	const VERSION_OPTION_NAME = 'elementor_version';

	public static function get_install_history_meta() {
		return 'elementor_install_history';
	}

	/**
	 * TODO: Remove in future releases
	 *
	 * @deprecated 3.1.0
	 */
	public function should_upgrade() {
		if ( ( 'elementor' === $this->get_plugin_name() ) && version_compare( get_option( $this->get_version_option_name() ), '2.4.2', '<' ) ) {
			delete_option( 'elementor_log' );
		}

		return parent::should_upgrade();
	}

	public function get_name() {
		return 'upgrade';
	}

	public function get_action() {
		return 'elementor_updater';
	}

	public function get_plugin_name() {
		return 'elementor';
	}

	public function get_plugin_label() {
		return esc_html__( '凌凌漆', 'elementor' );
	}

	public function get_updater_label() {
		return esc_html__( 'Elementor Data Updater', 'elementor' );
	}

	public function get_new_version() {
		return ELEMENTOR_VERSION;
	}

	/**
	 * Version used for the install-history record.
	 *
	 * Kept at the upstream compatibility baseline so that `new_site` gated
	 * features resolve the same way they do in the original codebase,
	 * independently of this build's own version number.
	 */
	public function get_history_version() {
		return defined( 'ELEMENTOR_COMPAT_BASELINE' ) ? ELEMENTOR_COMPAT_BASELINE : ELEMENTOR_VERSION;
	}

	public function get_version_option_name() {
		return self::VERSION_OPTION_NAME;
	}

	public function get_upgrades_class() {
		return 'Elementor\Core\Upgrade\Upgrades';
	}

	public static function get_installs_history() {
		return get_option( static::get_install_history_meta(), [] );
	}

	public static function install_compare( $version, $operator ) {
		$installs_history = self::get_installs_history();

		if ( empty( $installs_history ) ) {
			return version_compare(
				defined( 'ELEMENTOR_COMPAT_BASELINE' ) ? ELEMENTOR_COMPAT_BASELINE : ELEMENTOR_VERSION,
				$version ? $version : '0.0.0',
				$operator
			);
		}

		$first_install = key( $installs_history );

		/*
		 * This project's own releases are numbered 1.x, which sorts below every
		 * upstream feature threshold. Once such a version lands in the install
		 * history it would permanently mark the site as pre-3.16 and keep
		 * container, nested-elements and atomic-widgets disabled. Clamp any
		 * recorded version below the compatibility baseline up to it.
		 */
		if ( defined( 'ELEMENTOR_COMPAT_BASELINE' ) && version_compare( $first_install, ELEMENTOR_COMPAT_BASELINE, '<' ) ) {
			$first_install = ELEMENTOR_COMPAT_BASELINE;
		}

		return version_compare(
			$first_install,
			$version ? $version : '0.0.0', // when no version assigned
			$operator
		);
	}

	protected function update_db_version() {
		parent::update_db_version();

		$installs_history = self::get_installs_history();

		$time = time();

		// Record the compatibility baseline, not the marketing version, so
		// version-gated features behave exactly as they do upstream.
		$installs_history[ $this->get_history_version() ] = $time;

		$old_version = $this->get_current_version();

		// If there was an old version of Elementor, and there's no record for that install yet
		if ( $old_version && empty( $installs_history[ $old_version ] ) ) {
			$installs_history[ $old_version ] = $installs_history[ $this->get_history_version() ] - 1;
		}

		uksort( $installs_history, 'version_compare' );

		update_option( static::get_install_history_meta(), $installs_history );
	}

	/**
	 * Upgrade callbacks, clamped to the compatibility baseline.
	 *
	 * This project numbers its own releases 1.x. Left unclamped, a site that
	 * recorded a 1.x version as its current DB version would replay every
	 * historical routine above 1.x on the next upgrade - including the 2.6.0
	 * routine that sets the Font Awesome 4 migration flag, which then flips
	 * `icons_update_needed` on for sites that never used FA4 icons. Treat the
	 * effective current version as never below the baseline so only routines
	 * newer than the baseline can ever be queued.
	 */
	public function get_upgrade_callbacks() {
		if ( ! defined( 'ELEMENTOR_COMPAT_BASELINE' ) ) {
			return parent::get_upgrade_callbacks();
		}

		$this->get_current_version();

		if ( null === $this->current_version || ! version_compare( $this->current_version, ELEMENTOR_COMPAT_BASELINE, '<' ) ) {
			return parent::get_upgrade_callbacks();
		}

		$recorded              = $this->current_version;
		$this->current_version = ELEMENTOR_COMPAT_BASELINE;
		$callbacks             = parent::get_upgrade_callbacks();
		$this->current_version = $recorded;

		return $callbacks;
	}

	public static function is_new_installation(): bool {
		$installs_history = self::get_installs_history();

		$baseline = defined( 'ELEMENTOR_COMPAT_BASELINE' ) ? ELEMENTOR_COMPAT_BASELINE : ELEMENTOR_VERSION;

		return empty( $installs_history ) || static::install_compare( $baseline, '>=' );
	}

	public static function had_install_prior_to( string $version ): bool {
		if ( ! $version ) {
			return false;
		}

		$installs_history = self::get_installs_history();

		if ( empty( $installs_history ) ) {
			return false;
		}

		uksort( $installs_history, 'version_compare' );

		$first_version = array_key_first( $installs_history );

		if ( ! $first_version ) {
			return false;
		}

		return version_compare( $first_version, $version, '<' );
	}
}

