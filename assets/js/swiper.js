const swiperNews = new Swiper(".newsSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination-news",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-newss",
    prevEl: ".swiper-button-prev-newss",
  },
  breakpoints: {
    280: {
      slidesPerView: 1
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 14,
    }
  }
});

const swiperProject = new Swiper(".projectSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination-project",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-project",
    prevEl: ".swiper-button-prev-project",
  },
  breakpoints: {
    280: {
      slidesPerView: 1
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 14,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    920: {
      slidesPerView: 4,
      spaceBetween: 14,
    }
  }
});

const swiperPartners = new Swiper(".partnersSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination-partners",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-partners",
    prevEl: ".swiper-button-prev-partners",
  },
  breakpoints: {
    280: {
      slidesPerView: 1
    },
    410: {
      slidesPerView: 2,
      spaceBetween: 14,
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 14,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 14,
    },
    920: {
      slidesPerView: 5,
      spaceBetween: 14,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 14,
    }
  }
});