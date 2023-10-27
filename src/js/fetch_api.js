import axios from 'axios';
import Notiflix from 'notiflix';

//<------------------------------------------------------------
export async function fetchData(searchQuery, page) {
  const MY_KEY = '40227453-3557d8d2139416ae0b447ea7a';
  const URL = 'https://pixabay.com/api/';
  const params = {
    key: MY_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: page,
  };
  if (!searchQuery) {
    return;
  }
  try {
    const responce = await axios.get(`${URL}`, { params });

    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так в "fetchData"');
  }
}
