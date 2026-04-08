import { useMemo, useState } from 'react';
import { roomRowsSeed, type RoomRow } from '../../utils/data';

type RoomForm = {
  name: string;
  cinema_id: number;
  cinema_name: string;
};

const emptyForm: RoomForm = {
  name: '',
  cinema_id: 1,
  cinema_name: '',
};

export default function Rooms() {
  const [rows, setRows] = useState<RoomRow[]>(roomRowsSeed);
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<RoomForm>(emptyForm);

  const nextId = useMemo(
    () => (rows.length ? Math.max(...rows.map((r) => r.id)) + 1 : 1),
    [rows]
  );

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setIsOpen(true);
  };

  const openEdit = (row: RoomRow) => {
    setEditingId(row.id);
    setForm({
      name: row.name,
      cinema_id: row.cinema_id,
      cinema_name: row.cinema_name,
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const saveRoom = () => {
    if (!form.name.trim() || !form.cinema_name.trim()) return;

    if (editingId === null) {
      const newRow: RoomRow = { id: nextId, ...form };
      setRows((prev) => [newRow, ...prev]);
    } else {
      setRows((prev) =>
        prev.map((r) => (r.id === editingId ? { ...r, ...form } : r))
      );
    }
    closeModal();
  };

  const deleteRoom = (id: number) => {
    const ok = window.confirm('Bạn chắc chắn muốn xóa phòng này?');
    if (!ok) return;
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold font-headline">Quản lý phòng</h2>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Thêm phòng
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">Tên phòng</th>
                <th className="p-4 font-medium">Cinema ID</th>
                <th className="p-4 font-medium">Rạp</th>
                <th className="p-4 font-medium text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-mono text-gray-700">{row.id}</td>
                  <td className="p-4 font-semibold text-gray-900">{row.name}</td>
                  <td className="p-4 text-gray-600">{row.cinema_id}</td>
                  <td className="p-4 text-gray-900">{row.cinema_name}</td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => openEdit(row)}
                        className="px-3 py-1.5 text-xs rounded-md bg-amber-50 text-amber-700 hover:bg-amber-100"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => deleteRoom(row.id)}
                        className="px-3 py-1.5 text-xs rounded-md bg-red-50 text-red-700 hover:bg-red-100"
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {!rows.length && (
                <tr>
                  <td className="p-6 text-center text-gray-500" colSpan={5}>
                    Chưa có dữ liệu phòng.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/30 flex items-center justify-center px-4">
          <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-5 space-y-4">
            <h3 className="text-lg font-bold">
              {editingId === null ? 'Thêm phòng' : 'Sửa phòng'}
            </h3>

            <div className="space-y-3">
              <input
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Tên phòng"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
              />
              <input
                type="number"
                value={form.cinema_id}
                onChange={(e) =>
                  setForm((f) => ({ ...f, cinema_id: Number(e.target.value || 0) }))
                }
                placeholder="Cinema ID"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
              />
              <input
                value={form.cinema_name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, cinema_name: e.target.value }))
                }
                placeholder="Tên rạp"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700"
              >
                Hủy
              </button>
              <button
                onClick={saveRoom}
                className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}