import axios from 'axios';

const API_KEY = '29495659-8f5845388f8e68d2893953910';
const BASE_URL = axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page, perPage) => {
  try {
    const response = await axios.get(`${BASE_URL}/`, {
      params: {
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: perPage,
        q: query,
        key: `${API_KEY}`,
        page:page,
      }
    })
    return response.data;

  } catch (error){
    console.log(error.message);
  };
};