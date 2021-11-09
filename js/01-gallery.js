import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');

const makeItemCard = function ({preview, original, description} = {}) {
    return`
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
        src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
};

const galleryItemElements = galleryItems.map(makeItemCard).join('');
console.log(galleryItemElements);


galleryListEl.insertAdjacentHTML('beforeend', galleryItemElements);
galleryListEl.addEventListener('click', function(event) {
    event.preventDefault();
    let srcLink = event.target.getAttribute('data-source');
  const instance = basicLightbox.create(`<img src="${srcLink}", width="600" height="500">`);
  instance.show();
});

console.log(makeItemCard);

