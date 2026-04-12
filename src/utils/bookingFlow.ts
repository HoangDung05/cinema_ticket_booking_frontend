/** Dữ liệu chuyền qua các bước: lịch chiếu → ghế → thanh toán */
export type BookingFlowState = {
  movie: { id: number; title: string; posterUrl?: string; duration?: number };
  dateDisplay: string;
  timeLabel: string;
  showtimeId: number;
  cinemaName: string;
  startTime?: string;
  selectedSeats?: string[];
};

/** Đơn giá mỗi ghế (VNĐ) — có thể thay bằng giá từ API sau */
export const TICKET_PRICE_VND = 90_000;

export function formatVnd(amount: number): string {
  return `${amount.toLocaleString('vi-VN')} ₫`;
}
