/**
 * Hero Frontpage
*/
;(function(window) {

  'use strict';

  var imgWrapper = document.querySelector('.site-hero')
  var img = imgWrapper.getElementsByTagName('img')[0]

  function loaded() {
    imgWrapper.className += " js-imageloaded";
  }

  if (img.complete) {
    loaded()
  } else {
    img.addEventListener('load', loaded)
  }

})(window);
