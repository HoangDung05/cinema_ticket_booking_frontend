import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="fixed w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-headline font-bold text-primary tracking-tight">Lumière</Link>
          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-primary font-headline font-semibold">Home</Link>
            <Link to="/" className="text-on-surface-variant hover:text-primary font-headline font-medium transition-colors">Movies</Link>
            <Link to="/tickets" className="text-on-surface-variant hover:text-primary font-headline font-medium transition-colors">My Bookings</Link>
            <Link to="/" className="text-on-surface-variant hover:text-primary font-headline font-medium transition-colors">Offers</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>
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
