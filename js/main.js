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


let anchors = Array.from(document.querySelectorAll('.to-anchor'));
anchors.forEach(function(item, i, arr) {
  item.addEventListener('click', () => {
    document.querySelectorAll(item.href).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});