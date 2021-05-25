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


document.querySelector('#btn-catalog-menu-1').onmouseenter = function(e) {
  document.querySelector('#catalog-menu').style.display = 'flex';
}
document.querySelector('#catalog-menu').onmouseleave = function(e) {
  document.querySelector('#catalog-menu').style.display = 'none';
}

document.querySelector('.cm-first-level').onmouseenter = function() {
  
}

/** categories menu **/
let arr_menu_items = Array.from(document.querySelectorAll('.cm-first-level'));
let arr_sublevels = Array.from(document.querySelectorAll('.submenu'));
for (let i = 0; i < arr_menu_items.length; i++) {
  arr_menu_items[i].addEventListener('mouseenter', () => {
    arr_sublevels.forEach(function(item, i, arr) {
      item.classList.remove("visible");
    });
    arr_menu_items.forEach(function(item, i, arr) {
      item.classList.remove("active");
    });
    arr_menu_items[i].classList.add("active");
    document.getElementById(arr_menu_items[i].dataset.menuId).classList.add("visible");
  });
}

// menu_items.forEach(function(item, i, arr) {
//   item.addEventListener('mouseenter', () => {
//     console(1);
//   });
//   // item.onmouseenter(function() {
//   //   console(1);
//   //   document.querySelectorAll('.cm-first-level').classList.remove("active");
//   //   item.classList.add("active");
//   // });
// });




// $(function() {
//   $(".toggle-menu").mouseenter(function() {
//       let menu_id = $(this).attr("data-menu-id");
//       $(menu_id).addClass("visible_menu");
//   });
//   $(".toggle-menu").mouseleave(function() {
//       let menu_id = $(this).attr("data-menu-id");
//       $(menu_id).removeClass("visible_menu");
//   });
// });