<?php
/**
 * The front page template file
 *
 * The front page template is always used as the site front page
 * if it exists, regardless of what settings on Admin > Settings > Reading.
 */

get_header(); ?>

<div class="content">
  <div class="inner-content grid-x grid-margin-x grid-padding-x">
    <main class="main small-12 medium-8 large-8 cell" role="main">
      <section>
        <h1>Hero</h1>
      </section>
      <section>
        <h1>Competences</h1>
      </section>
      <section>
        <h1>Expertise</h1>
      </section>
      <section>
        <h1>Ecoconstruction</h1>
      </section>
      <section>
        <h1>Réalisations</h1>
      </section>
    </main> <!-- end #main -->
    <?php get_sidebar(); ?>
  </div>
</div>

<?php get_footer(); ?>
