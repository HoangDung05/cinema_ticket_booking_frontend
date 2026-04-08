import { useMemo, useState } from 'react';
import { users } from '../../utils/data';

type UserRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'Standard' | 'Gold' | 'Platinum';
  joined: string;
  avatar: string;
};

type UserForm = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'Standard' | 'Gold' | 'Platinum';
  joined: string;
  avatar: string;
};

const emptyForm: UserForm = {
  id: '',
  name: '',
  email: '',
  phone: '',
  status: 'Standard',
  joined: '',
  avatar: '',
};

export default function Users() {
  const [rows, setRows] = useState<UserRow[]>(users as UserRow[]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<UserForm>(emptyForm);

  const isEdit = useMemo(() => editingId !== null, [editingId]);

  const openCreate = () => {
    setEditingId(null);
    setForm({
      ...emptyForm,
      id: `#LUM-${Math.floor(1000 + Math.random() * 9000)}`,
      joined: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
    });
    setIsOpen(true);
  };

  const openEdit = (row: UserRow) => {
    setEditingId(row.id);
    setForm({ ...row });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const saveUser = () => {
    if (!form.name.trim() || !form.email.trim()) return;

    if (!isEdit) {
      setRows((prev) => [{ ...form }, ...prev]);
    } else {
      setRows((prev) => prev.map((r) => (r.id === editingId ? { ...form } : r)));
    }
    closeModal();
  };

  const deleteUser = (id: string) => {
    if (!window.confirm(`Xóa người dùng ${id}?`)) return;
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold font-headline">Quản lý người dùng</h2>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium">
          <span className="material-symbols-outlined text-sm">add</span>
          Thêm người dùng
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Người dùng</th>
                <th className="p-4 font-medium">Liên hệ</th>
                <th className="p-4 font-medium">Hạng</th>
                <th className="p-4 font-medium">Ngày tham gia</th>
                <th className="p-4 font-medium text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {rows.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <p className="font-semibold text-gray-900">{u.name}</p>
                    <p className="text-xs text-gray-500">{u.id}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-gray-900">{u.email}</p>
                    <p className="text-xs text-gray-500">{u.phone}</p>
                  </td>
                  <td className="p-4">{u.status}</td>
                  <td className="p-4 text-gray-600">{u.joined}</td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => openEdit(u)} className="px-3 py-1.5 text-xs rounded-md bg-amber-50 text-amber-700 hover:bg-amber-100">
                        Sửa
                      </button>
                      <button onClick={() => deleteUser(u.id)} className="px-3 py-1.5 text-xs rounded-md bg-red-50 text-red-700 hover:bg-red-100">
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {!rows.length && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-gray-500">
                    Chưa có người dùng.
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
            <h3 className="text-lg font-bold">{isEdit ? 'Sửa người dùng' : 'Thêm người dùng'}</h3>
            <div className="space-y-3">
              <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Họ tên" className="w-full border rounded-lg px-3 py-2" />
              <input value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="Email" className="w-full border rounded-lg px-3 py-2" />
              <input value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} placeholder="Số điện thoại" className="w-full border rounded-lg px-3 py-2" />
              <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as UserForm['status'] }))} className="w-full border rounded-lg px-3 py-2">
                <option value="Standard">Standard</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={closeModal} className="px-4 py-2 rounded-lg border">Hủy</button>
              <button onClick={saveUser} className="px-4 py-2 rounded-lg bg-sky-600 text-white">Lưu</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}