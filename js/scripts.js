// (function() {
//     $('.post-content').sidenotes();
// })();

//MAKE YOUTUBE VIDEOS RESPONSIVE


(function() {

	function init() {
    Snap.load("assets/images/laidlaw.github.2015.svg", function (f) {
      var logo = Snap("#svg-container");
      whiteAngle = logo.select("#white-bracket");
      blueAngle = logo.select("#blue-bracket");

      logo.hover(function() {
  			  whiteAngle.animate({transform: "r45,190,170"}, 500, mina.elastic);
          blueAngle.animate({transform: "r45,210,230"}, 500, mina.elastic);
        },
        function() {
  /*      icon.animate({fill: '#111111'}, 500);*/
  				whiteAngle.animate({transform: "r0,0,50"}, 500, mina.elastic);
          blueAngle.animate({transform: "r0,0,50"}, 500, mina.elastic);
  			}
      );
    });
  }
  init();
})();

jQuery(document).ready(function($){
  function responsiveIframe() {
    $('iframe').each(function(){
      var iw = $(this).width();
      var ih = $(this).height();
      var ip = $(this).parent().width();
      var ipw = ip/iw;
      var ipwh = Math.round(ih*ipw);
      $(this).css({
        'width': ip,
        'height' : ipwh,
      });
    });
  }

  responsiveIframe();

  //Call function again if window resized
  $(window).resize(function(){
    responsiveIframe();
  });

});


// Sidebar navigation
(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  // var sticky = new Waypoint.Sticky({
  //   element: $('.header')[0]
  // });

  // function closeMenu() {
  //   appbarElement.classList.remove('open');
  //   navdrawerContainer.classList.remove('open');
  // }
  //
  // function toggleMenu() {
  //   appbarElement.classList.toggle('open');
  //   navdrawerContainer.classList.toggle('open');
  // }
  //
  // main.addEventListener('click', closeMenu);
  // menuBtn.addEventListener('click', toggleMenu);
  // navdrawerContainer.addEventListener('click', function (event) {
  //   if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
  //     closeMenu();
  //   }
  // });
})();
