const dayModeEle = document.getElementById('dayMode');
const nightModeEle = document.getElementById('nightMode');

function dayNightModeSwitcher(modeChoice) {
  const pageStyles = window.getComputedStyle(document.body);

  if (modeChoice == 'day') {
    document.documentElement.style.setProperty('--seen-primary', 'black');
    document.documentElement.style.setProperty('--seen-secondary', 'blue');
    document.documentElement.style.setProperty('--seen-hover', 'blue');
    document.documentElement.style.setProperty('--space-primary', 'white');
    document.documentElement.style.setProperty('--sspace-secondary', 'white');
  }

  if (modeChoice == 'night') {
    document.documentElement.style.setProperty('--seen-primary', 'white');
    document.documentElement.style.setProperty('--seen-secondary', 'blue');
    document.documentElement.style.setProperty('--seen-hover', 'blue');
    document.documentElement.style.setProperty('--space-primary', 'black');
    document.documentElement.style.setProperty('--sspace-secondary', 'black');
  }
}

dayModeEle.addEventListener('click', () => {
  dayNightModeSwitcher('day');
});

nightModeEle.addEventListener('click', () => {
  dayNightModeSwitcher('night');
});
