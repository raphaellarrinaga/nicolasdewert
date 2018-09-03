/**
 * Hero Frontpage
*/
;(function(window) {

  'use strict';

  // Set hero image transition
  var hero = document.querySelector('.site-hero')
  var img = hero.getElementsByTagName('img')[0]

  function loaded() {
    hero.className += " js-imageloaded";
  }

  if (img.complete) {
    loaded()
  } else {
    img.addEventListener('load', loaded)
  }

  // Set hero section available height

  window.addEventListener('resize', function(){
    var heroWrapper = document.querySelector('.block--hero')
    var header = document.querySelector('.site-header')
    var headerHeight = header.clientHeight
    var windowHeight = window.innerHeight
    var imageHeight = img.clientHeight;
    var heroHeight = (windowHeight - headerHeight) > imageHeight ? imageHeight : (windowHeight - headerHeight);

    console.log(windowHeight);
    heroWrapper.setAttribute("style","min-height:"+ heroHeight +"px;height:"+ heroHeight +"px");

  }, true);

})(window);
