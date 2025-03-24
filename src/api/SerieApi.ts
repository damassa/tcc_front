import { SerieResponse } from '../types/serie';
import api from './api';

// Busca todas as séries
export const getAllSeries = async (): Promise<SerieResponse[]> => {
  try {
    const response = await api.get('/api/v1/series', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    const series = response.data.content;
    const randomOrderedSeries = series.sort(() => Math.random() - 0.5);
    return randomOrderedSeries;
  } catch (error) {
    console.error(error);
  }
  return [];
};

// Busca todas as séries ordenadas por ano (da mais recente até a mais antiga)
export const getSeriesOrderedByYear = async (): Promise<SerieResponse[]> => {
  try {
    const response = await api.get('/api/v1/series', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    const series = response.data.content;
    const orderedSeries = series.sort(
      (a: { year: number }, b: { year: number }) => b.year - a.year,
    );
    return orderedSeries;
  } catch (error) {
    console.error(error);
  }
  return [];
};

// Busca uma série pelo identificador (específico para detalhe da série)
export const getSerieById = async (id: number): Promise<SerieResponse> => {
  const response = await api
    .get<SerieResponse>(`/api/v1/series/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });

  return response.data;
};

export const toggleFavoriteSerie = async () => {};

export const getFavoriteSeries = async (): Promise<SerieResponse[]> => {
  try {
    console.log('passou aqui');
    const response = await api.get('/api/v1/users/me/favorites', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    console.log(response);
    const favorites = response.data.content;
    console.log(favorites);
    return favorites;
  } catch (error) {
    console.error(error);
  }
  return [];
};

// Deleta uma série
// export const deleteSerie = async (link: string): Promise<SerieResponse> => {
//   const res = await axios.delete(link, getAxiosConfig());
//   return res.data;
// };

// // Adiciona uma série
// export const addSerie = async (serie: SerieResponse): Promise<SerieResponse> => {
//   const res = await axios.post(
//     `${import.meta.env.VITE_API_URL}/api/v1/series`,
//     serie,
//     getAxiosConfig(),
//   );
//   return res.data;
// };

// // Altera uma série
// export const editSerie = async (serieEntry: SerieEntry): Promise<SerieResponse> => {
//   const res = await axios.put(serieEntry.url, serieEntry.serie, getAxiosConfig());
//   return res.data;
// };
