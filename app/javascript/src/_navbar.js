const navToggleButton = document.getElementById('navToggler');

function toggleMenu(menu) {
  // if (menu.style.display == '') {
  //   menu.setAttribute('display', 'flex');
  // } else {
  //   menu.setAttribute('display', '');
  // }
  console.log(menu);
};


const navMenu = document.getElementById('navMenu');

navToggleButton.addEventListener('click', () => {
  toggleMenu(navMenu);
});
