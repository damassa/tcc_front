import axios, { AxiosRequestConfig } from 'axios';
import { Serie, SerieResponse, SerieEntry } from '../types/serie';

const getAxiosConfig = (): AxiosRequestConfig => {
  const token = sessionStorage.getItem('jwt');
  return {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  };
};

// Busca todas as séries
export const getSeries = async (): Promise<SerieResponse[]> => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/series`, getAxiosConfig());
  return res.data._embedded.series;
};

// Deleta uma série
export const deleteSerie = async (link: string): Promise<SerieResponse> => {
  const res = await axios.delete(link, getAxiosConfig());
  return res.data;
};

// Adiciona uma série
export const addSerie = async (serie: Serie): Promise<SerieResponse> => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/v1/series`,
    serie,
    getAxiosConfig(),
  );
  return res.data;
};

// Altera uma série
export const editSerie = async (serieEntry: SerieEntry): Promise<SerieResponse> => {
  const res = await axios.put(serieEntry.url, serieEntry.serie, getAxiosConfig());
  return res.data;
};
