export default function MyTickets() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-3xl font-headline font-bold text-on-surface mb-2">My Cinema Tickets</h1>
          <p className="text-on-surface-variant">Manage your upcoming and past movie experiences.</p>
        </div>
        
        {/* Tab Switcher */}
        <div className="flex gap-2 p-1 bg-surface-container-high rounded-xl">
          <button className="px-6 py-2 bg-surface-container-lowest shadow-sm rounded-lg font-headline font-bold text-primary">Upcoming</button>
          <button className="px-6 py-2 text-on-surface-variant font-headline font-semibold hover:bg-surface-container-low transition-colors rounded-lg">Past Trips/History</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ticket 1 */}
        <div className="flex flex-col sm:flex-row bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/20 ticket-shadow group">
          {/* Poster Side */}
          <div className="w-full sm:w-48 h-48 sm:h-auto shrink-0 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=400" alt="Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-primary">IMAX 3D</div>
          </div>
          
          {/* Perforation Line (Desktop) */}
          <div className="hidden sm:block w-4 relative bg-surface-container-lowest">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 perforation"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-background rounded-full border-b border-outline-variant/20"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-background rounded-full border-t border-outline-variant/20"></div>
          </div>

          {/* Perforation Line (Mobile) */}
          <div className="sm:hidden h-4 relative bg-surface-container-lowest w-full">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-outline-variant/30 border-t border-dashed border-outline-variant/50"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-background rounded-full border-r border-outline-variant/20"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-background rounded-full border-l border-outline-variant/20"></div>
          </div>

          {/* Details Side */}
          <div className="p-6 flex-grow flex flex-col justify-between bg-surface-container-lowest relative">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-headline font-bold text-on-surface">The Midnight Protocol</h3>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-bold">Confirmed</span>
              </div>
              <p className="text-sm text-on-surface-variant mb-4 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span> Grand Lumière Downtown
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-xs text-on-surface-variant mb-1">Date</p>
                  <p className="font-headline font-bold text-on-surface text-sm">Oct 24</p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant mb-1">Time</p>
                  <p className="font-headline font-bold text-on-surface text-sm">05:00 PM</p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant mb-1">Seats</p>
                  <p className="font-headline font-bold text-primary text-sm">E4, E5</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline-variant">qr_code_2</span>
                <span className="text-xs text-on-surface-variant font-mono">TKT-8492-XYZ</span>
              </div>
              <button className="text-primary font-headline font-bold text-sm hover:underline">View QR Code</button>
            </div>
          </div>
        </div>

        {/* Ticket 2 */}
        <div className="flex flex-col sm:flex-row bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/20 ticket-shadow group">
          {/* Poster Side */}
          <div className="w-full sm:w-48 h-48 sm:h-auto shrink-0 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&q=80&w=400" alt="Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-primary">Standard 2D</div>
          </div>
          
          {/* Perforation Line (Desktop) */}
          <div className="hidden sm:block w-4 relative bg-surface-container-lowest">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 perforation"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-background rounded-full border-b border-outline-variant/20"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-background rounded-full border-t border-outline-variant/20"></div>
          </div>

          {/* Perforation Line (Mobile) */}
          <div className="sm:hidden h-4 relative bg-surface-container-lowest w-full">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-outline-variant/30 border-t border-dashed border-outline-variant/50"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-background rounded-full border-r border-outline-variant/20"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-background rounded-full border-l border-outline-variant/20"></div>
          </div>

          {/* Details Side */}
          <div className="p-6 flex-grow flex flex-col justify-between bg-surface-container-lowest relative">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-headline font-bold text-on-surface">Neon Nights</h3>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-bold">Confirmed</span>
              </div>
              <p className="text-sm text-on-surface-variant mb-4 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span> Lumière Westside
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-xs text-on-surface-variant mb-1">Date</p>
                  <p className="font-headline font-bold text-on-surface text-sm">Nov 02</p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant mb-1">Time</p>
                  <p className="font-headline font-bold text-on-surface text-sm">08:30 PM</p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant mb-1">Seats</p>
                  <p className="font-headline font-bold text-primary text-sm">G12, G13, G14, G15</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline-variant">qr_code_2</span>
                <span className="text-xs text-on-surface-variant font-mono">TKT-9921-ABC</span>
              </div>
              <button className="text-primary font-headline font-bold text-sm hover:underline">View QR Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
