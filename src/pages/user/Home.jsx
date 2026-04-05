import React, { useEffect, useState } from "react";
// Lưu ý đường dẫn import: ../../ nghĩa là thoát ra khỏi folder user, rồi thoát ra khỏi pages để vào services
import { movieService } from "../../services/movieService";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gọi hàm từ Service bạn đã viết
    movieService
      .getAllMovies()
      .then((res) => {
        console.log("Dữ liệu nhận được:", res.data); // Kiểm tra ở tab Console (F12)
        setMovies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi gọi Service:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Đang tải dữ liệu phim...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Danh sách phim đang chiếu</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
              width: "200px",
            }}
          >
            <img
              src={movie.image}
              alt={movie.name}
              style={{ width: "100%", borderRadius: "30px" }}
            />
            <h3 style={{ marginTop: "10px" }}>{movie.name}</h3>
            <p>Thời lượng: {movie.duration} phút</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
