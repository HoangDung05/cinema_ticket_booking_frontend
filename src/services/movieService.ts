import apiClient from './apiClient';

export const movieService = {
  getNowShowingMovies: async () => {
    const response = await apiClient.get('/movies/now-showing');
    return response.data;
  },
  
  getComingSoonMovies: async () => {
    const response = await apiClient.get('/movies/coming-soon');
    return response.data;
  }
};
