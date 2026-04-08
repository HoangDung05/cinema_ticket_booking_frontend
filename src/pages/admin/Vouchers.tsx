import { useMemo, useState } from 'react';
import { vouchers } from '../../utils/data';

type VoucherRow = {
  code: string;
  discount: string;
  expiry: string;
  usage: number;
  limit: number | string;
  status: 'Active' | 'Inactive' | 'Expired';
};

type VoucherForm = {
  code: string;
  discount: string;
  expiry: string;
  usage: number;
  limit: number | string;
  status: 'Active' | 'Inactive' | 'Expired';
};

const emptyForm: VoucherForm = {
  code: '',
  discount: '',
  expiry: '',
  usage: 0,
  limit: 0,
  status: 'Active',
};

export default function Vouchers() {
  const [rows, setRows] = useState<VoucherRow[]>(vouchers as VoucherRow[]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingCode, setEditingCode] = useState<string | null>(null);
  const [form, setForm] = useState<VoucherForm>(emptyForm);

  const isEdit = useMemo(() => editingCode !== null, [editingCode]);

  const openCreate = () => {
    setEditingCode(null);
    setForm(emptyForm);
    setIsOpen(true);
  };

  const openEdit = (row: VoucherRow) => {
    setEditingCode(row.code);
    setForm({ ...row });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditingCode(null);
    setForm(emptyForm);
  };

  const saveVoucher = () => {
    if (!form.code.trim() || !form.discount.trim()) return;

    if (!isEdit) {
      setRows((prev) => [{ ...form }, ...prev]);
    } else {
      setRows((prev) => prev.map((r) => (r.code === editingCode ? { ...form } : r)));
    }
    closeModal();
  };

  const deleteVoucher = (code: string) => {
    if (!window.confirm(`Xóa voucher ${code}?`)) return;
    setRows((prev) => prev.filter((r) => r.code !== code));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold font-headline">Quản lý mã giảm giá</h2>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Thêm mã giảm giá
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Mã</th>
                <th className="p-4 font-medium">Giảm giá</th>
                <th className="p-4 font-medium">Ngày hết hạn</th>
                <th className="p-4 font-medium">Lượt sử dụng</th>
                <th className="p-4 font-medium">Trạng thái</th>
                <th className="p-4 font-medium text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {rows.map((row) => (
                <tr key={row.code} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-mono font-bold text-gray-900">{row.code}</td>
                  <td className="p-4 font-semibold text-sky-600">{row.discount}</td>
                  <td className="p-4 text-gray-600">{row.expiry}</td>
                  <td className="p-4 text-gray-900">
                    {row.usage} <span className="text-gray-400">/ {row.limit}</span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        row.status === 'Active'
                          ? 'bg-emerald-100 text-emerald-700'
                          : row.status === 'Inactive'
                          ? 'bg-gray-100 text-gray-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => openEdit(row)} className="px-3 py-1.5 text-xs rounded-md bg-amber-50 text-amber-700 hover:bg-amber-100">
                        Sửa
                      </button>
                      <button onClick={() => deleteVoucher(row.code)} className="px-3 py-1.5 text-xs rounded-md bg-red-50 text-red-700 hover:bg-red-100">
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {!rows.length && (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-gray-500">
                    Chưa có voucher.
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
            <h3 className="text-lg font-bold">{isEdit ? 'Sửa mã giảm giá' : 'Thêm mã giảm giá'}</h3>
            <div className="space-y-3">
              <input value={form.code} onChange={(e) => setForm((f) => ({ ...f, code: e.target.value }))} placeholder="Mã" className="w-full border rounded-lg px-3 py-2" />
              <input value={form.discount} onChange={(e) => setForm((f) => ({ ...f, discount: e.target.value }))} placeholder="Giảm giá (vd: 20% Off)" className="w-full border rounded-lg px-3 py-2" />
              <input value={form.expiry} onChange={(e) => setForm((f) => ({ ...f, expiry: e.target.value }))} placeholder="Ngày hết hạn" className="w-full border rounded-lg px-3 py-2" />
              <div className="grid grid-cols-2 gap-2">
                <input type="number" value={form.usage} onChange={(e) => setForm((f) => ({ ...f, usage: Number(e.target.value || 0) }))} placeholder="Đã dùng" className="w-full border rounded-lg px-3 py-2" />
                <input value={String(form.limit)} onChange={(e) => setForm((f) => ({ ...f, limit: e.target.value }))} placeholder="Giới hạn" className="w-full border rounded-lg px-3 py-2" />
              </div>
              <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as VoucherForm['status'] }))} className="w-full border rounded-lg px-3 py-2">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Expired">Expired</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={closeModal} className="px-4 py-2 rounded-lg border">Hủy</button>
              <button onClick={saveVoucher} className="px-4 py-2 rounded-lg bg-sky-600 text-white">Lưu</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}