<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package THEME
 */

?>
<?php
  $parent_id = $post->post_parent; // 親ページのIDを取得
  $parent_slug = get_post($parent_id)->post_name; // 親ページのスラッグを取得
  $parent_title = get_post($parent_id)->post_title; // 親ページのタイトルを取得

  $page = get_post( get_the_ID() );
  $slug = $page->post_name;
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> class="p-entry">

	<header class="p-entry__header">
    <picture class="p-entry__mv">
      <source srcset="<?php echo get_template_directory_uri(); ?>/assets/images/<?php echo $slug ?>/mv_sp.jpg" media="(max-width: 767px)">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/<?php echo $slug ?>/mv.jpg" alt="<?php echo $slug ?>">
    </picture>
    <div class="p-entry__titlewrap">
    	<div class="l-container">
    		<h1 class="p-entry__title"><span><?php echo mb_strtoupper($slug) ?></span><span><?php the_title(); ?></span></h1>
    	</div>
    </div>    
	</header><!-- .entry-header -->

	<div class="l-container l-content">
		<div class="p-entry__content">
		<?php
		the_content();

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'theme' ),
				'after'  => '</div>',
			)
		);
		?>
		</div><!-- .entry-content -->
	</div><!-- .container -->

	<?php if ( get_edit_post_link() ) : ?>
		<footer class="p-entry__footer">

		</footer><!-- .entry-footer -->
	<?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->
