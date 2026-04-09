import apiClient from './apiClient';

export const userService = {
  getMyProfile: async (email: string) => {
    const response = await apiClient.get(`/users/me?email=${email}`);
    return response.data;
  }
};
