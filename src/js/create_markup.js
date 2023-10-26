function renderCards(arr) {
  return arr
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="card"><a href="${largeImageURL}"><img class="card__img lazyload" src="${webformatURL}" alt="${tags}" loading="lazy" width="350" height="300" /></a>
       <div class="card__info">
          <p class="card__info-item">Likes: ${likes}</p>
         <p class="card__info-item">Views: ${views}</p>
         <p class="card__info-item">Comments: ${comments}</p>
         <p class="card__info-item">Downloads: ${downloads}</p>
        </div></li>`
    )
    .join('');
}

//<-----------------------------------------------------
export default renderCards;
