import { Link } from 'react-router-dom';

export default function SelectShowtime() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Stepper */}
      <div className="flex items-center justify-center mb-16">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline font-bold shadow-md">1</div>
            <span className="text-sm font-headline font-bold text-primary">Schedule</span>
          </div>
          <div className="w-16 h-1 bg-surface-container-high rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-primary"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-headline font-bold">2</div>
            <span className="text-sm font-headline font-semibold text-on-surface-variant">Seats</span>
          </div>
          <div className="w-16 h-1 bg-surface-container-high rounded-full"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-headline font-bold">3</div>
            <span className="text-sm font-headline font-semibold text-on-surface-variant">Payment</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <h1 className="text-3xl font-headline font-bold text-on-surface mb-8">Select Date</h1>
          
          {/* Date Selector */}
          <div className="flex gap-4 overflow-x-auto pb-4 mb-12 scrollbar-hide">
            <button className="flex flex-col items-center justify-center min-w-[80px] py-4 bg-primary text-on-primary rounded-2xl shadow-md border border-primary/20">
              <span className="text-sm font-medium mb-1">Oct</span>
              <span className="text-2xl font-headline font-bold mb-1">24</span>
              <span className="text-xs">Today</span>
            </button>
            <button className="flex flex-col items-center justify-center min-w-[80px] py-4 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low rounded-2xl border border-outline-variant/20 transition-colors">
              <span className="text-sm font-medium text-on-surface-variant mb-1">Oct</span>
              <span className="text-2xl font-headline font-bold mb-1">25</span>
              <span className="text-xs text-on-surface-variant">Fri</span>
            </button>
            <button className="flex flex-col items-center justify-center min-w-[80px] py-4 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low rounded-2xl border border-outline-variant/20 transition-colors">
              <span className="text-sm font-medium text-on-surface-variant mb-1">Oct</span>
              <span className="text-2xl font-headline font-bold mb-1">26</span>
              <span className="text-xs text-on-surface-variant">Sat</span>
            </button>
            <button className="flex flex-col items-center justify-center min-w-[80px] py-4 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low rounded-2xl border border-outline-variant/20 transition-colors">
              <span className="text-sm font-medium text-on-surface-variant mb-1">Oct</span>
              <span className="text-2xl font-headline font-bold mb-1">27</span>
              <span className="text-xs text-on-surface-variant">Sun</span>
            </button>
            <button className="flex flex-col items-center justify-center min-w-[80px] py-4 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low rounded-2xl border border-outline-variant/20 transition-colors">
              <span className="text-sm font-medium text-on-surface-variant mb-1">Oct</span>
              <span className="text-2xl font-headline font-bold mb-1">28</span>
              <span className="text-xs text-on-surface-variant">Mon</span>
            </button>
          </div>

          <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Select Cinema & Time</h2>
          
          <div className="flex flex-col gap-8">
            {/* Cinema 1 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-1">Grand Lumière</h3>
                  <p className="text-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    Downtown, 1st Avenue
                  </p>
                </div>
                <button className="text-primary text-sm font-headline font-bold hover:underline">View Map</button>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-bold text-on-surface-variant mb-3 uppercase tracking-wider">IMAX 3D</h4>
                <div className="flex flex-wrap gap-3">
                  <Link to="/book/seats" className="px-6 py-3 bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-headline font-bold transition-colors border border-outline-variant/10">10:30 AM</Link>
                  <Link to="/book/seats" className="px-6 py-3 bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-headline font-bold transition-colors border border-outline-variant/10">01:45 PM</Link>
                  <Link to="/book/seats" className="px-6 py-3 bg-primary text-on-primary rounded-xl font-headline font-bold shadow-md">05:00 PM</Link>
                  <Link to="/book/seats" className="px-6 py-3 bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-headline font-bold transition-colors border border-outline-variant/10">08:30 PM</Link>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-on-surface-variant mb-3 uppercase tracking-wider">Standard 2D</h4>
                <div className="flex flex-wrap gap-3">
                  <Link to="/book/seats" className="px-6 py-3 bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-headline font-bold transition-colors border border-outline-variant/10">11:15 AM</Link>
                  <Link to="/book/seats" className="px-6 py-3 bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-headline font-bold transition-colors border border-outline-variant/10">02:30 PM</Link>
                  <Link to="/book/seats" className="px-6 py-3 bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-headline font-bold transition-colors border border-outline-variant/10">06:15 PM</Link>
                  <Link to="/book/seats" className="px-6 py-3 bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-headline font-bold transition-colors border border-outline-variant/10">09:45 PM</Link>
                </div>
              </div>
            </div>

            {/* Cinema 2 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20 shadow-sm opacity-75 hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-1">Lumière Westside</h3>
                  <p className="text-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    West Mall, 3rd Floor
                  </p>
                </div>
                <button className="text-primary text-sm font-headline font-bold hover:underline">View Map</button>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-on-surface-variant mb-3 uppercase tracking-wider">Standard 2D</h4>
                <div className="flex flex-wrap gap-3">
                  <Link to="/book/seats" className="px-6 py-3 bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-headline font-bold transition-colors border border-outline-variant/10">12:00 PM</Link>
                  <Link to="/book/seats" className="px-6 py-3 bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-headline font-bold transition-colors border border-outline-variant/10">03:15 PM</Link>
                  <Link to="/book/seats" className="px-6 py-3 bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-headline font-bold transition-colors border border-outline-variant/10">07:00 PM</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-4">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20 shadow-lg sticky top-24">
            <div className="flex gap-4 mb-6 pb-6 border-b border-outline-variant/20">
              <div className="w-20 rounded-lg overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=200" alt="Poster" className="w-full h-auto object-cover" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface mb-1">The Midnight Protocol</h3>
                <p className="text-sm text-on-surface-variant mb-2">Sci-Fi • 2h 15m</p>
                <span className="px-2 py-0.5 border border-outline-variant rounded text-xs font-bold text-on-surface-variant">PG-13</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">calendar_today</span>
                <div>
                  <p className="text-sm text-on-surface-variant">Date</p>
                  <p className="font-headline font-bold text-on-surface">Thu, Oct 24, 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">schedule</span>
                <div>
                  <p className="text-sm text-on-surface-variant">Time</p>
                  <p className="font-headline font-bold text-on-surface">05:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
                <div>
                  <p className="text-sm text-on-surface-variant">Cinema</p>
                  <p className="font-headline font-bold text-on-surface">Grand Lumière</p>
                  <p className="text-xs text-on-surface-variant">IMAX 3D</p>
                </div>
              </div>
            </div>
            
            <Link to="/book/seats" className="w-full py-4 bg-primary text-on-primary rounded-xl font-headline font-bold hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2">
              Continue to Seats
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
