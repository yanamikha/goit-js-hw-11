import axios from 'axios';

let API_KEY = '48568808-b5581b6c1359d9abd76100469';
let BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  return await axios
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
      throw error;
    });
}
