import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-900 text-white flex items-center px-6 h-16">
        <div className="text-red-500 font-bold mr-6 cursor-pointer">
          CINEMA LOGO
        </div>

        <nav className="flex gap-4">
          <button onClick={() => navigate("/")} className="hover:underline">
            Trang chủ
          </button>
          <button className="hover:underline">Lịch chiếu</button>
        </nav>
      </header>

      {/* Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4">
        Cinema Booking ©2026 Created by Your Team
      </footer>
    </div>
  );
};

export default MainLayout;
