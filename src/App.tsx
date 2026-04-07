import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 1. Import Layouts
import ClientLayout from './layouts/ClientLayout';
import AdminLayout from './layouts/AdminLayout';

// 2. Import Client Pages (Đảm bảo đường dẫn này đúng với thư mục của bạn)
import Home from './pages/client/Home';
import MovieDetails from './pages/client/MovieDetails';
import SelectShowtime from './pages/client/SelectShowtime';
import SelectSeats from './pages/client/SelectSeats';
import Checkout from './pages/client/Checkout';
import Profile from './pages/client/Profile';
import MyTickets from './pages/client/MyTickets';
import About from './pages/client/About';

// 3. Import Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Movies from './pages/admin/Movies';
import Cinemas from './pages/admin/Cinemas';
import Vouchers from './pages/admin/Vouchers';
import Users from './pages/admin/Users';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ================= CỤM CLIENT (Giao diện người dùng) ================= */}
        {/* Tất cả các route bên trong sẽ dùng chung ClientLayout */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} /> {/* Khớp với đường dẫn "/" */}
          <Route path="movie" element={<MovieDetails />} />
          <Route path="book/showtime" element={<SelectShowtime />} />
          <Route path="book/seats" element={<SelectSeats />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="profile" element={<Profile />} />
          <Route path="tickets" element={<MyTickets />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* ================= CỤM ADMIN (Giao diện quản trị) ================= */}
        {/* Tất cả các route bên trong sẽ có tiền tố là /admin */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Khi vào /admin, mặc định sẽ hiển thị trang Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Các trang con: KHÔNG viết dấu "/" ở đầu path */}
          <Route path="movies" element={<Movies />} />   {/* Đường dẫn: /admin/movies */}
          <Route path="cinemas" element={<Cinemas />} /> {/* Đường dẫn: /admin/cinemas */}
          <Route path="vouchers" element={<Vouchers />} /> {/* Đường dẫn: /admin/vouchers */}
          <Route path="users" element={<Users />} />     {/* Đường dẫn: /admin/users */}
        </Route>

        {/* ================= XỬ LÝ LỖI 404 (Trang không tồn tại) ================= */}
        <Route path="*" element={
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>404 - Không tìm thấy trang</h1>
            <a href="/">Quay về trang chủ</a>
          </div>
        } />
      </Routes>
    </Router>
  );
}