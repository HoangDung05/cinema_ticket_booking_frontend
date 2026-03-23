import { Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <div className="mb-6 text-center font-bold text-lg">ADMIN</div>

        <ul className="space-y-2">
          <li>
            <button
              onClick={() => navigate("/admin/movies")}
              className="w-full text-left px-3 py-2 rounded hover:bg-gray-700"
            >
              Quản lý phim
            </button>
          </li>
          <li>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-700">
              Quản lý lịch chiếu
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 bg-gray-100">
        <div className="bg-white p-6 rounded shadow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
