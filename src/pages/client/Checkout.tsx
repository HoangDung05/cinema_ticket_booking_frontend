import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookingFlowState, TICKET_PRICE_VND, formatVnd } from '../../utils/bookingFlow';

type PaymentMethod = 'momo' | 'card';

const POSTER_FALLBACK =
  'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=200';

export default function Checkout() {
  const location = useLocation();
  const booking = (location.state as { booking?: BookingFlowState } | null)?.booking;

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('momo');
  const [promoCode, setPromoCode] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const seats = booking?.selectedSeats ?? [];
  const seatLabel = useMemo(() => (seats.length ? seats.join(', ') : '—'), [seats]);

  const subtotalVnd = useMemo(() => seats.length * TICKET_PRICE_VND, [seats.length]);

  const bookingFeeVnd = 0;

  const totalVnd = subtotalVnd + bookingFeeVnd;

  if (!booking?.movie || !booking.selectedSeats?.length) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-headline font-bold text-on-surface mb-3">Chưa có thông tin đặt vé</h1>
        <p className="text-on-surface-variant mb-6">Vui lòng chọn suất chiếu và ít nhất một ghế trước khi thanh toán.</p>
        <Link to="/" className="text-primary font-headline font-bold hover:underline">
          Về trang chủ
        </Link>
      </div>
    );
  }

  const m = booking.movie;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Stepper — đồng bộ với chọn ghế */}
      <div className="flex items-center justify-center mb-16">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline font-bold shadow-md">
              <span className="material-symbols-outlined text-xl">check</span>
            </div>
            <span className="text-sm font-headline font-bold text-primary">Lịch chiếu</span>
          </div>
          <div className="w-16 h-1 bg-primary rounded-full" />
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline font-bold shadow-md">
              <span className="material-symbols-outlined text-xl">check</span>
            </div>
            <span className="text-sm font-headline font-bold text-primary">Chọn ghế</span>
          </div>
          <div className="w-16 h-1 bg-primary rounded-full overflow-hidden">
            <div className="w-full h-full bg-primary" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline font-bold shadow-md">
              3
            </div>
            <span className="text-sm font-headline font-bold text-primary">Thanh toán</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Tóm tắt — cùng cấu trúc trang chọn suất + ghế */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20 shadow-lg sticky top-24">
            <h2 className="text-xl font-headline font-bold text-on-surface mb-6">Tóm tắt đặt vé</h2>

            <div className="flex gap-4 mb-6 pb-6 border-b border-outline-variant/20">
              <div className="w-20 rounded-lg overflow-hidden shrink-0 aspect-[2/3] bg-surface-container-high">
                <img
                  src={m.posterUrl || POSTER_FALLBACK}
                  alt={`Áp phích ${m.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-headline font-bold text-on-surface mb-1 line-clamp-2">{m.title}</h3>
                {m.duration != null ? (
                  <p className="text-sm text-on-surface-variant">{m.duration} phút</p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">calendar_today</span>
                <div>
                  <p className="text-sm text-on-surface-variant">Ngày</p>
                  <p className="font-headline font-bold text-on-surface">{booking.dateDisplay}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">schedule</span>
                <div>
                  <p className="text-sm text-on-surface-variant">Giờ chiếu</p>
                  <p className="font-headline font-bold text-on-surface">{booking.timeLabel}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
                <div>
                  <p className="text-sm text-on-surface-variant">Rạp</p>
                  <p className="font-headline font-bold text-on-surface">{booking.cinemaName}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">event_seat</span>
                <div>
                  <p className="text-sm text-on-surface-variant">Ghế</p>
                  <p className="font-headline font-bold text-on-surface">{seatLabel}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm border-t border-outline-variant/20 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant">Đơn giá</span>
                <span className="font-headline font-semibold text-on-surface">{formatVnd(TICKET_PRICE_VND)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant">Số vé ({seats.length})</span>
                <span className="font-headline font-semibold text-on-surface">{formatVnd(subtotalVnd)}</span>
              </div>
              {bookingFeeVnd > 0 ? (
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Phí đặt vé</span>
                  <span className="font-headline font-semibold text-on-surface">{formatVnd(bookingFeeVnd)}</span>
                </div>
              ) : null}
              <div className="flex justify-between items-end pt-3 border-t border-outline-variant/20">
                <span className="text-on-surface-variant font-headline font-semibold">Tạm tính</span>
                <span className="text-2xl font-headline font-extrabold text-primary">{formatVnd(totalVnd)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/20 shadow-sm">
            <div className="space-y-6">
              <div className="rounded-2xl p-5 border border-outline-variant/20 bg-surface-container-low">
                <h3 className="text-lg font-headline font-bold text-on-surface mb-4">Mã giảm giá / Voucher</h3>

                <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    type="text"
                    placeholder="Nhập mã giảm giá của bạn"
                    className="flex-1 px-4 py-3 bg-surface-container-lowest border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-surface-container-lowest border border-primary/30 text-primary font-headline font-bold rounded-xl hover:bg-primary/10 transition-colors"
                  >
                    Áp dụng
                  </button>
                </form>
              </div>

              <div className="pt-2">
                <h3 className="text-xl font-headline font-bold text-on-surface mb-5">Chọn phương thức thanh toán</h3>

                <div className="flex flex-col gap-4">
                  <label
                    className={
                      paymentMethod === 'momo'
                        ? 'relative flex items-center gap-4 p-5 border-2 border-primary bg-primary/5 rounded-2xl cursor-pointer transition-colors'
                        : 'relative flex items-center gap-4 p-5 border-2 border-outline-variant/30 hover:border-outline-variant rounded-2xl cursor-pointer transition-colors bg-surface-container-lowest'
                    }
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="absolute opacity-0"
                      checked={paymentMethod === 'momo'}
                      onChange={() => setPaymentMethod('momo')}
                    />

                    {paymentMethod === 'momo' ? (
                      <div className="absolute left-4 top-4 w-5 h-5 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                    ) : (
                      <div className="absolute left-4 top-4 w-5 h-5 rounded-full border-2 border-outline-variant/50 bg-surface-container-lowest" />
                    )}

                    <div className="ml-6 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#D7000F] flex items-center justify-center shadow-sm">
                        <span className="text-white font-headline font-extrabold text-[11px] leading-none tracking-wide">
                          momo
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="font-headline font-bold text-on-surface">Ví MOMO</p>
                      <p className="text-sm text-on-surface-variant">Thanh toán nhanh và an toàn</p>
                    </div>
                  </label>

                  <label
                    className={
                      paymentMethod === 'card'
                        ? 'relative flex items-center gap-4 p-5 border-2 border-primary bg-primary/5 rounded-2xl cursor-pointer transition-colors'
                        : 'relative flex items-center gap-4 p-5 border-2 border-outline-variant/30 hover:border-outline-variant rounded-2xl cursor-pointer transition-colors bg-surface-container-lowest'
                    }
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="absolute opacity-0"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />

                    {paymentMethod === 'card' ? (
                      <div className="absolute left-4 top-4 w-5 h-5 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                    ) : (
                      <div className="absolute left-4 top-4 w-5 h-5 rounded-full border-2 border-outline-variant/50 bg-surface-container-lowest" />
                    )}

                    <div className="ml-6 w-12 h-12 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant text-3xl">credit_card</span>
                    </div>

                    <div>
                      <p className="font-headline font-bold text-on-surface">Thẻ tín dụng / ghi nợ</p>
                      <p className="text-sm text-on-surface-variant">Visa, Mastercard, AMEX</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <span className="text-sm text-on-surface-variant block mb-1">Tổng tiền thanh toán</span>
                    <span className="text-3xl font-headline font-extrabold text-primary">{formatVnd(totalVnd)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-on-surface-variant font-medium mb-5">
                  <span className="material-symbols-outlined text-sm text-primary">local_activity</span>
                  <span>Voucher: chưa áp dụng (nhập mã và bấm Áp dụng)</span>
                </div>

                <Link
                  to="/tickets"
                  className="w-full py-4 bg-primary-gradient text-on-primary rounded-xl font-headline font-bold hover:opacity-90 transition-opacity shadow-md flex items-center justify-center gap-2"
                >
                  Thanh toán ngay
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>

                <p className="text-xs text-center text-on-surface-variant mt-4">
                  Bằng việc bấm &ldquo;Thanh toán ngay&rdquo;, bạn đồng ý với Điều khoản dịch vụ và Chính sách bảo mật. Tất cả giao dịch đều được mã hóa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
