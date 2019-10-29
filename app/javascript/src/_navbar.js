const navMenuButton = document.querySelector('.nav-menu-toggler');

function toggleNavMenu() {
  const navMenu = document.querySelector('.nav-right-side');

  if (navMenu.style.dsiplay == '') {
    navMenu.setAttribute('style', 'display:flex;');
  } else {
    navMenu.setAttribute('style', 'display:none;');
  }
}

navMenuButton.addEventListener('click', toggleNavMenu);
