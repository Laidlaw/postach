(function() {
    $('.post-content').sidenotes();
})();

// Sidebar navigation
(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  function closeMenu() {
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }

  function toggleMenu() {
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();