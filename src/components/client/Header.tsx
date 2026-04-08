import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="fixed w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-headline font-bold text-primary tracking-tight">Group3 Cinema</Link>
          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-primary font-headline font-semibold">Trang chủ</Link>
            <Link to="/" className="text-on-surface-variant hover:text-primary font-headline font-medium transition-colors">Giới thiệu</Link>
            <Link to="/tickets" className="text-on-surface-variant hover:text-primary font-headline font-medium transition-colors">Vé của tôi</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative flex-grow md:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">Search</span>
            <input type="text" placeholder="Tìm kiếm phim..." className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline" />
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">notifications</span>
          </button>
          <Link to="/profile" className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-primary/20 overflow-hidden cursor-pointer block">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt="Profile" className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
