import apiClient from './apiClient';

export const movieService = {
  getMovieById: async (id: number) => {
    const response = await apiClient.get(`/movies/${id}`);
    return response.data;
  },

  getNowShowingMovies: async () => {
    const response = await apiClient.get('/movies/now-showing');
    return response.data;
  },
  
  getComingSoonMovies: async () => {
    const response = await apiClient.get('/movies/coming-soon');
    return response.data;
  },

  getShowtimesByMovieId: async (movieId: number) => {
    const response = await apiClient.get(`/movies/${movieId}/showtimes`);
    return response.data;
  },
};
