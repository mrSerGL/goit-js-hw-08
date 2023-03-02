// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            loading="lazy"
          />
        </a>
      </div>
      `;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
// galleryContainer.addEventListener('click', onGalleryContainerClick);

// function onGalleryContainerClick(event) {
//   event.preventDefault();

//   const isGallуryItem = event.target.classList.contains('gallery__image');

//   if (!isGallуryItem) {
//     return;
//   }

//   openModal();
// }

// function openModal() {
//   var lightbox = new SimpleLightbox('.gallery a', {
//     /* options */
//     captionsData: 'alt',
//     captionDelay: 250,
//   });
// }

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
