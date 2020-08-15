var nav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__burger-btn');

if (nav) {
  nav.classList.remove('main-nav--no-js');
}

if (navToggle) {
  navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('main-nav--open');
    navToggle.classList.toggle('page-header__toggle-btn--active');
  })
}
