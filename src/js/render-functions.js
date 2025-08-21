import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-container');
const loadMoreBtn = document.querySelector('.load-more');

let lightboxInstance;

export function createGallery(images) {
    const markup = images
        .map(
            ({
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) => `
                <li class="gallery-item">
                    <a class="gallery-link" href="${largeImageURL}">
                        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
                        <ul class="info-list">
                            <li class="info-item">
                                <p>Likes</p>
                                <p>${likes}</p>
                            </li>
                            <li class="info-item">
                                <p>Views</p>
                                <p>${views}</p>
                            </li>
                            <li class="info-item">
                                <p>Comments</p>
                                <p>${comments}</p>
                            </li>
                            <li class="info-item">
                                <p>Downloads</p>
                                <p>${downloads}</p>
                            </li>
                        </ul>
                    </a>
                </li>
            `
        )
        .join('');

    gallery.insertAdjacentHTML('beforeend', markup);

    if (!lightboxInstance) {
        lightboxInstance = new SimpleLightbox('.gallery a');
    } else {
        lightboxInstance.refresh();
    }
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('hidden');
}

export function hideLoader() {
    loader.classList.add('hidden');
}

export function showLoadMoreButton() {
    loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
    loadMoreBtn.classList.add('hidden');
}