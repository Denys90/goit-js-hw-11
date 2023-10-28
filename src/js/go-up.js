import refs from './refs';

console.log(refs.goTop);
refs.goTop.addEventListener('click', onGoTop);
window.addEventListener('scroll', onScroll);

function onScroll() {
  const offset = window.pageYOffset;
  const clientHeight = document.documentElement.clientHeight;
  if (offset > clientHeight) {
    refs.goTop.classList.add('go-top--show');
  } else {
    refs.goTop.classList.remove('go-top--show');
  }
}

function onGoTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -60);
    setTimeout(onGoTop, 0);
  }
}
