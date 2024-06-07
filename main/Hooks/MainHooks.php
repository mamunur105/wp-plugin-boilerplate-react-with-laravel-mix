<?php
/**
 * Main ActionHooks class.
 *
 * @package TinySolutions\boilerplate
 */

namespace TinySolutions\boilerplate\Hooks;


use TinySolutions\boilerplate\Traits\SingletonTrait;

defined( 'ABSPATH' ) || exit();

/**
 * Main ActionHooks class.
 */
class MainHooks {
	/**
	 * Singleton
	 */
	use SingletonTrait;
	/**
	 * Init Hooks.
	 *
	 * @return void
	 */
	private function __construct() {
		if ( is_admin() ) {
			AdminAction::instance();
			AdminFilter::instance();
		} else {
			PublicAction::instance();
			PublicFilter::instance();
		}
		Ajax::instance();
	}
}
