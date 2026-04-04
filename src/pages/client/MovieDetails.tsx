import { Link } from 'react-router-dom';

export default function MovieDetails() {
  return (
    <>
      {/* Movie Backdrop & Header */}
      <div className="relative w-full bg-on-background pt-20">
        <div className="absolute inset-0 h-[60vh] w-full overflow-hidden">
          <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000" alt="Movie Backdrop" className="w-full h-full object-cover opacity-40 blur-sm scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-20">
          <div className="flex flex-col md:flex-row gap-12 items-end">
            {/* Poster */}
            <div className="w-64 md:w-80 shrink-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest/10 z-10">
              <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=600" alt="The Midnight Protocol Poster" className="w-full h-auto object-cover" />
            </div>
            
            {/* Info */}
            <div className="flex-grow text-surface-container-lowest z-10">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/20 text-primary-fixed border border-primary/30 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm">Sci-Fi</span>
                <span className="px-3 py-1 bg-surface/20 text-surface border border-surface/30 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm">Action</span>
                <span className="px-3 py-1 bg-surface/20 text-surface border border-surface/30 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm">IMAX 3D</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-extrabold mb-4 tracking-tight text-shadow-editorial">The Midnight Protocol</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-surface-variant font-medium mb-8">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-lg font-bold text-surface-container-lowest">4.8</span>
                  <span className="text-sm">/5</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline-variant">schedule</span>
                  <span>2h 15m</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline-variant">calendar_today</span>
                  <span>Released: Oct 12, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 border border-outline-variant rounded text-sm font-bold">PG-13</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/book/showtime" className="px-8 py-4 bg-primary text-on-primary rounded-xl font-headline font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 flex items-center gap-2">
                  <span className="material-symbols-outlined">confirmation_number</span>
                  Book Tickets
                </Link>
                <button className="px-8 py-4 bg-surface-container-lowest/10 text-surface-container-lowest border border-surface-container-lowest/30 rounded-xl font-headline font-bold hover:bg-surface-container-lowest/20 transition-all backdrop-blur-sm flex items-center gap-2">
                  <span className="material-symbols-outlined">play_circle</span>
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Synopsis</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
              In a future where memories can be hacked, extracted, and sold on the black market, a rogue memory-agent named Kael discovers a conspiracy that threatens to reset the minds of the entire city. Hunted by the very corporation he once served, Kael must protect the last uncorrupted mind—a young prodigy who holds the key to the "Midnight Protocol." As the lines between reality and fabricated memories blur, Kael must decide what is real and what is worth fighting for.
            </p>
            
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Cast & Crew</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide mb-12">
              {/* Cast 1 */}
              <div className="flex flex-col items-center gap-3 min-w-[100px]">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-surface-container-high">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" alt="Actor" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <p className="font-headline font-bold text-on-surface text-sm">Elias Thorne</p>
                  <p className="text-xs text-on-surface-variant">as Kael</p>
                </div>
              </div>
              {/* Cast 2 */}
              <div className="flex flex-col items-center gap-3 min-w-[100px]">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-surface-container-high">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" alt="Actor" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <p className="font-headline font-bold text-on-surface text-sm">Lyra Vance</p>
                  <p className="text-xs text-on-surface-variant">as Elara</p>
                </div>
              </div>
              {/* Cast 3 */}
              <div className="flex flex-col items-center gap-3 min-w-[100px]">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-surface-container-high">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" alt="Actor" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <p className="font-headline font-bold text-on-surface text-sm">Marcus Reed</p>
                  <p className="text-xs text-on-surface-variant">Director</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20 shadow-sm mb-8">
              <h3 className="font-headline font-bold text-on-surface mb-4">Available Formats</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                  <span className="font-headline font-semibold text-on-surface">IMAX 3D</span>
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                  <span className="font-headline font-semibold text-on-surface">4DX</span>
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                  <span className="font-headline font-semibold text-on-surface">Standard 2D</span>
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20 shadow-sm">
              <h3 className="font-headline font-bold text-on-surface mb-4">Details</h3>
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface-variant">Language</span>
                  <span className="font-medium text-on-surface">English</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface-variant">Subtitles</span>
                  <span className="font-medium text-on-surface">English, Spanish, French</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface-variant">Studio</span>
                  <span className="font-medium text-on-surface">Neon Pictures</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
