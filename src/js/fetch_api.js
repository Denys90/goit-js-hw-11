import axios from 'axios';
import Notiflix from 'notiflix';
import refs from './refs';
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
function downloadMore(page) {
  try {
    const fetch = axios.get(
      `${URL}?key=${MY_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
    );
    const responce = fetch().then(data => {
      refs.gallery.insertAdjacentHTML('beforeend', renderCards(date.hits));
      if (data.page < data.totalHits) {
        observer.observe(refs.guard);
      }
    });
    console.log(responce);
    return responce;
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так в "downloadMore"');
  }
}
//<------------------------------------------------------------
export { fetchData, downloadMore };
