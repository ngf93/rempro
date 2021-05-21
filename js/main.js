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

/* current year */
let now = new Date();
let cur_year = now.getFullYear();
document.querySelector('#year').innerHTML = cur_year;