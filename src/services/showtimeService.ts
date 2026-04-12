import apiClient from './apiClient';

export type SeatStatusDTO = {
  id: number;
  seatNumber: string;
  seatType: string;
  booked: boolean;
};

export const showtimeService = {
  // Lấy các ghế của 1 suất chiếu
  getSeatsByShowtimeId: async (id: number): Promise<SeatStatusDTO[]> => {
    const response = await apiClient.get<SeatStatusDTO[]>(`/showtimes/${id}/seats`);
    return response.data;
  },
};
