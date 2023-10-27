import axios from 'axios';
import Notiflix from 'notiflix';

//<------------------------------------------------------------
const MY_KEY = '40227453-3557d8d2139416ae0b447ea7a';
const URL = 'https://pixabay.com/api/';

//<------------------------------------------------------------
export async function fetchData(searchQuery, page) {
  try {
    const responce = await axios.get(
      `${URL}?key=${MY_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
    );

    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так в "fetchData"');
  }
}
//<------------------------------------------------------------
