import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createMarkuo(arr) {
    return arr.map(({ preview, original, description }) =>
        
        `<li class="gallery__item">
  <a class="gallery__link" href="">
    <img 
    class="gallery__image"
    src="${preview}" 
    data-source="${original}"
    alt="${description}">
  </a>
</li>`

    ).join('')
}
gallery.insertAdjacentHTML('afterbegin', createMarkuo(galleryItems));


gallery.addEventListener('click', handlerClickGallery)

function handlerClickGallery(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('gallery__image')) {
        console.log('gallery__image', evt.target)
    }


    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" 
        width='1300' height='900' >`,
            {
            onShow:  () => { document.addEventListener('keydown', handlerEscapeModal) },
            onClose: () => { document.removeEventListener('keydown', handlerEscapeModal) }
        })
    instance.show()

        function handlerEscapeModal(evt) {
    if (evt.code === "Escape") {
        instance.close()
    }
}
}









