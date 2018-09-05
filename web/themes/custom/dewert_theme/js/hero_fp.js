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

  function setHeroHeight() {
    var heroWrapper = document.querySelector('.block--hero')
    var header = document.querySelector('.site-header')
    var headerHeight = header.clientHeight
    var windowHeight = window.innerHeight
    var imageHeight = img.clientHeight;
    var heroHeight = (windowHeight - headerHeight) > imageHeight ? imageHeight : (windowHeight - headerHeight);

    if (window.matchMedia("(min-width: 769px)").matches) {
      heroWrapper.setAttribute("style","min-height:"+ heroHeight +"px;height:"+ heroHeight +"px");
    } else {
      heroWrapper.style = null;
    }

  }

  window.addEventListener('resize', function(){
    setHeroHeight();
  }, true);

  setHeroHeight();

})(window);
