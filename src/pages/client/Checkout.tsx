import { Link } from 'react-router-dom';

export default function Checkout() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Tab Switcher */}
      <div className="flex gap-4 mb-12 p-1 bg-surface-container-high w-fit rounded-xl">
        <button className="px-6 py-2 bg-surface-container-lowest shadow-sm rounded-lg font-headline font-bold text-primary">Secure Checkout</button>
        <button className="px-6 py-2 text-on-surface-variant font-headline font-semibold hover:bg-surface-container-low transition-colors rounded-lg">User Profile</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Content - Payment */}
        <div className="lg:col-span-8">
          <h1 className="text-3xl font-headline font-bold text-on-surface mb-8">Payment Method</h1>
          
          <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm mb-8">
            {/* Payment Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <label className="relative flex flex-col items-center p-4 border-2 border-primary bg-primary/5 rounded-2xl cursor-pointer">
                <input type="radio" name="payment" className="absolute opacity-0" defaultChecked />
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">credit_card</span>
                <span className="font-headline font-bold text-primary">Credit Card</span>
                <div className="absolute top-3 right-3 w-4 h-4 rounded-full border-4 border-primary bg-surface-container-lowest"></div>
              </label>
              
              <label className="relative flex flex-col items-center p-4 border-2 border-outline-variant/30 hover:border-outline-variant rounded-2xl cursor-pointer transition-colors">
                <input type="radio" name="payment" className="absolute opacity-0" />
                <span className="material-symbols-outlined text-on-surface-variant mb-2 text-3xl">account_balance_wallet</span>
                <span className="font-headline font-bold text-on-surface-variant">Digital Wallet</span>
                <div className="absolute top-3 right-3 w-4 h-4 rounded-full border-2 border-outline-variant/50"></div>
              </label>

              <label className="relative flex flex-col items-center p-4 border-2 border-outline-variant/30 hover:border-outline-variant rounded-2xl cursor-pointer transition-colors">
                <input type="radio" name="payment" className="absolute opacity-0" />
                <span className="material-symbols-outlined text-on-surface-variant mb-2 text-3xl">redeem</span>
                <span className="font-headline font-bold text-on-surface-variant">Gift Card</span>
                <div className="absolute top-3 right-3 w-4 h-4 rounded-full border-2 border-outline-variant/50"></div>
              </label>
            </div>

            {/* Card Details Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="cardName" className="block text-sm font-bold text-on-surface-variant mb-2">Name on Card</label>
                <input type="text" id="cardName" placeholder="John Doe" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface" />
              </div>
              
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-bold text-on-surface-variant mb-2">Card Number</label>
                <div className="relative">
                  <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface font-mono" />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">credit_card</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-bold text-on-surface-variant mb-2">Expiry Date</label>
                  <input type="text" id="expiry" placeholder="MM/YY" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface font-mono" />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-bold text-on-surface-variant mb-2">CVV</label>
                  <div className="relative">
                    <input type="text" id="cvv" placeholder="123" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface font-mono" />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant cursor-help" title="3 digits on back of card">info</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <input type="checkbox" id="saveCard" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" />
                <label htmlFor="saveCard" className="text-sm text-on-surface-variant">Save this card for future purchases</label>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-4">
          <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-lg sticky top-24">
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Order Summary</h2>
            
            <div className="flex gap-4 mb-6 pb-6 border-b border-outline-variant/20">
              <div className="w-16 rounded-lg overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=200" alt="Poster" className="w-full h-auto object-cover" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface mb-1">The Midnight Protocol</h3>
                <p className="text-sm text-on-surface-variant">Grand Lumière • IMAX 3D</p>
                <p className="text-sm font-medium text-on-surface mt-1">Thu, Oct 24 • 05:00 PM</p>
                <p className="text-sm text-primary font-bold mt-1">Seats: E4, E5</p>
              </div>
            </div>
            
            <div className="mb-6 pb-6 border-b border-outline-variant/20 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Tickets (2 × Adult)</span>
                <span className="font-medium text-on-surface">$40.00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Convenience Fee</span>
                <span className="font-medium text-on-surface">$4.00</span>
              </div>
              <div className="flex justify-between items-center text-sm text-secondary">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">local_activity</span> Promo Applied</span>
                <span className="font-medium">-$5.00</span>
              </div>
            </div>
            
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-sm text-on-surface-variant block mb-1">Total Amount</span>
                <span className="text-3xl font-headline font-extrabold text-primary">$39.00</span>
              </div>
            </div>
            
            <Link to="/tickets" className="w-full py-4 bg-primary text-on-primary rounded-xl font-headline font-bold hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">lock</span>
              Confirm and Pay
            </Link>
            <p className="text-xs text-center text-on-surface-variant mt-4">By confirming, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
        </div>
      </div>

      {/* DASHBOARD / PROFILE SECTION */}
      <div className="mt-24 pt-24 border-t border-outline-variant/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Profile Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm text-center mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-surface-container-high mb-4 relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" alt="Profile" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-on-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-surface-container-lowest">photo_camera</span>
                </div>
              </div>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-1">Alex Mercer</h2>
              <p className="text-on-surface-variant mb-6">alex.mercer@example.com</p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm mb-8">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                Gold Member
              </div>

              <div className="flex flex-col gap-2 text-left">
                <button className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 text-primary font-headline font-bold transition-colors">
                  <span className="material-symbols-outlined">person</span>
                  Personal Info
                </button>
                <button className="flex items-center gap-3 p-4 rounded-xl hover:bg-surface-container-low text-on-surface-variant font-headline font-semibold transition-colors">
                  <span className="material-symbols-outlined">history</span>
                  Booking History
                </button>
                <button className="flex items-center gap-3 p-4 rounded-xl hover:bg-surface-container-low text-on-surface-variant font-headline font-semibold transition-colors">
                  <span className="material-symbols-outlined">payment</span>
                  Payment Methods
                </button>
                <button className="flex items-center gap-3 p-4 rounded-xl hover:bg-surface-container-low text-on-surface-variant font-headline font-semibold transition-colors">
                  <span className="material-symbols-outlined">settings</span>
                  Preferences
                </button>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-8">Personal Information</h2>
            
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
                  <label htmlFor="dob" className="block text-sm font-bold text-on-surface-variant mb-2">Date of Birth</label>
                  <input type="date" id="dob" defaultValue="1990-05-15" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface" />
                </div>
                <div className="md:col-span-2 flex justify-end mt-4">
                  <button type="button" className="px-8 py-3 bg-primary text-on-primary rounded-xl font-headline font-bold hover:bg-primary/90 transition-all shadow-md">Save Changes</button>
                </div>
              </form>
            </div>

            <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Recent Bookings</h2>
            <div className="flex flex-col gap-4">
              {/* Booking Item */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=200" alt="Poster" className="w-full h-auto object-cover" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-1">The Midnight Protocol</h3>
                  <p className="text-sm text-on-surface-variant mb-2">Grand Lumière • IMAX 3D</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-on-surface">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm text-primary">calendar_today</span> Oct 24, 2023</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm text-primary">schedule</span> 05:00 PM</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm text-primary">event_seat</span> E4, E5</span>
                  </div>
                </div>
                <div className="shrink-0">
                  <button className="px-6 py-2 bg-surface-container-low text-primary border border-primary/20 rounded-xl font-headline font-bold hover:bg-primary/10 transition-colors">View Ticket</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
