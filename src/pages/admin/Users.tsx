import { useMemo, useState } from 'react';
import { users } from '../../utils/data';

type UserRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'CUSTOMER' | 'ADMIN';
  joined: string;
  avatar: string;
};

type UserForm = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'CUSTOMER' | 'ADMIN';
  joined: string;
  avatar: string;
};

const emptyForm: UserForm = {
  id: '',
  name: '',
  email: '',
  phone: '',
  role: 'CUSTOMER',
  joined: '',
  avatar: '',
};

function formatDateVN(value: string) {
  if (!value) return '';
  const normalized = value.includes('/') ? value.split('/').reverse().join('-') : value;
  const date = new Date(`${normalized}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('vi-VN');
}

export default function Users() {
  const [rows, setRows] = useState<UserRow[]>(users as UserRow[]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<UserForm>(emptyForm);

  const isEdit = useMemo(() => editingId !== null, [editingId]);

  const openCreate = () => {
    setEditingId(null);
    setForm({
      ...emptyForm,
      id: `#LUM-${Math.floor(1000 + Math.random() * 9000)}`,
      joined: new Date().toISOString().slice(0, 10),
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

  const filteredRows = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.phone.toLowerCase().includes(q) ||
        u.id.toLowerCase().includes(q) ||
        u.role.toLowerCase().includes(q)
    );
  }, [rows, searchTerm]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold font-headline">Quản lý người dùng</h2>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium">
          <span className="material-symbols-outlined text-sm">add</span>
          Thêm người dùng
        </button>
      </div>
      <div className="relative max-w-md">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Tìm người dùng theo tên, email, SĐT, quyền"
          className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-sky-200"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Người dùng</th>
                <th className="p-4 font-medium">Liên hệ</th>
                <th className="p-4 font-medium">Phân quyền</th>
                <th className="p-4 font-medium">Ngày tham gia</th>
                <th className="p-4 font-medium text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {filteredRows.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <p className="font-semibold text-gray-900">{u.name}</p>
                    <p className="text-xs text-gray-500">{u.id}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-gray-900">{u.email}</p>
                    <p className="text-xs text-gray-500">{u.phone}</p>
                  </td>
                  <td className="p-4">
                    {u.role === 'ADMIN' ? 'Quản trị viên' : 'Khách hàng'}
                  </td>
                  <td className="p-4 text-gray-600">{formatDateVN(u.joined)}</td>
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
              {!filteredRows.length && (
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
              <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Nhập họ tên" className="w-full border rounded-lg px-3 py-2" />
              <input value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="Nhập email" className="w-full border rounded-lg px-3 py-2" />
              <input value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} placeholder="Nhập số điện thoại" className="w-full border rounded-lg px-3 py-2" />
              <select value={form.role} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value as UserForm['role'] }))} className="w-full border rounded-lg px-3 py-2">
                <option value="CUSTOMER">Khách hàng</option>
                <option value="ADMIN">Quản trị viên</option>
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