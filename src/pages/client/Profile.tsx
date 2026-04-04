export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Sidebar */}
        <div className="lg:col-span-3">
          <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm text-center sticky top-24">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-surface-container-high mb-4 relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-on-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-surface-container-lowest">photo_camera</span>
              </div>
            </div>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-1">Alex Mercer</h2>
            <p className="text-on-surface-variant mb-6 text-sm">alex.mercer@example.com</p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm mb-8">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              Gold Member
            </div>

            <nav className="flex flex-col gap-2 text-left">
              <a href="#" className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 text-primary font-headline font-bold transition-colors">
                <span className="material-symbols-outlined">manage_accounts</span>
                Account Settings
              </a>
              <a href="#" className="flex items-center gap-3 p-4 rounded-xl hover:bg-surface-container-low text-on-surface-variant font-headline font-semibold transition-colors">
                <span className="material-symbols-outlined">confirmation_number</span>
                My Tickets
              </a>
              <a href="#" className="flex items-center gap-3 p-4 rounded-xl hover:bg-surface-container-low text-on-surface-variant font-headline font-semibold transition-colors">
                <span className="material-symbols-outlined">favorite</span>
                Watchlist
              </a>
              <a href="#" className="flex items-center gap-3 p-4 rounded-xl hover:bg-surface-container-low text-on-surface-variant font-headline font-semibold transition-colors">
                <span className="material-symbols-outlined">payments</span>
                Payment Methods
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9">
          <h1 className="text-3xl font-headline font-bold text-on-surface mb-8">Account Settings</h1>
          
          {/* Profile Form */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm mb-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-on-surface-variant mb-2">First Name</label>
                <input type="text" id="firstName" defaultValue="Alex" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-on-surface-variant mb-2">Last Name</label>
                <input type="text" id="lastName" defaultValue="Mercer" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-bold text-on-surface-variant mb-2">Email Address</label>
                <input type="email" id="email" defaultValue="alex.mercer@example.com" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-on-surface-variant mb-2">Phone Number</label>
                <input type="tel" id="phone" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface" />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-bold text-on-surface-variant mb-2">Preferred Cinema</label>
                <select id="location" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface appearance-none">
                  <option>Grand Lumière Downtown</option>
                  <option>Lumière Westside</option>
                  <option>Lumière North</option>
                </select>
              </div>
              <div className="md:col-span-2 flex justify-end mt-4">
                <button type="button" className="px-8 py-3 bg-primary text-on-primary rounded-xl font-headline font-bold hover:bg-primary/90 transition-all shadow-md">Save Changes</button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Upcoming Movies Widget */}
            <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-headline font-bold text-on-surface">Upcoming Movies</h2>
                <a href="#" className="text-primary text-sm font-bold hover:underline">View All</a>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-20 rounded-lg overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=200" alt="Poster" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface text-sm">The Midnight Protocol</h3>
                    <p className="text-xs text-on-surface-variant mb-1">Oct 24 • 05:00 PM</p>
                    <span className="text-xs font-bold text-primary">2 Tickets</span>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-20 rounded-lg overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&q=80&w=200" alt="Poster" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface text-sm">Neon Nights</h3>
                    <p className="text-xs text-on-surface-variant mb-1">Nov 02 • 08:30 PM</p>
                    <span className="text-xs font-bold text-primary">4 Tickets</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Loyalty Vouchers Widget */}
            <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm bg-primary-gradient relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-surface-container-lowest/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-xl font-headline font-bold text-on-primary">Loyalty Vouchers</h2>
                  <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>loyalty</span>
                </div>
                <div className="bg-surface-container-lowest/20 backdrop-blur-md rounded-xl p-4 border border-surface-container-lowest/30 mb-4">
                  <p className="text-sm text-on-primary/90 font-medium mb-1">Free Large Popcorn</p>
                  <p className="text-xs text-on-primary/70">Valid until Dec 31, 2023</p>
                </div>
                <div className="bg-surface-container-lowest/20 backdrop-blur-md rounded-xl p-4 border border-surface-container-lowest/30">
                  <p className="text-sm text-on-primary/90 font-medium mb-1">50% Off Second Ticket</p>
                  <p className="text-xs text-on-primary/70">Valid until Nov 15, 2023</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
