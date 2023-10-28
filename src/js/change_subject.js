import refs from './refs';
refs.btnLight.classList.add('active');
function initialState(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
initialState('light-theme');

function toggleTheme() {
  if (localStorage.getItem('theme') == 'dark-theme') {
    initialState('light-theme');
  } else {
    initialState('dark-theme');
  }
}

refs.btnDark.addEventListener('click', onClickBtnDark);
refs.btnLight.addEventListener('click', onClickBtLight);

function onClickBtnDark(e) {
  e.preventDefault();
  refs.btnDark.classList.add('active');
  refs.btnLight.classList.remove('active');
  console.log('Нажали на кнопку "btnDark"!');
  toggleTheme();
}
function onClickBtLight(e) {
  e.preventDefault();
  refs.btnDark.classList.remove('active');
  refs.btnLight.classList.add('active');
  console.log('Нажали на кнопку "btnLight"!');
  toggleTheme();
}
