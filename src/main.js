import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton, hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

const perPage = 15;

form.addEventListener('submit', async event => {
    event.preventDefault();
    currentQuery = event.target.elements.searchQuery.value.trim();
    currentPage = 1;
    clearGallery();
    hideLoadMoreButton();

    if (currentQuery === '') {
        iziToast.error({
            message: 'Please enter a search query!',
            position: 'topRight',
        });
        return;
    }

    try {
        showLoader();
        const data = await getImagesByQuery(currentQuery, currentPage);
        totalHits = data.totalHits;

        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
        } else {
            createGallery(data.hits);
            iziToast.success({
                message: `Hooray! We found ${totalHits} images.`,
                position: 'topRight',
            });
            
            if (totalHits > perPage) {
                showLoadMoreButton();
            }
        }
    } catch (error) {
        iziToast.error({
            message: 'Oops! Something went wrong. Please try again later.',
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }

    form.reset();
});

loadMoreBtn.addEventListener('click', async () => {
    currentPage += 1;
    showLoader();
    hideLoadMoreButton();

    try {
        const data = await getImagesByQuery(currentQuery, currentPage);
        createGallery(data.hits);

        const cardHeight = gallery.firstElementChild.getBoundingClientRect().height;
        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth',
        });

        const loadedImagesCount = currentPage * perPage;
        if (loadedImagesCount >= totalHits) {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        } else {
            showLoadMoreButton();
        }

    } catch (error) {
        iziToast.error({
            message: 'Oops! Something went wrong. Please try again later.',
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }
});





