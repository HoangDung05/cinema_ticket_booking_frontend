import { useMemo, useState } from 'react';
import { vouchers } from '../../utils/data';

type VoucherRow = {
  code: string;
  type: string; // LOẠI
  description: string;
  startDate: string;
  expiry: string;
  value: number;
  maxDiscount: number;
  usage: number;
  limit: number | string;
  status: 'Active' | 'Inactive' | 'Expired';
};

type VoucherForm = VoucherRow;

const emptyForm: VoucherForm = {
  code: '',
  type: '',
  description: '',
  startDate: '',
  expiry: '',
  value: 0,
  maxDiscount: 0,
  usage: 0,
  limit: '',
  status: 'Active',
};

function formatDateVN(value: string) {
  if (!value) return '';
  const normalized = value.includes('/') ? value.split('/').reverse().join('-') : value;
  const date = new Date(`${normalized}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('vi-VN');
}

export default function Vouchers() {
  const [rows, setRows] = useState<VoucherRow[]>(vouchers as VoucherRow[]);
  const [searchTerm, setSearchTerm] = useState('');
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
    if (!form.code.trim() || !form.type.trim()) return;

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

  const filteredRows = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (row) =>
        row.code.toLowerCase().includes(q) ||
        row.type.toLowerCase().includes(q) ||
        row.description.toLowerCase().includes(q) ||
        row.status.toLowerCase().includes(q)
    );
  }, [rows, searchTerm]);

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
      <div className="relative max-w-md">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Tìm mã, loại, mô tả, trạng thái"
          className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-sky-200"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Mã</th>
                <th className="p-4 font-medium">LOẠI</th>
                <th className="p-4 font-medium">Mô tả</th>
                <th className="p-4 font-medium">Ngày bắt đầu</th>
                <th className="p-4 font-medium">Ngày hết hạn</th>
                <th className="p-4 font-medium">Giá trị</th>
                <th className="p-4 font-medium">Tiền giảm tối đa</th>
                <th className="p-4 font-medium">Lượt sử dụng</th>
                <th className="p-4 font-medium">Trạng thái</th>
                <th className="p-4 font-medium text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {filteredRows.map((row) => (
                <tr key={row.code} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-mono font-bold text-gray-900">{row.code}</td>
                  <td className="p-4 font-semibold text-sky-600">{row.type}</td>
                  <td className="p-4 text-gray-600">{row.description}</td>
                  <td className="p-4 text-gray-600">{formatDateVN(row.startDate)}</td>
                  <td className="p-4 text-gray-600">{formatDateVN(row.expiry)}</td>
                  <td className="p-4 text-gray-900">{row.value.toLocaleString('vi-VN')}</td>
                  <td className="p-4 text-gray-900">{row.maxDiscount.toLocaleString('vi-VN')}</td>
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
              {!filteredRows.length && (
                <tr>
                  <td colSpan={10} className="p-6 text-center text-gray-500">
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
              <input
                value={form.code}
                onChange={(e) => setForm((f) => ({ ...f, code: e.target.value }))}
                placeholder="Nhập mã giảm giá"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                value={form.type}
                onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                placeholder="Nhập loại (%, VNĐ...)"
                className="w-full border rounded-lg px-3 py-2"
              />
              <textarea
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Nhập mô tả mã giảm giá"
                className="w-full border rounded-lg px-3 py-2 min-h-[80px]"
              />
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Ngày bắt đầu</p>
                  <input
                    type="date"
                    value={form.startDate}
                    onChange={(e) => setForm((f) => ({ ...f, startDate: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Ngày kết thúc</p>
                  <input
                    type="date"
                    value={form.expiry}
                    onChange={(e) => setForm((f) => ({ ...f, expiry: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
              </div>
              <input
                type="number"
                value={form.value === 0 ? '' : form.value}
                onChange={(e) => setForm((f) => ({ ...f, value: Number(e.target.value || 0) }))}
                placeholder="Nhập giá trị giảm"
                className="w-full border rounded-lg px-3 py-2"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  value={form.maxDiscount === 0 ? '' : form.maxDiscount}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, maxDiscount: Number(e.target.value || 0) }))
                  }
                  placeholder="Nhập tiền giảm tối đa"
                  className="w-full border rounded-lg px-3 py-2"
                />
                <input
                  type="number"
                  value={form.usage === 0 ? '' : form.usage}
                  onChange={(e) => setForm((f) => ({ ...f, usage: Number(e.target.value || 0) }))}
                  placeholder="Nhập lượt đã dùng"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <input
                value={String(form.limit)}
                onChange={(e) => setForm((f) => ({ ...f, limit: e.target.value }))}
                placeholder="Nhập giới hạn lượt dùng"
                className="w-full border rounded-lg px-3 py-2"
              />
              <select
                value={form.status}
                onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as VoucherForm['status'] }))}
                className="w-full border rounded-lg px-3 py-2"
              >
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