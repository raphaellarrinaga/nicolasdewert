/**
 * @file
 * Team members.
 *
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.team = {
    attach: function (context, settings) {

      // Set wrapper height depending on the text it's inside
      // @todo make it resizeable when screen size change
      // var team_height = $('.team').height();

      var member_body_height = 0;
      $('.team-member__body', context).once('team').each(function () {
        if($(this).height() > member_body_height){
          member_body_height = $(this).height() + 50;
        }

        console.log(member_body_height);
        $('.team').find('.right').css('min-height', member_body_height);
      });

      // Change text when clicking on the avatar
      $(context).find('.team-member__figure').bind("click", function() {
        var $member = $(this).data("member");
        $('.team-member__figure').removeClass('is-active');
        $(".team-member").removeClass('is-active');
        $(this).addClass("is-active");
        $('.team-member[data-member="'+ $member +'"]').addClass('is-active');
      });

    }
  };

})(jQuery, Drupal);
