const API_KEY = '47412942-a85f50e46f34315cc96f2bd1d';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query, page = 1, perPage = 12) {
const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

return fetch(url).then((response) => {
    if (!response.ok) {
    throw new Error('Failed to fetch images');
    }
    return response.json();
});
}

