import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const ROWS = ['A', 'B', 'C', 'D', 'E', 'F'] as const;

// Quy ước seatId: RowLetter + number (vd: E4)
const SOLD_SEATS = new Set<string>(['D1', 'D2', 'D3', 'D4', 'F3', 'F4']);
const INITIAL_SELECTED_SEATS = ['E4', 'E5'];

export default function SelectSeats() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>(INITIAL_SELECTED_SEATS);

  const sortSeatIds = (ids: string[]) =>
    [...ids].sort((a, b) => {
      const rowA = a.slice(0, 1) as (typeof ROWS)[number];
      const rowB = b.slice(0, 1) as (typeof ROWS)[number];
      const numA = Number(a.slice(1));
      const numB = Number(b.slice(1));
      const rowIndexA = ROWS.indexOf(rowA);
      const rowIndexB = ROWS.indexOf(rowB);
      return rowIndexA - rowIndexB || numA - numB;
    });

  const selectedSeatsSorted = sortSeatIds(selectedSeats);

  const toggleSeat = (seatId: string) => {
    if (SOLD_SEATS.has(seatId)) return; // Ghế đã bán không thể click

    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) return prev.filter((id) => id !== seatId);
      return [...prev, seatId];
    });
  };

  const getSeatStatus = (seatId: string) => {
    if (SOLD_SEATS.has(seatId)) return 'sold' as const;
    if (selectedSeats.includes(seatId)) return 'selected' as const;
    return 'available' as const;
  };

  const renderSeatButton = (seatId: string) => {
    const status = getSeatStatus(seatId);

    if (status === 'sold') {
      return (
        <button
          key={seatId}
          type="button"
          disabled
          aria-label={`${seatId} - Đã bán`}
          className="w-8 h-8 rounded-t-xl rounded-b-md bg-red-600 border border-red-400/60 opacity-95 cursor-not-allowed relative overflow-hidden"
        >
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-full h-[1px] bg-white/90 rotate-45" />
          </span>
        </button>
      );
    }

    const isSelected = status === 'selected';

    return (
      <button
        key={seatId}
        type="button"
        onClick={() => toggleSeat(seatId)}
        aria-pressed={isSelected}
        className={
          isSelected
            ? 'w-8 h-8 rounded-t-xl rounded-b-md bg-primary shadow-md shadow-primary/30 text-on-primary flex items-center justify-center text-xs font-bold'
            : 'w-8 h-8 rounded-t-xl rounded-b-md bg-surface-container-high border border-outline-variant/30 hover:bg-primary/20 transition-colors'
        }
      >
        {isSelected ? seatId : null}
      </button>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Stepper */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline font-bold shadow-md">
              <span className="material-symbols-outlined text-xl">check</span>
            </div>
            <span className="text-sm font-headline font-bold text-primary">Schedule</span>
          </div>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline font-bold shadow-md">2</div>
            <span className="text-sm font-headline font-bold text-primary">Seats</span>
          </div>
          <div className="w-16 h-1 bg-surface-container-high rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-primary"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-headline font-bold">3</div>
            <span className="text-sm font-headline font-semibold text-on-surface-variant">Payment</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Content - Seat Selection */}
        <div className="lg:col-span-8">
          <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-lg overflow-hidden">
            
            {/* Screen */}
            <div className="mb-16 perspective-screen">
              <div className="h-12 w-3/4 mx-auto bg-gradient-to-b from-primary/40 to-transparent rounded-t-full screen-curve flex items-end justify-center pb-2">
                <span className="text-primary font-headline font-bold tracking-widest uppercase text-sm">Màn hình</span>
              </div>
            </div>

            {/* Seat Grid */}
            <div className="overflow-x-auto pb-8 custom-scrollbar">
              <div className="min-w-[600px] flex flex-col gap-4 items-center">
                {ROWS.map((row) => (
                  <Fragment key={row}>
                    <div className="flex items-center gap-4">
                      <span className="w-6 text-center font-headline font-bold text-on-surface-variant">
                        {row}
                      </span>
                      <div className="flex gap-2">
                        {[1, 2].map((seatNum) => renderSeatButton(`${row}${seatNum}`))}
                        <div className="w-4" />
                        {[3, 4, 5, 6].map((seatNum) => renderSeatButton(`${row}${seatNum}`))}
                        <div className="w-4" />
                        {[7, 8].map((seatNum) => renderSeatButton(`${row}${seatNum}`))}
                      </div>
                      <span className="w-6 text-center font-headline font-bold text-on-surface-variant">
                        {row}
                      </span>
                    </div>
                    {row === 'B' ? <div className="h-4" /> : null}
                  </Fragment>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-t-lg rounded-b-sm bg-surface-container-high border border-outline-variant/30" />
                <span className="text-sm text-on-surface-variant">Còn trống</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-t-lg rounded-b-sm bg-primary shadow-md shadow-primary/30" />
                <span className="text-sm text-on-surface-variant">Đã chọn</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-t-lg rounded-b-sm bg-red-600 border border-red-400/60 opacity-95 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-white/90 rotate-45" />
                  </div>
                </div>
                <span className="text-sm text-on-surface-variant">Đã bán</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-4">
          <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-lg sticky top-24">
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Booking Summary</h2>
            
            <div className="flex gap-4 mb-6 pb-6 border-b border-outline-variant/20">
              <div className="w-16 rounded-lg overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=200" alt="Poster" className="w-full h-auto object-cover" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface mb-1">The Midnight Protocol</h3>
                <p className="text-sm text-on-surface-variant">Grand Lumière • IMAX 3D</p>
                <p className="text-sm font-medium text-on-surface mt-1">Thu, Oct 24 • 05:00 PM</p>
              </div>
            </div>
            
            <div className="mb-6 pb-6 border-b border-outline-variant/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-on-surface-variant">Selected Seats</span>
                <span className="font-headline font-bold text-on-surface">
                  {selectedSeatsSorted.length ? selectedSeatsSorted.join(', ') : '—'}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">2 × Adult (IMAX)</span>
                <span className="font-medium text-on-surface">$44.00</span>
              </div>
            </div>
            
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-sm text-on-surface-variant block mb-1">Total Amount</span>
                <span className="text-3xl font-headline font-extrabold text-primary">$44.00</span>
              </div>
            </div>
            
            <Link to="/checkout" className="w-full py-4 bg-primary text-on-primary rounded-xl font-headline font-bold hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2">
              Proceed to Payment
              <span className="material-symbols-outlined">payment</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
