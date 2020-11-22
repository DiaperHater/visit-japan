"use strict";

(function () {
  var header = document.querySelector('.header');

  window.onscroll = function () {
    if (window.pageYOffset > 50) {
      header.classList.add('header-active');
    } else {
      header.classList.remove('header-active');
    }
  };
})(); // Burger Handler


(function () {
  var burger = document.querySelector('.header-burger');
  var menu = document.querySelector('.header_nav');
  burger.addEventListener('click', function () {
    menu.classList.add('header_nav_active');
  });
})(); // Nav Close Handler


(function () {
  var button = document.querySelector('.header-nav-close');
  var menu = document.querySelector('.header_nav');
  button.addEventListener('click', function () {
    menu.classList.remove('header_nav_active');
  });
})(); // Mobile Menu Handler


(function () {
  var menuLinks = document.querySelectorAll('.header_link');
  var menu = document.querySelector('.header_nav');
  menuLinks.forEach(function (each) {
    each.addEventListener('click', function () {
      if (menu.classList.contains('header_nav_active')) {
        menu.classList.remove('header_nav_active');
      }
    });
  });
})(); // Smooth Scroll


(function () {
  var smoothScroll = function smoothScroll(targetSelector, duration) {
    var headerHeight = document.querySelector('.header').clientHeight;
    var currentTarget = document.querySelector(targetSelector);
    var targetPosition = currentTarget.getBoundingClientRect().top - headerHeight;
    var startPosition = window.pageYOffset;
    var startTime = null;

    var easeTimeFunction = function easeTimeFunction(t, b, c, d) {
      t /= d / 2;

      if (t < 1) {
        return c / 2 * t * t + b;
      }

      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    var animation = function animation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }

      var timeElapsed = currentTime - startTime;
      var run = easeTimeFunction(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  var scrollTo = function scrollTo() {
    var links = document.querySelectorAll('.js-scroll');
    links.forEach(function (each) {
      each.addEventListener('click', function () {
        var currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 1000);
      });
    });
  };

  scrollTo();
})();