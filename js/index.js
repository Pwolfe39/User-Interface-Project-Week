
// // JS goes here
// const toggleMenu = () => {
//     menu.classList.toggle('menu--open');   
    
//  };
 
//  const menu = document.querySelector('.menu');
//  const menuIcon = document.querySelector('.menu-icon');
//  const closeBtn = document.querySelector('#menu__close');
//  menuIcon.addEventListener('click', toggleMenu, false);
 
//  closeBtn.addEventListener('click', () => {
//    toggleMenu();
//  }, false);



class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.tabContent = document.querySelector(`.flex-construction[data-sec='${this.data}']`);
    this.tabItem = new TabItem(this.tabContent);
    this.element.addEventListener('click', () => {
      this.select();
    });
  }
  select() {
    const links = document.querySelectorAll('.tab');
    links.forEach((link) => {link.classList.remove('tabs-link-selected')});
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  
  }
  
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    const items = document.querySelectorAll('.flex-construction');
    items.forEach(item => item.classList.remove('tabs-item-selected'))
    this.element.classList.add('tabs-item-selected');
  }
}

const links = document.querySelectorAll('.tab');
links.forEach( element => new TabLink(element));







