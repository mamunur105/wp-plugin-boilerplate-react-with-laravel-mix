<?php
/**
 * @wordpress-plugin
 * Plugin Name:       Boiler Plate ( Only For Developer )
 * Plugin URI:        https://wordpress.org/plugins/admin-notice-centralization
 * Description:       Boiler
 * Version:           0.0.2
 * Author:            Tiny Solutions
 * Author URI:        https://www.wptinysolutions.com/
 * Text Domain:       ancenter
 * Domain Path:       /languages
 * License:                    GPLv3
 * License URI:                http://www.gnu.org/licenses/gpl-3.0.html
 * @package TinySolutions\mlt
 */

// Do not allow directly accessing this file.

use TinySolutions\boilerplate\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}

/**
 * Define media edit Constant.
 */
define( 'BOILERPLATE_VERSION', '0.0.1' );

define( 'BOILERPLATE_FILE', __FILE__ );

define( 'BOILERPLATE_BASENAME', plugin_basename( BOILERPLATE_FILE ) );

define( 'BOILERPLATE_URL', plugins_url( '', BOILERPLATE_FILE ) );

define( 'BOILERPLATE_ABSPATH', dirname( BOILERPLATE_FILE ) );

define( 'BOILERPLATE_PATH', plugin_dir_path( __FILE__ ) );

/**
 * App Init.
 */

require_once BOILERPLATE_PATH . 'vendor/autoload.php';

/**
 * @return Plugin
 */
function boilerplate_main() {
	return Plugin::instance();
}

add_action( 'plugins_loaded', 'boilerplate_main' );
