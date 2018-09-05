(function ($) {

  'use strict';

  Drupal.behaviors.gallery = {
    attach: function (context) {

      $(context).find('#worksGallery').once('gallery').each(function() {
        $(this).justifiedGallery({
          rowHeight : 479,
          maxRowHeight : 730,
          rel : 'works-gallery',
          lastRow : 'nojustify',
          captions: false,
          margins : 8
        });
      });

    }
  };

})(jQuery);
