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
      spaceBetween: 20,
      height: 120,
    },
    768: {
      direction:'vertical',
      height: 200,
      spaceBetween: 10,
    },
    992: {
      height: 240,
    },
    1200: {
      height: 320,
    },
    1400: {
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


function connect(id, val){
  document.getElementById(id).value = val;
}
function reverse(id, val){
  document.getElementById(id).value = val;
  document.getElementById(id).parentNode.style.setProperty('--value',val);
  document.getElementById(id).parentNode.style.setProperty('--text-value', JSON.stringify(val));
}

function toggle(el){
  el.style.display = (el.style.display == 'block') ? 'none' : 'block'
}