const navToggleButton = document.getElementById('navToggler');

function toggleMenu(e, menu) {
  if (menu.style.display == '') {
    e.target.classList.add('nav_rotate_open');
    e.target.classList.remove('nav_rotate_close');
    menu.style.display = 'flex';
  } else {
    e.target.classList.add('nav_rotate_close');
    e.target.classList.remove('nav_rotate_open');
    menu.style.display = '';
  }
};

const navMenu = document.getElementById('navMenu');

navToggleButton.addEventListener('click', (e) => {
  toggleMenu(e, navMenu);
});
