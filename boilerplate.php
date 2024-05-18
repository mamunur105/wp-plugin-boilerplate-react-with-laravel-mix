<?php
/**
 * @wordpress-plugin
 * Plugin Name:       BoilerPlate
 * Plugin URI:        #
 * Description:       Modules For Woocommerce
 * Version:           0.0.1
 * Author:            Boilerplate
 * Author URI:        https://boilerplate.com/
 * Text Domain:       mfwoo
 * Domain Path:       /languages
 *
 * @package TinySolutions\WM
 */

// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}

/**
 * Define media edit Constant.
 */
define( 'MFWOO_VERSION', '0.0.1' );

define( 'MFWOO_FILE', __FILE__ );

define( 'MFWOO_BASENAME', plugin_basename( MFWOO_FILE ) );

define( 'MFWOO_URL', plugins_url( '', MFWOO_FILE ) );

define( 'MFWOO_ABSPATH', dirname( MFWOO_FILE ) );

define( 'MFWOO_PATH', plugin_dir_path( __FILE__ ) );

/**
 * App Init.
 */

require_once MFWOO_PATH . 'vendor/autoload.php';

/**
 * @return \TinySolutions\boilerplate\MFWOO_Main
 */
function boilerplate_main() {
	return TinySolutions\boilerplate\MFWOO_Main::instance();
}
boilerplate_main();
