<?php
/**
 *
 */
namespace TinySolutions\boilerplate\Abs;

// Do not allow directly accessing this file.
use TinySolutions\boilerplate\Common\Loader;
use TinySolutions\boilerplate\Helpers\Fns;

if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}
/**
* Custom Post Type
*/
abstract class CustomPostType {
	
	
	/**
	 * @var object
	 */
	protected $loader;
	
	/**
	 * Class Constructor
	 */
	protected function __construct() {
		$this->loader = Loader::instance();
		$this->loader->add_action( 'init', $this, 'init_post_type' );
	}
	/**
	 * init RUn $this->register_post_type and  $this->and add_taxonomy
	 *
	 * @return initialize post type and texonomy
	 */
	abstract function init_post_type();
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
			'name'               => _x( $plural, 'post type general name', 'ancenter' ),
			'singular_name'      => _x( $name, 'post type singular name', 'ancenter' ),
			'add_new'            => _x( 'Add New', strtolower( $name ), 'ancenter' ),
			'add_new_item'       => __( 'Add New ' . $name, 'ancenter' ),
			'edit_item'          => __( 'Edit ' . $name, 'ancenter' ),
			'new_item'           => __( 'New ' . $name, 'ancenter' ),
			'all_items'          => __( 'All ' . $plural, 'ancenter' ),
			'view_item'          => __( 'View ' . $name, 'ancenter' ),
			'search_items'       => __( 'Search ' . $plural, 'ancenter' ),
			'not_found'          => __( 'No ' . strtolower( $plural ) . ' found', 'ancenter' ),
			'not_found_in_trash' => __( 'No ' . strtolower( $plural ) . ' found in Trash', 'ancenter' ),
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
