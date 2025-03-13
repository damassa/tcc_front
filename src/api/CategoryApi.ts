// import axios from 'axios';
// import { getAxiosConfig } from './AxiosConfig';
// import { Category, CategoryResponse, CategoryEntry } from '../types/category';

// // Busca todas as séries
// export const getCategory = async (): Promise<CategoryResponse[]> => {
//   const res = await axios.get(
//     `${import.meta.env.VITE_API_URL}/api/v1/categories`,
//     getAxiosConfig(),
//   );
//   return res.data._embedded.categories;
// };

// // Deleta uma série
// export const deleteCategory = async (link: string): Promise<CategoryResponse> => {
//   const res = await axios.delete(link, getAxiosConfig());
//   return res.data;
// };

// // Adiciona uma série
// export const addCategory = async (category: Category): Promise<CategoryResponse> => {
//   const res = await axios.post(
//     `${import.meta.env.VITE_API_URL}/api/v1/categories`,
//     category,
//     getAxiosConfig(),
//   );
//   return res.data;
// };

// // Altera uma série
// export const editSerie = async (categoryEntry: CategoryEntry): Promise<CategoryResponse> => {
//   const res = await axios.put(categoryEntry.url, categoryEntry.category, getAxiosConfig());
//   return res.data;
// };

import api from './api';
import { CategoryResponse } from '../types/category';

export const getCategories = async (): Promise<CategoryResponse[]> => {
  try {
    const response = await api.get('/api/v1/categories', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return [];
};
