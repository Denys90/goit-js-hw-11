import refs from './refs';
import renderCards from './renderCards';
import { fetchData, downloadMore } from './fetch_api';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//<------------------------------------------------------------
refs.form.addEventListener('submit', onSubmit);
//<------------------------------------------------------------
let page = 1;
let searchQuery = null;
//<------------------------------------------------------------

async function onSubmit(e) {
  e.preventDefault();
  let page = 1;
  searchQuery = e.target.elements.searchQuery.value;
  refs.gallery.innerHTML = '';

  try {
    const imagesData = await fetchData(searchQuery, page);

    if (imagesData.hits.length > 0) {
      refs.gallery.insertAdjacentHTML(
        'beforeend',
        renderCards(imagesData.hits)
      );

      Notiflix.Notify.info(`Hooray! We found ${imagesData.total} images.☝️`);

      const lightbox = new SimpleLightbox('.gallery a');
    } else {
      return;
    }
  } catch (error) {
    throw error;
  }
  e.target.elements.searchQuery.value = '';
}

//<------------------------------------------------------------
const guard = document.querySelector('.js-guard');

const options = {
  root: null,
  rootMargin: '300px',
};
const observer = new IntersectionObserver(heandlerLoadMore, options);

console.log(observer);
//<------------------------------------------------------------

function heandlerLoadMore(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      onSearchQuery();
    }
  });
}
observer.observe(guard);
//<------------------------------------------------------------
async function onSearchQuery() {
  page++;

  try {
    const response = await fetchData(searchQuery, page);
    console.log('here', response);
    if (response.hits.length > 0) {
      refs.gallery.insertAdjacentHTML('beforeend', renderCards(response.hits));
      const lightbox = new SimpleLightbox('.gallery a');
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
}
