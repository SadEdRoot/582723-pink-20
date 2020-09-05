const header = document.querySelector('.page-header');
const nav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.page-header__burger-btn');


if (nav) {
  nav.classList.remove('main-nav--no-js');
}

if (navToggle) {
  navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('main-nav--open');
    header.classList.toggle('page-header--close');
    navToggle.classList.toggle('page-header__burger-btn--active');
  })
}
