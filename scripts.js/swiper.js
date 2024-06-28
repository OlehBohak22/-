const firstSwiper = new Swiper(".first-swiper", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

const secondSwiper = new Swiper(".second-swiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    prevEl: ".prev-swiper-btn",
    nextEl: ".next-swiper-btn",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: ".swiper-pagination",

    type: "progressbar",
  },
});

firstSwiper.controller.control = secondSwiper;
secondSwiper.controller.control = firstSwiper;
