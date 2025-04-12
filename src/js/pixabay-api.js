import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let API_KEY = '48568808-b5581b6c1359d9abd76100469';
let BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
      }
    })
    .then(response => response.data.hits)
    .catch(error => {
      iziToast.error({ title: 'Error', message: 'Error on load images' });
      return;
    });
}
