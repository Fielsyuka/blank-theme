<?php
/**
 * Enqueue scripts and styles.
 */
function theme_scripts() {
	wp_enqueue_style( 'theme-style', get_stylesheet_uri(), array(), _S_VERSION );
	// wp_style_add_data( 'theme-style', 'rtl', 'replace' );

	wp_enqueue_script( 'lib-jquery', get_template_directory_uri() . '/lib/jquery-3.3.1.min.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'common-script', get_template_directory_uri() . '/assets/js/script.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'theme_scripts' );

