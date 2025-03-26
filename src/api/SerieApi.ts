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

// Adiciona uma série na lista de favoritos (PELO ID)
export const toggleSerieToFavorites = async (id: number) => {};

// Busca todas as séries favoritas do usuário logado
export const getFavoriteSeries = async (): Promise<SerieResponse[]> => {
  const token = localStorage.getItem('jwt');

  if (!token) {
    console.error('Token não encontrado.');
    throw new Error('Não autorizado: Token nao encontrado.');
  }

  try {
    const response = await api.get('/api/v1/users/me/favorites', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 204) {
      return [];
    }
    const favorites = response.data;
    return favorites;
  } catch (error: unknown) {
    console.error('Erro ao buscar séries favoritas:', error.message);

    if (error.response?.status === 401) {
      throw new Error('Não autorizado: Token expirado ou inválido.');
    }

    throw new Error('Falha ao buscar séries favoritas.');
  }
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
