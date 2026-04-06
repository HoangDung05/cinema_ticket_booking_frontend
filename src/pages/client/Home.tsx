import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'now_showing' | 'coming_soon'>('now_showing');

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden bg-on-background">
        <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000" alt="Hero Movie" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-12 md:p-24 max-w-7xl mx-auto">
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/20 text-primary-fixed border border-primary/30 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm">Sci-Fi</span>
            <span className="px-3 py-1 bg-surface/20 text-surface border border-surface/30 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm">IMAX 3D</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-surface-container-lowest mb-6 tracking-tight text-shadow-editorial">The Midnight Protocol</h1>
          <p className="text-lg md:text-xl text-surface-variant max-w-2xl mb-10 font-medium leading-relaxed">In a future where memories can be hacked, a rogue agent must protect the last uncorrupted mind before the system resets.</p>
          <div className="flex gap-4">
            <Link to="/movie" className="px-8 py-4 bg-primary text-on-primary rounded-xl font-headline font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 flex items-center gap-2">
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

      {/* Trending Now / Quick Filters */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-surface-container-lowest rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-outline-variant/20">
          <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
             <button 
               onClick={() => setActiveTab('now_showing')}
               className={`px-6 py-2 rounded-full font-headline font-bold whitespace-nowrap transition-colors ${activeTab === 'now_showing' ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}>
               Phim đang chiếu
             </button>
             <button 
               onClick={() => setActiveTab('coming_soon')}
               className={`px-6 py-2 rounded-full font-headline font-bold whitespace-nowrap transition-colors ${activeTab === 'coming_soon' ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}>
               Phim sắp chiếu
             </button>
          </div>
        </div>
      </div>

      {/* Tab Content Placeholder */}

      {activeTab === 'now_showing' && (
        <section className="max-w-7xl mx-auto px-6 py-20 pb-40 fade-in-up">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-headline font-bold text-on-surface mb-2">Phim đang chiếu</h2>
              <p className="text-on-surface-variant">Trải nghiệm điện ảnh tuyệt vời.</p>
            </div>
            <button className="text-primary font-headline font-bold hover:underline flex items-center gap-1">
              Xem tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Movie Card 1 */}
            <Link to="/movie" className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=600" alt="Movie Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-headline font-bold shadow-lg">Get Tickets</button>
                </div>
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold text-sm text-on-surface">4.8</span>
                </div>
              </div>
              <h3 className="text-lg font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Echoes of Eternity</h3>
              <p className="text-sm text-on-surface-variant mb-2">Sci-Fi • 2h 15m</p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-surface-container-high rounded text-on-surface-variant font-medium">IMAX</span>
                <span className="text-xs px-2 py-1 bg-surface-container-high rounded text-on-surface-variant font-medium">4DX</span>
              </div>
            </Link>

            {/* Movie Card 2 */}
            <Link to="/movie" className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&q=80&w=600" alt="Movie Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-headline font-bold shadow-lg">Get Tickets</button>
                </div>
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold text-sm text-on-surface">4.5</span>
                </div>
              </div>
              <h3 className="text-lg font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Neon Nights</h3>
              <p className="text-sm text-on-surface-variant mb-2">Action • 1h 50m</p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-surface-container-high rounded text-on-surface-variant font-medium">Standard</span>
              </div>
            </Link>

            {/* Movie Card 3 */}
            <Link to="/movie" className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&q=80&w=600" alt="Movie Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-headline font-bold shadow-lg">Get Tickets</button>
                </div>
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold text-sm text-on-surface">4.9</span>
                </div>
              </div>
              <h3 className="text-lg font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">The Last Symphony</h3>
              <p className="text-sm text-on-surface-variant mb-2">Drama • 2h 30m</p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-surface-container-high rounded text-on-surface-variant font-medium">VIP</span>
              </div>
            </Link>

            {/* Movie Card 4 */}
            <Link to="/movie" className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&q=80&w=600" alt="Movie Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-headline font-bold shadow-lg">Get Tickets</button>
                </div>
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold text-sm text-on-surface">4.2</span>
                </div>
              </div>
              <h3 className="text-lg font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Silent Peak</h3>
              <p className="text-sm text-on-surface-variant mb-2">Thriller • 1h 45m</p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-surface-container-high rounded text-on-surface-variant font-medium">Standard</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {activeTab === 'coming_soon' && (
        <section className="bg-surface-container-low py-20 pb-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-headline font-bold text-on-surface mb-2">Phim sắp chiếu</h2>
                <p className="text-on-surface-variant">Đánh dấu vào lịch của bạn.</p>
              </div>
              <button className="text-primary font-headline font-bold hover:underline flex items-center gap-1">
                Xem tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            
            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
              {/* Coming Soon Card 1 */}
              <div className="min-w-[300px] md:min-w-[400px] bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=800" alt="Coming Soon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
                    <span className="font-bold text-sm text-primary">Oct 24</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Chronicles of Mars</h3>
                  <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">The first human colony faces an unprecedented challenge when an ancient structure is discovered beneath the red dust.</p>
                  <button className="text-primary font-headline font-bold hover:underline flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">notifications</span> Remind Me
                  </button>
                </div>
              </div>

              {/* Coming Soon Card 2 */}
              <div className="min-w-[300px] md:min-w-[400px] bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800" alt="Coming Soon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
                    <span className="font-bold text-sm text-primary">Nov 05</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-2">The Illusionist's Secret</h3>
                  <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">A master illusionist attempts the greatest heist in history during a live performance broadcast globally.</p>
                  <button className="text-primary font-headline font-bold hover:underline flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">notifications</span> Remind Me
                  </button>
                </div>
              </div>
              
              {/* Coming Soon Card 3 */}
              <div className="min-w-[300px] md:min-w-[400px] bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800" alt="Coming Soon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
                    <span className="font-bold text-sm text-primary">Dec 12</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Rhythm of the Streets</h3>
                  <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">An underground dance crew must win the city's biggest competition to save their community center.</p>
                  <button className="text-primary font-headline font-bold hover:underline flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">notifications</span> Remind Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
