import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=50';
const API_KEY = import.meta.env.VITE_API_KEY;

interface CatApiResponse {
  id: string;
  url: string;
  breeds: unknown[];
  categories?: { id: number; name: string }[];
  width: number;
  height: number;
}

export const fetchCatImages = async (): Promise<CatApiResponse[]> => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'x-api-key': API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Ошибка при получении изображений котиков:', error);
    throw error;
  }
};
