import { useMemo, useState } from 'react';
import { ticketRows } from '../../utils/data';

type TicketStatus = 'PENDING' | 'PAID' | 'CANCELLED';

type TicketRow = {
  booking_id: number;
  user_id: number;
  user_name: string;
  movie_id: number;
  movie_title: string;
  showtime_id: number;
  start_time: string;
  seats: string;
  total_price: number;
  discount_code: string;
  discount_amount: number;
  status: TicketStatus;
  created_at: string;
};

type TicketForm = TicketRow;

function formatDateTimeVN(value: string) {
  if (!value) return '';
  const normalized = value.includes(' ') ? value.replace(' ', 'T') : value;
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function mapBookingStatus(status: TicketStatus) {
  switch (status) {
    case 'PAID':
      return { label: 'Đã thanh toán', className: 'bg-emerald-100 text-emerald-700' };
    case 'CANCELLED':
      return { label: 'Đã hủy', className: 'bg-red-100 text-red-700' };
    default:
      return { label: 'Chờ thanh toán', className: 'bg-amber-100 text-amber-700' };
  }
}

export default function Tickets() {
  const [rows, setRows] = useState<TicketRow[]>(ticketRows as TicketRow[]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<TicketForm>({
    booking_id: 0,
    user_id: 0,
    user_name: '',
    movie_id: 0,
    movie_title: '',
    showtime_id: 0,
    start_time: '',
    seats: '',
    total_price: 0,
    discount_code: '',
    discount_amount: 0,
    status: 'PENDING',
    created_at: '',
  });

  const nextId = useMemo(
    () => (rows.length ? Math.max(...rows.map((r) => r.booking_id)) + 1 : 1),
    [rows]
  );

  const filteredRows = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (r) =>
        String(r.booking_id).includes(q) ||
        r.user_name.toLowerCase().includes(q) ||
        r.movie_title.toLowerCase().includes(q) ||
        r.seats.toLowerCase().includes(q) ||
        r.discount_code.toLowerCase().includes(q) ||
        r.status.toLowerCase().includes(q)
    );
  }, [rows, searchTerm]);

  const openCreate = () => {
    setEditingId(null);
    setForm({
      booking_id: nextId,
      user_id: 0,
      user_name: '',
      movie_id: 0,
      movie_title: '',
      showtime_id: 0,
      start_time: new Date().toISOString().slice(0, 16),
      seats: '',
      total_price: 0,
      discount_code: '',
      discount_amount: 0,
      status: 'PENDING',
      created_at: new Date().toISOString().slice(0, 16),
    });
    setIsOpen(true);
  };

  const openEdit = (row: TicketRow) => {
    setEditingId(row.booking_id);
    setForm({
      ...row,
      start_time: row.start_time.includes(' ')
        ? row.start_time.replace(' ', 'T').slice(0, 16)
        : row.start_time,
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditingId(null);
  };

  const saveTicket = () => {
    if (!form.user_name.trim() || !form.movie_title.trim()) return;

    if (editingId === null) {
      setRows((prev) => [{ ...form, booking_id: nextId }, ...prev]);
    } else {
      setRows((prev) => prev.map((r) => (r.booking_id === editingId ? { ...form } : r)));
    }
    closeModal();
  };

  const deleteTicket = (bookingId: number) => {
    if (!window.confirm(`Xóa booking #${bookingId}?`)) return;
    setRows((prev) => prev.filter((r) => r.booking_id !== bookingId));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold font-headline">Quản lý vé</h2>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium">
          <span className="material-symbols-outlined text-sm">add</span>
          Thêm booking
        </button>
      </div>
      <div className="relative max-w-md">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Tìm vé theo booking, người dùng, phim, ghế"
          className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-sky-200"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Booking ID</th>
                <th className="p-4 font-medium">Người dùng</th>
                <th className="p-4 font-medium">Phim</th>
                <th className="p-4 font-medium">Suất chiếu</th>
                <th className="p-4 font-medium">Ghế</th>
                <th className="p-4 font-medium">Mã giảm giá</th>
                <th className="p-4 font-medium">Số tiền giảm</th>
                <th className="p-4 font-medium">Tổng tiền</th>
                <th className="p-4 font-medium">Trạng thái</th>
                <th className="p-4 font-medium text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {filteredRows.map((row) => {
                const status = mapBookingStatus(row.status);
                return (
                  <tr key={row.booking_id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-mono text-gray-700">{row.booking_id}</td>
                    <td className="p-4 text-gray-900">{row.user_name}</td>
                    <td className="p-4 text-gray-900">{row.movie_title}</td>
                    <td className="p-4 text-gray-600">{formatDateTimeVN(row.start_time)}</td>
                    <td className="p-4 text-gray-900">{row.seats}</td>
                    <td className="p-4 text-gray-600">{row.discount_code || '-'}</td>
                    <td className="p-4 text-gray-900">
                      {row.discount_amount
                        ? `-${row.discount_amount.toLocaleString('vi-VN')}đ`
                        : '-'}
                    </td>
                    <td className="p-4 font-semibold text-sky-600">
                      {row.total_price.toLocaleString('vi-VN')}đ
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${status.className}`}>
                        {status.label}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => openEdit(row)} className="px-3 py-1.5 text-xs rounded-md bg-amber-50 text-amber-700 hover:bg-amber-100">
                          Sửa
                        </button>
                        <button onClick={() => deleteTicket(row.booking_id)} className="px-3 py-1.5 text-xs rounded-md bg-red-50 text-red-700 hover:bg-red-100">
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {!filteredRows.length && (
                <tr>
                  <td colSpan={10} className="p-6 text-center text-gray-500">
                    Chưa có booking.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/30 flex items-center justify-center px-4">
          <div className="w-full max-w-xl bg-white rounded-xl shadow-xl p-5 space-y-4">
            <h3 className="text-lg font-bold">{editingId === null ? 'Thêm booking' : 'Sửa booking'}</h3>
            <div className="grid grid-cols-2 gap-3">
              <input value={form.user_name} onChange={(e) => setForm((f) => ({ ...f, user_name: e.target.value }))} placeholder="Nhập tên người dùng" className="border rounded-lg px-3 py-2" />
              <input value={form.movie_title} onChange={(e) => setForm((f) => ({ ...f, movie_title: e.target.value }))} placeholder="Nhập tên phim" className="border rounded-lg px-3 py-2" />
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Ngày giờ chiếu</p>
                <input type="datetime-local" value={form.start_time} onChange={(e) => setForm((f) => ({ ...f, start_time: e.target.value }))} className="border rounded-lg px-3 py-2 w-full" />
              </div>
              <input value={form.seats} onChange={(e) => setForm((f) => ({ ...f, seats: e.target.value }))} placeholder="Nhập ghế (vd: A1, A2)" className="border rounded-lg px-3 py-2" />
              <input
                value={form.discount_code}
                onChange={(e) => setForm((f) => ({ ...f, discount_code: e.target.value }))}
                placeholder="Nhập mã giảm giá"
                className="border rounded-lg px-3 py-2"
              />
              <input
                type="number"
                value={form.discount_amount === 0 ? '' : form.discount_amount}
                onChange={(e) =>
                  setForm((f) => ({ ...f, discount_amount: Number(e.target.value || 0) }))
                }
                placeholder="Nhập số tiền giảm"
                className="border rounded-lg px-3 py-2"
              />
              <input type="number" value={form.total_price === 0 ? '' : form.total_price} onChange={(e) => setForm((f) => ({ ...f, total_price: Number(e.target.value || 0) }))} placeholder="Nhập tổng tiền" className="border rounded-lg px-3 py-2" />
              <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as TicketStatus }))} className="border rounded-lg px-3 py-2">
                <option value="PENDING">PENDING</option>
                <option value="PAID">PAID</option>
                <option value="CANCELLED">CANCELLED</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={closeModal} className="px-4 py-2 rounded-lg border">Hủy</button>
              <button onClick={saveTicket} className="px-4 py-2 rounded-lg bg-sky-600 text-white">Lưu</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}