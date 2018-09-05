/**
 * @file
 * Materials.
 *
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.materials = {
    attach: function (context, settings) {

      /**
       * Materials menu active class
       */

      function onScroll(event){
        var scrollPos = $(document).scrollTop();

        $('.materials-nav').find('a').each(function () {
          var windowHeight = $(window).height();
          var windowShift = Math.round(windowHeight/3);
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          var refElementTop = refElement.position().top;
          var refElementHeight = refElement.height();

          if (refElementTop <= scrollPos + windowShift && refElementTop + refElementHeight > scrollPos) {
            $('.materials-nav a').removeClass("is-active");
            currLink.addClass("is-active");
          }
          else{
            currLink.removeClass("is-active");
          }
        });
      }

      $(document).on("scroll", onScroll);

    }
  };

})(jQuery, Drupal);
