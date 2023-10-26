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
function downloadMore(page = 1) {
  const guard = document.querySelector('.js-guard');
  try {
    const responce = axios.get(
      `${URL}?key=${MY_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
    );

    return responce;
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так в "downloadMore"');
  }
}
//<------------------------------------------------------------
export { fetchData, downloadMore };
