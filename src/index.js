import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';
import SlimSelect from 'slim-select';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import '../node_modules/slim-select/dist/slimselect.css';

/**
 * GET DOM ELEMENTS
 * @type {Element}
 */
const selectRef = document.querySelector('.breed-select');
const catInfoRef = document.querySelector('.cat-info');
const loaderRef = document.querySelector('.loader');

/**
 * create new instance of SlimSelect
 * @type {SlimSelect}
 */
const select = new SlimSelect({
  select: selectRef,
});
select.disable();

/**
 * Get all breeds and populate select options
 */
const breeds = await fetchBreeds().catch(error);

const options = Object.keys(breeds).map(breed => {
  return { text: breed, value: breeds[breed] };
});
select.setData(options);
select.enable();
showLoader(false);

/**
 * Add event listener to select
 */
selectRef.addEventListener('change', async e => {
  showLoader();
  await fetchCatByBreed(e.target.value)
    .then(makeCatsMarkup)
    .catch(error)
    .finally(() => showLoader(false));
});

/**
 * Show error message
 * @param err
 */
function error(err) {
  iziToast.error({
    title: 'Error',
    titleColor: 'red',
    message: err.message,
    messageColor: 'red',
    position: 'topRight',
    close: false,
    closeOnClick: true,
    progressBarColor: 'red',
    icon: null,
    timeout: 1500,
  });
}

/**
 * Make markup for cat info
 * @param data
 */
function makeCatsMarkup(data) {
  const imgUrl = data.url;
  const breedInfo = data.breeds[0];
  catInfoRef.innerHTML = `
    <h2 class='cat-title'>${breedInfo.name}</h2>
    <div class="cat-info-box">
      <img src="${imgUrl}" alt="${breedInfo.name}" width='800'>
      <div class="cat-info-text">
        <p>${breedInfo.description}</p>
        <ul>
          <li><b>Origin:</b> ${breedInfo.origin}</li>
          <li><b>Life Span:</b> ${breedInfo.life_span}</li>
          <li><b>Temperament:</b> ${breedInfo.temperament}</li>
        </ul>
      </div>
    </div>
  `;
}

/**
 * Show/hide loader
 * @param bool
 */
function showLoader(bool = true) {
  loaderRef.style.display = bool ? 'block' : 'none';
}
