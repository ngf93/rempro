let arr_sliders_1 = Array.from(document.querySelectorAll('.swiper-thumbs'));
arr_sliders_1.forEach(function(item, i, arr) {
  let swiper1 = new Swiper(item, {
    spaceBetween: 10,
    slidesPerView: 2,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        spaceBetween: 30
      }
    }
  });
  
  let swiper2 = new Swiper(item.parentElement.previousElementSibling, {
    spaceBetween: 30,
    thumbs: {
      swiper: swiper1
    },
  });
});

const swiper4 = new Swiper('.swiper-product-mini', {
  direction:'horizontal',
  slidesPerView: 3,
  spaceBetween: 10,
  height: null,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      direction:'horizontal',
      spaceBetween: 20,
      height: 120,
    },
    768: {
      direction:'vertical',
      height: 200,
      spaceBetween: 10,
    },
    992: {
      direction:'vertical',
      height: 240,
    },
    1200: {
      direction:'vertical',
      height: 320,
    },
    1400: {
      direction:'vertical',
      height: 380,
      spaceBetween: 20,
    }
  }
});
const swiper3 = new Swiper('.swiper-product', {
  direction:'horizontal',
  height: 380,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper4
  },
  breakpoints: {
    768: {
      direction:'vertical',
      height: 280,
    },
    992: {
      height: 380,
    },
    1200: {
      height: 440,
    },
    1400: {
      height: 500,
    }
  }
});

const myViewer = new ImgPreviewer('.img-preview-box');