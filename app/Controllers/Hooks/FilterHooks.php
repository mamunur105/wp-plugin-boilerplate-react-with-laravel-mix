<?php
/**
 * Main FilterHooks class.
 *
 * @package TinySolutions\WM
 */

namespace TinySolutions\boilerplate\Controllers\Hooks;

use TinySolutions\boilerplate\Helpers\Fns;

defined( 'ABSPATH' ) || exit();

/**
 * Main FilterHooks class.
 */
class FilterHooks {
	/**
	 * Init Hooks.
	 *
	 * @return void
	 */
	public static function init_hooks() {
        // Plugins Setting Page.
        add_filter( 'plugin_action_links_' . CPTINIT_BASENAME,  [ __CLASS__, 'plugins_setting_links' ] );
	}

    /**
     * @param array $links default plugin action link
     *
     * @return array [array] plugin action link
     */
    public static function plugins_setting_links( $links ) {
        $links['mediaedit_settings'] = '<a href="' . admin_url( 'upload.php?page=boilerplate-settings' ) . '">' . esc_html__( 'Start Editing', 'boilerplate' ) . '</a>';
        /*
         * TODO:: Next Version
         *
         */
        if( ! Fns::is_plugins_installed('media-library-tools-pro/media-library-tools-pro.php') ){
            // $links['boilerplate_pro'] = sprintf( '<a href="#" target="_blank" style="color: #39b54a; font-weight: bold;">' . esc_html__( 'Go Pro', 'wp-media' ) . '</a>' );
        }
        return $links;
    }


}

