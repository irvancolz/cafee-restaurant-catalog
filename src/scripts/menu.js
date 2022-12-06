// files to toggle menu

const menuBtn = document.querySelector('.header__menu__btn');

menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const topnav = document.getElementById('topnav');
  const isOpen = topnav.getAttribute('data-state');
  if (isOpen === 'open') {
    topnav.setAttribute('data-state', 'close');
    menuBtn.setAttribute('data-state', 'close');
    topnav.setAttribute('aria-expanded', 'false');
    topnav.setAttribute('aria-hidden', 'true');
  } else {
    menuBtn.setAttribute('data-state', 'open');
    topnav.setAttribute('data-state', 'open');
    topnav.setAttribute('aria-expanded', 'true');
    topnav.setAttribute('aria-hidden', 'false');
  }
});
