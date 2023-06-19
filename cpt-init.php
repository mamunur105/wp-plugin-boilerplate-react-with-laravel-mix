<?php
/**
 * @wordpress-plugin
 * Plugin Name:       Cpt Boilerplate
 * Plugin URI:        https://wordpress.org/support/plugin/wp-plugin-boilerplate-react-with-mix
 * Description:       Cpt Boilerplate
 * Version:           0.0.1
 * Author:            Boilerplate
 * Author URI:        https://boilerplate.com/
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

define( 'CPTINIT_URL', plugins_url( '', CPTINIT_FILE ) );

define( 'CPTINIT_ABSPATH', dirname( CPTINIT_FILE ) );

define( 'CPTINIT_TEXT_DOMAIN', 'boilerplate' );

/**
 * App Init.
 */
require_once 'app/boilerplate.php';