<?php
/**
 * @wordpress-plugin
 * Plugin Name:       Boiler Plate ( Only For Developer )
 * Plugin URI:        https://wordpress.org/plugins/admin-notice-centralization
 * Description:       Boiler
 * Version:           0.0.1
 * Author:            Tiny Solutions
 * Author URI:        https://www.wptinysolutions.com/
 * Text Domain:       ancenter
 * Domain Path:       /languages
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * @package TinySolutions\mlt
 */

// Do not allow directly accessing this file.
use TinySolutions\ANCENTER\ANCENTER_Main;

if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}

/**
 * Define media edit Constant.
 */
define( 'ANCENTER_VERSION', '0.0.1' );

define( 'ANCENTER_FILE', __FILE__ );

define( 'ANCENTER_BASENAME', plugin_basename( ANCENTER_FILE ) );

define( 'ANCENTER_URL', plugins_url( '', ANCENTER_FILE ) );

define( 'ANCENTER_ABSPATH', dirname( ANCENTER_FILE ) );

define( 'ANCENTER_PATH', plugin_dir_path( __FILE__ ) );

/**
 * App Init.
 */

require_once ANCENTER_PATH . 'vendor/autoload.php';

/**
 * @return ANCENTER_Main
 */
function ancenter_main() {
	return TinySolutions\ANCENTER\ANCENTER_Main::instance();
}
ancenter_main();
