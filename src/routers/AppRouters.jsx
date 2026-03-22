import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

// Các trang rỗng để test link (Sau này A, B, C sẽ thay bằng code thật)
import Home from "../pages/user/Home";
const Login = () => <h2>Trang Đăng nhập (Nhiệm vụ Bạn C)</h2>;
const ManageMovies = () => <h2>Trang Admin Phim (Nhiệm vụ Bạn B)</h2>;

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Nhóm User */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Nhóm Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="movies" element={<ManageMovies />} />
        </Route>

        {/* Nhóm Auth */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
