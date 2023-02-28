// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
let instanceBasicLightbox;

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
          />
        </a>
      </div>
      `;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();

  const isGallуryItem = event.target.classList.contains("gallery__image");

  if (!isGallуryItem) {
    return;
  }

  // openModal();

  var lightbox = new SimpleLightbox(".gallery a", {
    /* options */
    captionsData: 'alt', captionDelay: 250, 

  });
}

function openModal() {
 // let instance = basicLightbox
    // .create(
    //   `<img width="1400" height="900" src="${event.target.dataset.source}">`
    // )
    // .show();

    

  // instanceBasicLightbox = instance;
  // window.addEventListener("keydown", onEscKeyPress);

  
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    const divModal = document.querySelector(".basicLightbox");

    divModal.classList.remove("basicLightbox--visible");

    window.removeEventListener("keydown", onEscKeyPress);
  }
}
