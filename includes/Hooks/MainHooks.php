<?php
/**
 * Main ActionHooks class.
 *
 * @package TinySolutions\ancenter
 */

namespace TinySolutions\ANCENTER\Hooks;

use TinySolutions\ANCENTER\Common\Loader;
use TinySolutions\ANCENTER\Traits\SingletonTrait;

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
	private function __construct( Loader $loader ) {
		if ( is_admin() ) {
			AdminAction::loader_instance( $loader );
			AdminFilter::loader_instance( $loader );
		} else {
			PublicAction::loader_instance( $loader );
			PublicFilter::loader_instance( $loader );
		}
		Ajax::loader_instance( $loader );
	}
}
