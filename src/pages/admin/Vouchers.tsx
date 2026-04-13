import { useEffect, useMemo, useState } from 'react';
import { voucherService, VoucherDTO } from '../../services/voucherService';

type VoucherRow = {
  id: number;
  code: string;
  discountType: string; // PERCENT hoặc FIXED
  description: string;
  discountValue: number;
  startDate: string;
  endDate: string;
  maxDiscountAmount?: number;
  usedCount?: number;
  usageLimit?: number;
  status: string;
};

type VoucherForm = Omit<VoucherRow, 'id'> & { id?: number };

const emptyForm: VoucherForm = {
  code: '',
  discountType: 'PERCENT',
  description: '',
  discountValue: 0,
  startDate: '',
  endDate: '',
  maxDiscountAmount: 0,
  usedCount: 0,
  usageLimit: 0,
  status: 'ACTIVE',
};

function formatDateVN(value: string) {
  if (!value) return '';
  const normalized = value.includes('/') ? value.split('/').reverse().join('-') : value;
  const date = new Date(`${normalized}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('vi-VN');
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function Vouchers() {
  const [rows, setRows] = useState<VoucherRow[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<VoucherForm>(emptyForm);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const isEdit = useMemo(() => editingId !== null, [editingId]);

  // Load vouchers on mount
  useEffect(() => {
    fetchVouchers();
  }, []);

  const fetchVouchers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await voucherService.getAllVouchers();
      setRows(data as unknown as VoucherRow[]);
    } catch (err) {
      console.error('Error fetching vouchers:', err);
      setError('Lỗi khi tải danh sách mã giảm giá');
    } finally {
      setLoading(false);
    }
  };

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setIsOpen(true);
  };

  const openEdit = (row: VoucherRow) => {
    setEditingId(row.id);
    setForm({
      ...row,
      id: row.id,
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const saveVoucher = async () => {
    if (!form.code.trim() || !form.discountType.trim()) {
      setError('Vui lòng điền đầy đủ thông tin');
      return;
    }

    try {
      setIsSaving(true);
      setError(null);

      const voucherData: VoucherDTO = {
        id: form.id || 0,
        code: form.code,
        description: form.description,
        discountType: form.discountType,
        discountValue: form.discountValue,
        maxDiscountAmount: form.maxDiscountAmount || 0,
        startDate: form.startDate,
        endDate: form.endDate,
        usageLimit: form.usageLimit || 0,
        usedCount: form.usedCount || 0,
        status: form.status,
      };

      if (!isEdit) {
        // Create new voucher
        await voucherService.createVoucher(voucherData);
      } else {
        // Update existing voucher
        await voucherService.updateVoucher(form.id!, voucherData);
      }

      // Refresh the list
      await fetchVouchers();
      closeModal();
    } catch (err) {
      console.error('Error saving voucher:', err);
      setError('Lỗi khi lưu mã giảm giá');
    } finally {
      setIsSaving(false);
    }
  };

  const deleteVoucher = async (id: number, code: string) => {
    if (!window.confirm(`Bạn chắc chắn muốn xóa voucher ${code}?`)) return;

    try {
      setError(null);
      await voucherService.deleteVoucher(id);
      // Refresh the list
      await fetchVouchers();
    } catch (err) {
      console.error('Error deleting voucher:', err);
      setError('Lỗi khi xóa mã giảm giá');
    }
  };

  const filteredRows = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (row) =>
        row.code.toLowerCase().includes(q) ||
        row.discountType.toLowerCase().includes(q) ||
        row.description.toLowerCase().includes(q) ||
        row.status.toLowerCase().includes(q)
    );
  }, [rows, searchTerm]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-gray-500">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}
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
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-mono font-bold text-gray-900">{row.code}</td>
                  <td className="p-4 font-semibold text-sky-600">{row.discountType}</td>
                  <td className="p-4 text-gray-600">{row.description}</td>
                  <td className="p-4 text-gray-600">{formatDateVN(row.startDate)}</td>
                  <td className="p-4 text-gray-600">{formatDateVN(row.endDate)}</td>
                  <td className="p-4 text-gray-900">{row.discountValue.toLocaleString('vi-VN')}</td>
                  <td className="p-4 text-gray-900">{(row.maxDiscountAmount || 0).toLocaleString('vi-VN')}</td>
                  <td className="p-4 text-gray-900">
                    {row.usedCount || 0} <span className="text-gray-400">/ {row.usageLimit || 0}</span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        row.status === 'ACTIVE'
                          ? 'bg-emerald-100 text-emerald-700'
                          : row.status === 'INACTIVE'
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
                      <button onClick={() => deleteVoucher(row.id, row.code)} className="px-3 py-1.5 text-xs rounded-md bg-red-50 text-red-700 hover:bg-red-100">
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
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold">{isEdit ? 'Sửa mã giảm giá' : 'Thêm mã giảm giá'}</h3>
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                {error}
              </div>
            )}
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Mã voucher</label>
                <input
                  value={form.code}
                  onChange={(e) => setForm((f) => ({ ...f, code: e.target.value }))}
                  placeholder="Nhập mã giảm giá"
                  disabled={isEdit}
                  className="w-full border rounded-lg px-3 py-2 disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Loại giảm</label>
                <select
                  value={form.discountType}
                  onChange={(e) => setForm((f) => ({ ...f, discountType: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="PERCENT">Phần trăm (%)</option>
                  <option value="FIXED">Cố định (VNĐ)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Mô tả</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  placeholder="Nhập mô tả mã giảm giá"
                  className="w-full border rounded-lg px-3 py-2 min-h-[80px]"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Giá trị giảm</label>
                <input
                  type="number"
                  value={form.discountValue === 0 ? '' : form.discountValue}
                  onChange={(e) => setForm((f) => ({ ...f, discountValue: Number(e.target.value || 0) }))}
                  placeholder="Nhập giá trị giảm"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Tiền giảm tối đa (VNĐ)</label>
                <input
                  type="number"
                  value={form.maxDiscountAmount === 0 ? '' : form.maxDiscountAmount}
                  onChange={(e) => setForm((f) => ({ ...f, maxDiscountAmount: Number(e.target.value || 0) }))}
                  placeholder="Nhập tiền giảm tối đa"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Ngày bắt đầu</label>
                  <input
                    type="date"
                    value={form.startDate}
                    onChange={(e) => setForm((f) => ({ ...f, startDate: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Ngày kết thúc</label>
                  <input
                    type="date"
                    value={form.endDate}
                    onChange={(e) => setForm((f) => ({ ...f, endDate: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Giới hạn lượt sử dụng</label>
                <input
                  type="number"
                  value={form.usageLimit === 0 ? '' : form.usageLimit}
                  onChange={(e) => setForm((f) => ({ ...f, usageLimit: Number(e.target.value || 0) }))}
                  placeholder="Nhập giới hạn lượt dùng"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Trạng thái</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="ACTIVE">Hoạt động</option>
                  <option value="INACTIVE">Không hoạt động</option>
                  <option value="EXPIRED">Hết hạn</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                disabled={isSaving}
                className="px-4 py-2 rounded-lg border disabled:opacity-50"
              >
                Hủy
              </button>
              <button
                onClick={saveVoucher}
                disabled={isSaving}
                className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50"
              >
                {isSaving ? 'Đang lưu...' : 'Lưu'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}