import axios from 'axios';

const API_KEY = '51858509-ed91bcb0bf71d536e00ec9eab';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get('', { params });
    return response.data;
  } catch (error) {
    throw new Error(error.response.statusText);
  }
}



