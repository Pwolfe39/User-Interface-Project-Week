
// // JS goes here
const toggleMenu = () => {
  menu.classList.toggle('menu--open');   
  
};

const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('#menu__close');
menuIcon.addEventListener('click', toggleMenu, false);

closeBtn.addEventListener('click', () => {
 toggleMenu();
}, false);






