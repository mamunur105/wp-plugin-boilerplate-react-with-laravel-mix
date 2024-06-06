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
class Ajax {

	/**
	 * @var object
	 */
	protected $loader;

	/**
	 * Singleton
	 */
	use SingletonTrait;

	/**
	 * Class Constructor
	 */
	private function __construct( Loader $loader ) {
		$this->loader = $loader;
	}
}
