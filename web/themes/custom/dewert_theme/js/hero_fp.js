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
  var heroWrapper = document.querySelector('.block--hero')
  var header = document.querySelector('.site-header')
  var headerHeight = header.clientHeight
  var windowHeight = window.innerHeight
  var heroHeight = windowHeight - headerHeight
  heroWrapper.setAttribute("style","min-height:"+ heroHeight +"px;height:"+ heroHeight +"px");

})(window);
