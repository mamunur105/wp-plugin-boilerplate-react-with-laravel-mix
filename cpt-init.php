<?php
/**
 * @wordpress-plugin
 * Plugin Name:       Cpt Boilerplate
 * Plugin URI:        https://wordpress.org/support/plugin/media-library-tools
 * Description:       Cpt int
 * Version:           0.0.1
 * Author:            Tiny Solutions
 * Author URI:        https://wptinysolutions.com/
 * Text Domain:       boilerplate
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
define( 'CPTINIT_VERSION', '0.0.1' );
define( 'CPTINIT_FILE', __FILE__ );
define( 'CPTINIT_BASENAME', plugin_basename( CPTINIT_FILE ) );
define( 'CPTINIT_URL', plugins_url('', CPTINIT_FILE ));
define( 'CPTINIT_ABSPATH', dirname(CPTINIT_FILE ) );

/**
 * App Init.
 */
require_once 'app/boilerplate.php';