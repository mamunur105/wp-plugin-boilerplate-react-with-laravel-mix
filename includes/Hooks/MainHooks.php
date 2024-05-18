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
			AdminAction::trigger();
			PublicFilter::trigger();
		} else {
			PublicAction::trigger();
			PublicFilter::trigger();
		}
		Ajax::trigger();
	}
}
