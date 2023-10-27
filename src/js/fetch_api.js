import axios from 'axios';
import Notiflix from 'notiflix';
import refs from './refs';
import renderCards from './renderCards';
//<------------------------------------------------------------
const MY_KEY = '40227453-3557d8d2139416ae0b447ea7a';
const URL = 'https://pixabay.com/api/';

//<------------------------------------------------------------
async function fetchData(searchQuery) {
  try {
    const responce = await axios.get(
      `${URL}?key=${MY_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
    );

    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так в "fetchData"');
  }
}
//<------------------------------------------------------------
async function downloadMore(searchQuery) {
  const guard = document.querySelector('.js-guard');

  let page = 1;

  try {
    const responce = await axios.get(
      `${URL}?key=${MY_KEY}?q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
    );
    console.log('sdasdasd', responce);
    if (responce.data.hits.length > 0) {
      page++;
      refs.gallery.insertAdjacentHTML(
        'beforeend',
        renderCards(responce.data.hits)
      );
    } else {
      Notiflix.Notify.info('Немає більше зображень для завантаження.');
      observer.unobserve(guard);
    }
  } catch (error) {
    console.log('Catch-error:', error.data);
    Notiflix.Notify.failure('Щось пішло не так в "downloadMore"');
  }
}
//<------------------------------------------------------------

export { fetchData, downloadMore };
