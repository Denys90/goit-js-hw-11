import refs from './refs';
import like from '../images/like.svg';
import eye from '../images/eye.svg';
import download from '../images/download.svg';
import Comments from '../images/Comments.svg';

function renderCards(data) {
  data.forEach(hits => {
    const markupCard = document.createElement('div');
    markupCard.classList.add('card');
    markupCard.innerHTML = `
        <a href="${hits.largeImageURL}"><img class="card__img lazyload" src="${hits.webformatURL}" alt="${hits.tags}" loading="lazy" width="350" height="300" /></a>
        <div class="card__info">
          <p class="card__info-item"> <img class="card__info-svg" src="${like}" alt="like"></img> ${hits.likes}</p>
          <p class="card__info-item"><img class="card__info-svg" src="${eye}" alt="eye"> ${hits.views}</p>
          <p class="card__info-item"><img class="card__info-svg" src="${Comments}" alt="Comments"> ${hits.comments}</p>
          <p class="card__info-item"><img class="card__info-svg" src="${download}" alt="download"> ${hits.downloads}</p>
        </div>
      `;
    refs.gallery.appendChild(markupCard);
  });
}

export default renderCards;
//<-----------------------------------------------------
