const navMenuButton = document.querySelector('.nav-menu-toggler');
const navMenu = document.querySelector('.nav-right-side');

// console.log(navMenuButton)
// console.log(navMenu);
function navMenuOpen() {
  navMenu.setAttribute('style', 'display: flex');
}

function navMenuclose() {
  navMenu.setAttribute('style', 'display: none');
}

navMenuButton.addEventListener('click', () => {
    (navMenu.style.display == 'none') ? navMenuOpen() : navMenuclose();
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
