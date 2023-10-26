import refs from './refs';
import renderCards from './create_markup';
import { fetchData, downloadMore } from './fetch_api';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//<------------------------------------------------------------
refs.form.addEventListener('submit', onSubmit);
//<------------------------------------------------------------

async function onSubmit(e) {
  e.preventDefault();
  const searchQuery = e.target.elements.searchQuery.value;
  refs.gallery.innerHTML = '';

  try {
    const imagesData = await fetchData(searchQuery);
    console.log(imagesData);
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

//<------------------------------------------------------------
function heandlerLoadMore(entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
}
