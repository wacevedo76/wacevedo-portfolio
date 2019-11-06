const dayModeEle = document.getElementById('dayMode');
const nightModeEle = document.getElementById('nightMode');

function dayNightModeSwitcher(modeChoice) {
  const pageStyles = window.getComputedStyle(document.body);
  const style = document.documentElement.style;
  // style.setProperty('--seen-primary', 'black');

  if (modeChoice == 'day') {
    style.setProperty('--seen-primary', 'black');
    style.setProperty('--seen-secondary', 'blue');
    style.setProperty('--h2-color','black');
    style.setProperty('--bold-color', 'black');
    style.setProperty('--seen-hover', 'blue');
    style.setProperty('--space-primary', 'white');
    style.setProperty('--space-secondary', 'white');
  }

  if (modeChoice == 'night') {
    style.setProperty('--seen-primary', '#009688');
    style.setProperty('--seen-secondary', 'blue');
    style.setProperty('--h2-color','#d77236');
    style.setProperty('--bold-color', 'white');
    style.setProperty('--seen-hover', 'blue');
    style.setProperty('--space-primary', '#1d1f21');
    style.setProperty('--space-secondary', '#1d1f21');
  }
}

dayModeEle.addEventListener('click', () => {
  dayNightModeSwitcher('day');
});

nightModeEle.addEventListener('click', () => {
  dayNightModeSwitcher('night');
});
