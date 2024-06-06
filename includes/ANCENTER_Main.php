<?php
/**
 * Main initialization class.
 *
 * @package TinySolutions\boilerplate
 */

namespace TinySolutions\boilerplate;

// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}

use TinySolutions\boilerplate\Common\Loader;
use TinySolutions\boilerplate\Traits\SingletonTrait;
use TinySolutions\boilerplate\Admin\Installation;
use TinySolutions\boilerplate\Admin\Dependencies;
use TinySolutions\boilerplate\Common\Assets;
use TinySolutions\boilerplate\Hooks\MainHooks;
use TinySolutions\boilerplate\Admin\AdminMenu;
use TinySolutions\boilerplate\Common\Api;
use TinySolutions\boilerplate\Admin\Review;

/**
 * Main initialization class.
 */
final class ANCENTER_Main {

	/**
	 * @var object
	 */
	protected $loader;

	/**
	 * Nonce id
	 *
	 * @var string
	 */
	public $nonceId = 'ancenter_wpnonce';

	/**
	 * Post Type.
	 *
	 * @var string
	 */
	public $current_theme;
	/**
	 * Post Type.
	 *
	 * @var string
	 */
	public $category = 'ancenter_category';
	/**
	 * Singleton
	 */
	use SingletonTrait;

	/**
	 * Class Constructor
	 */
	private function __construct() {
		$this->loader        = Loader::instance();
		$this->current_theme = wp_get_theme()->get( 'TextDomain' );
		$this->loader->add_action( 'init', $this, 'language' );
		$this->loader->add_action( 'plugins_loaded', $this, 'plugins_loaded' );
		// Register Plugin Active Hook.
		register_activation_hook( ANCENTER_FILE, [ Installation::class, 'activate' ] );
		// Register Plugin Deactivate Hook.
		register_deactivation_hook( ANCENTER_FILE, [ Installation::class, 'deactivation' ] );
		$this->run();
	}
	/**
	 * Load Text Domain
	 */
	public function plugins_loaded() {
	}

	/**
	 * Assets url generate with given assets file
	 *
	 * @param string $file File.
	 *
	 * @return string
	 */
	public function get_assets_uri( $file ) {
		$file = ltrim( $file, '/' );
		return trailingslashit( ANCENTER_URL . '/assets' ) . $file;
	}

	/**
	 * Get the template path.
	 *
	 * @return string
	 */
	public function get_template_path() {
		return apply_filters( 'ancenter_template_path', 'templates/' );
	}

	/**
	 * Get the plugin path.
	 *
	 * @return string
	 */
	public function plugin_path() {
		return untrailingslashit( plugin_dir_path( ANCENTER_FILE ) );
	}

	/**
	 * Load Text Domain
	 */
	public function language() {
		load_plugin_textdomain( 'ancenter', false, ANCENTER_ABSPATH . '/languages/' );
	}

	/**
	 * Init
	 *
	 * @return void
	 */
	public function init() {
		do_action( 'ancenter/before_init', $this->loader );
		Review::loader_instance( $this->loader );
		// Include File.
		Assets::loader_instance( $this->loader );
		AdminMenu::loader_instance( $this->loader );
		MainHooks::loader_instance( $this->loader );
		Api::loader_instance( $this->loader );
		do_action( 'ancenter/after_init', $this->loader );
	}

	/**
	 * Checks if Pro version installed
	 *
	 * @return boolean
	 */
	public function has_pro() {
		return function_exists( 'ancenterp' );
	}

	/**
	 * PRO Version URL.
	 *
	 * @return string
	 */
	public function pro_version_link() {
		return '#';
	}

	/**
	 * @return void
	 */
	private function run() {
		if ( Dependencies::loader_instance( $this->loader )->check() ) {
			$this->init();
			do_action( 'ancenter/after_run', $this->loader );
		}
		$this->loader->run();
	}

}
