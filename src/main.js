import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let form = document.querySelector('form');
hideLoader();
form.addEventListener('submit', event => {
  event.preventDefault();
  let inputEl = form.querySelector('input');
  let query = inputEl.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term'
    });
    return;
  }
  inputEl.value = '';
  clearGallery();
  showLoader();
  getImagesByQuery(query)
    .then(images => {
      let options = {
        theme: 'dark',
        position: 'topRight',
        maxWidth: 432,
        backgroundColor: '#EF4040',
        icon: 'fa-solid fa-triangle-exclamation'
      };
      if (images.message) {
        options.message = images.message;
        iziToast.show(options);
        return;
      }
      if (images && !images.length) {
        options.message =
          'Sorry, there are no images matching your search query. Please try again!';
        iziToast.show(options);
        return;
      }
      createGallery(images);
    })
    .catch(ex => {
      iziToast.error({
        title: ex
      });
    })
    .finally(() => {
      hideLoader();
    });
});
