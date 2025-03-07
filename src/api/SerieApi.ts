import { SerieResponse } from '../types/serie';
import api from './api';

// Busca todas as séries
export const getSeries = async (): Promise<SerieResponse[]> => {
  try {
    const response = await api.get('/api/v1/series', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    return response.data.content;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const getSeriesOrderedByYear = async (): Promise<SerieResponse[]> => {
  try {
    const response = await api.get('/api/v1/series', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    const series = response.data.content;
    series.sort((a: { year: number }, b: { year: number }) => b.year - a.year);
    return series;
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
