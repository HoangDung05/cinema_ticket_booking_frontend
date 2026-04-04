import { ReactNode } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom'; // Thêm Outlet

export default function Layout() { // Bỏ { children }
  const location = useLocation();

  // Cập nhật lại đường dẫn để có tiền tố /admin
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: 'dashboard' },
    { name: 'Movies', path: '/admin/movies', icon: 'movie' },
    { name: 'Cinemas', path: '/admin/cinemas', icon: 'theater_comedy' },
    { name: 'Vouchers', path: '/admin/vouchers', icon: 'confirmation_number' },
    { name: 'Users', path: '/admin/users', icon: 'group' },
  ];

  return (
    <div className="bg-surface text-on-surface min-h-screen flex font-body">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full flex flex-col py-8 bg-white dark:bg-gray-950 w-64 border-r border-gray-100 dark:border-gray-900 shadow-sm z-50">
        <div className="px-6 mb-10">
          <h1 className="text-2xl font-black text-sky-600 dark:text-sky-400 tracking-tight font-headline">Lumière Admin</h1>
          <p className="font-manrope text-sm font-medium text-gray-500 mt-1">Management Portal</p>
        </div>
        <nav className="flex-1 space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-headline text-sm font-medium transition-colors duration-200 ${isActive
                    ? 'text-sky-600 dark:text-sky-400 font-bold border-r-4 border-sky-500 bg-sky-50 dark:bg-sky-900/20 translate-x-1'
                    : 'text-gray-500 dark:text-gray-400 hover:text-sky-500 hover:bg-gray-50 dark:hover:bg-gray-900'
                  }`}
              >
                <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile Section */}
        <div className="px-6 pt-6 border-t border-gray-100 dark:border-gray-900">
          <div className="flex items-center gap-3 bg-surface-container-low p-3 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border-2 border-white">
              <img
                src="https://ui-avatars.com/api/?name=Alex+Sterling" // Đổi link ảnh để demo
                alt="Admin User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold truncate text-on-surface">Alex Sterling</p>
              <p className="text-[10px] text-on-surface-variant">System Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="ml-64 flex-1 flex flex-col min-h-screen">
        {/* TopAppBar */}
        <header className="flex items-center justify-between px-8 h-16 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-40 transition-colors">
          <div className="flex items-center gap-4">
            <h2 className="font-headline font-extrabold text-lg tracking-tight text-on-surface">
              {navItems.find(i => i.path === location.pathname)?.name || 'Admin'} Management
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-72 hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-surface-container-low border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
              />
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <button className="hover:text-sky-500 transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button className="hover:text-sky-500 transition-colors">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {/* CỰC KỲ QUAN TRỌNG: Dùng Outlet thay cho {children} */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}