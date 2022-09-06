"use strict"

let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');

if (iconMenu) {
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
};


const swiper = new Swiper('.swiper', {
  // Default parameters
  spaceBetween: 40,
  // Responsive breakpoints
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  simulateTouch: true,
  grabCursor: false,
  centeredSlides: true,
  initialSlide: 1,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.8,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 48
    }
  },
});

let tab = function() {
  let tabNav = document.querySelectorAll('.tabs__link'),
  tabContent = document.querySelectorAll('.tab'),
  tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
    tabNav.forEach(item => {
      item.classList.remove('_active');
    });
    this.classList.add('_active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName)? item.classList.add('_active'): item.classList.remove('_active');
    })
  }
};

tab();

const swiperTab = new Swiper('.swiper1', {
  // Default parameters
  spaceBetween: 29,
  // Responsive breakpoints
  simulateTouch: true,
  grabCursor: true,
  centeredSlides: false,
  initialSlide: 0,
  slidesPerGroup: 1,
  watchOverflow: false,
  freeMode: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.8,
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide:  1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0,
      centeredSlides: false,
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 4,
      spaceBetween: 29,
      centeredSlides: false,
      initialSlide: 0,
    }
  },
});
