import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, toggleLoader } from './js/render-functions.js';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('#search-input');

let currentPage = 1;
const perPage = 12;
let currentQuery = '';

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const query = input.value.trim();

    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query!',
            backgroundColor: '#EF4040',
            color: '#FAFAFB',
            position: "topRight"
        });
        return;
    }

    currentQuery = query;
    currentPage = 1;
    gallery.innerHTML = '';

    try {
        toggleLoader(true);
        const { hits, totalHits } = await fetchImages(query, currentPage, perPage);

        if (hits.length === 0) {
            iziToast.warning({
                title: 'No Results',
                message: 'Sorry, there are no images matching your search query. Please, try again!',
                backgroundColor: '#EF4040',
                color: '#FAFAFB',
                position: "topRight"
            });
        } else {
            renderGallery(hits, gallery);
            iziToast.success({
                title: 'Success',
                message: `Found ${totalHits} images!`,
                position: "topRight",
                color: '#FAFAFB'
            });
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: error.message,
            backgroundColor: '#EF4040',
            position: "topRight",
            color: '#FAFAFB'
        });
    } finally {
        toggleLoader(false);
        input.value = ''; // Очистити поле вводу
    }
});
