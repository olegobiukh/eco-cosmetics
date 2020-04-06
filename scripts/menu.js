'use strict';

const menuItems = document.getElementById('menu').children;
const menuToggler = document.getElementById('menuToggler');

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', () => {
    menuToggler.checked = false;
  });
}
