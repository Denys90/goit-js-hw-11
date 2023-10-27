import refs from './refs';
import renderCards from './renderCards';
import { fetchData, downloadMore } from './fetch_api';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//<------------------------------------------------------------
refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('submit', onSearchQuery);

//<------------------------------------------------------------

async function onSubmit(e) {
  const searchQuery = e.target.elements.searchQuery.value;
  e.preventDefault();
  refs.gallery.innerHTML = '';

  try {
    const imagesData = await fetchData(searchQuery);

    if (imagesData.hits.length > 0) {
      refs.gallery.insertAdjacentHTML(
        'beforeend',
        renderCards(imagesData.hits)
      );

      Notiflix.Notify.info(`Hooray! We found ${imagesData.total} images.☝️`);

      const lightbox = new SimpleLightbox('.gallery a');
    } else {
      Notiflix.Notify.failure('Something went wrong! Try again!😮');
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
async function onSearchQuery(e) {
  const searchQuery = e.target.elements.searchQuery.value;
  console.log('searchQuery:', searchQuery);
  e.preventDefault();
  try {
    const response = await downloadMore(searchQuery);
    return response;
  } catch (error) {
    throw error;
  }
}
