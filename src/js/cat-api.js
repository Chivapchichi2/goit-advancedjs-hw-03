import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_jp4MAa6Q05x6bPwskekDsJZfzqCtg2YV4GCjsqnuUaFRE2dglgAL3yLtQhvHdwUY';

export async function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds').then(res => res.data);
}

export async function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => res.data[0]);
}
