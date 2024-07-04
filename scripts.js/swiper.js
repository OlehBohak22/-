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

    type: "bullets",
    clickable: true,
  },
});

firstSwiper.controller.control = secondSwiper;
secondSwiper.controller.control = firstSwiper;

// BESTSELLER swiper

new Swiper(".swiper", {
  initialSlide: 0,
  slidesPerView: 2,
  spaceBetween: 0,
  navigation: {
    prevEl: ".swiper-btn-left",
    nextEl: ".swiper-btn-right",
  },
  loop: true,

  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
  },
});

new Swiper(".bestseller-swiper", {
  initialSlide: 0,
  slidesPerView: 2,
  spaceBetween: 0,
  navigation: {
    prevEl: ".swiper-btn-left",
    nextEl: ".swiper-btn-right",
  },
  loop: true,

  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
  },
});

new Swiper(".yummy-swiper", {
  initialSlide: 0,
  slidesPerView: 2,
  spaceBetween: 0,
  navigation: {
    prevEl: ".yummy-swiper-prev",
    nextEl: ".yummy-swiper-next",
  },
  loop: true,

  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
  },
});

new Swiper(".info-swiper", {
  slidesPerView: 1.3,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
  },
});

new Swiper(".recomendation-swiper-container", {
  slidesPerView: 3,
  spaceBetween: 8,
  loop: true,
  navigation: {
    prevEl: ".rcmn-swiper-prev",
    nextEl: ".rcmn-swiper-next",
  },

  speed: 300,

  // autoplay: {
  //   delay: 5000,
  // },
});

new Swiper(".response-swiper-container", {
  slidesPerView: 1.5,
  spaceBetween: 12,
  breakpoints: {
    1024: {
      allowTouchMove: false,
    },
  },
});
