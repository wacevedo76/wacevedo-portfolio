const navToggleButton = document.getElementById('navToggler');
const navMenu = document.getElementById('navMenu');
let isOpen = false;

function navToggle(isOpen) {

  if (isOpen == false) {
    isOpen = true;
  } else {
    isOpen = false;
  }

  console.log(isOpen);
}

navToggleButton.addEventListener('click', () => {
  navToggle();
});
