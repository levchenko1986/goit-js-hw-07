import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');

const makeItemCard = function ({preview, original, description} = {}) {
    return`<li><a class="gallery__item" href=${original}>
    <img class="gallery__image" src=${preview} alt=${description} />
</a></li>`;
};

const galleryItemElements = galleryItems.map(makeItemCard).join('');
console.log(galleryItemElements);


galleryListEl.insertAdjacentHTML('beforeend', galleryItemElements);



let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});


