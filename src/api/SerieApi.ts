// import axios from 'axios';
// import { getAxiosConfig } from './api';
// import { Serie, SerieResponse, SerieEntry } from '../types/serie';

// // Busca todas as séries
// export const getSeries = async (): Promise<SerieResponse[]> => {
//   const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/series`, getAxiosConfig());
//   return res.data._embedded.series;
// };

// // Deleta uma série
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
