<?php
/**
 *
 */
namespace TinySolutions\ANCENTER\Abs;

// Do not allow directly accessing this file.
use TinySolutions\ANCENTER\Helpers\Fns;

if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}
/**
* Custom Post Type
*/
abstract class CustomPostType {

	/**
	 * init RUn $this->register_post_type and  $this->and add_taxonomy
	 *
	 * @return initialize post type and texonomy
	 */
	abstract function initposttype();
	/**
	 * init $post_type_name
	 *
	 * @return set $post_type_name
	 */
	abstract function set_post_type_name();
	/**
	 * set_post_type_args
	 *
	 * @param [type] array
	 * @return set post_type_args
	 */
	protected function set_post_type_args() {}
	/**
	 * post_type_labels
	 *
	 * @param [type] array
	 * @return set $post_type_labels;
	 */
	protected function set_post_type_labels() {}
	
	/* Method which registers the post type */
	public function register_post_type() {

		$post_type_name   = Fns::uglify( $this->set_post_type_name() );
		$post_type_args   = $this->set_post_type_args() ?? [];
		$post_type_labels = $this->set_post_type_labels() ?? [];

		// Capitilize the words and make it plural.
		$name   = Fns::beautify( $post_type_name );
		$plural = Fns::pluralize( $name );
		// We set the default labels based on the post type name and plural. We overwrite them with the given labels.
		$defaults_labels = [
			'name'               => _x( $plural, 'post type general name' ),
			'singular_name'      => _x( $name, 'post type singular name' ),
			'add_new'            => _x( 'Add New', strtolower( $name ) ),
			'add_new_item'       => __( 'Add New ' . $name ),
			'edit_item'          => __( 'Edit ' . $name ),
			'new_item'           => __( 'New ' . $name ),
			'all_items'          => __( 'All ' . $plural ),
			'view_item'          => __( 'View ' . $name ),
			'search_items'       => __( 'Search ' . $plural ),
			'not_found'          => __( 'No ' . strtolower( $plural ) . ' found' ),
			'not_found_in_trash' => __( 'No ' . strtolower( $plural ) . ' found in Trash' ),
			'parent_item_colon'  => '',
			'menu_name'          => $plural,
		];

		$labels = wp_parse_args( $post_type_labels, $defaults_labels );
		// Same principle as the labels. We set some defaults and overwrite them with the given arguments.
		$defaults_args  = [
			'public'            => true,
			'show_ui'           => true,
			'supports'          => [ 'title', 'editor' ],
			'show_in_nav_menus' => true,
			'has_archive'       => true,
		];
		$args           = wp_parse_args( $post_type_args, $defaults_args );
		$args['labels'] = $labels;
		// Register the post type.
		register_post_type( $post_type_name, $args );
	}
}
