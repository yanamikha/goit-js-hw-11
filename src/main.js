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

  getImagesByQuery(query).then(images => {
    showLoader();
    createGallery(images);
    hideLoader();
  });
});
