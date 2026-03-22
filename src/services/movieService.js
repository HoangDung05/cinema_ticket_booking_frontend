// Giả lập dữ liệu để anh em render giao diện trước
const mockMovies = [
  {
    id: 1,
    name: "Lật Mặt 7",
    image: "https://bit.ly/3W9nJ6G",
    duration: 120,
    description: "Phim gia đình cảm động",
  },
  {
    id: 2,
    name: "Dune: Part Two",
    image: "https://bit.ly/4aL7z3o",
    duration: 155,
    description: "Hành động viễn tưởng",
  },
];

export const movieService = {
  // Hàm lấy danh sách phim
  getAllMovies: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: mockMovies }), 500); // Giả lập delay mạng 0.5s
    });
  },

  // Hàm lấy chi tiết 1 phim
  getMovieById: (id) => {
    return new Promise((resolve) => {
      const movie = mockMovies.find((m) => m.id === parseInt(id));
      setTimeout(() => resolve({ data: movie }), 300);
    });
  },
};
