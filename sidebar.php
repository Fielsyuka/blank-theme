<?php
/**
 * The sidebar containing the main widget area
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<aside id="aside" class="l-aside widget-area">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside><!-- .l-aside -->
