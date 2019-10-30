const navMenuButton = document.getElementByClass('.nav-menu-toggler');
const navMenu = document.getElementByClass('.nav-right-side');
navMenu.setAttribute('style', 'visibility: hidden;')

function navMenuOpen() {
  navMenuButton.classList.add('nav_rotate');
  navMenu.classList.add('nav_show')
}

function navMenuClose() {
  navMenuButton.classList.remove('nav_rotate');
  navMenu.classList.remove('nav_show')
}

navMenuButton.addEventListener('click', () => {
    // (navMenu.classList.contains('nav_show')) ? navMenuOpen() : navMenuClose();
    navMenuButton.classList.add('nav_show')
    (navMenuButton.classList.contains('nav_show')) ? navMenuOpen() : navMenuClose();
});









// function navMenuOpen() {
//   console.log('menu is open');
// }
//
// function navMenuClose() {
//   console.log('menu is closed');
// }
//
// navMenuButton.addEventListener('onclick', () => {
//   (navMenu.style.display == "none") ? navMenuOpen() : navMenuClose();
// });
//




// function toggleNavMenu() {
//
//   if (navMenu.style.dsiplay == '') {
//     navMenu.setAttribute('style', 'display:flex;');
//   } else {
//     navMenu.setAttribute('style', 'display:none;');
//   }
// }
//
// navMenuButton.addEventListener('click', toggleNavMenu);
