import apiClient from './apiClient';

export interface VoucherDTO {
  id: number;
  code: string;
  description: string;
  discountType: string;
  discountValue: number;
  minOrderValue?: number;
  maxDiscountAmount?: number;
  startDate: string;
  endDate: string;
  usageLimit?: number;
  usedCount?: number;
  status: string;
}

export const voucherService = {
  // Lấy tất cả vouchers (admin)
  getAllVouchers: async (): Promise<VoucherDTO[]> => {
    const response = await apiClient.get<VoucherDTO[]>('/admin/vouchers');
    return response.data;
  },

  // Lấy các mã voucher đang active (customer)
  getActiveVouchers: async (): Promise<VoucherDTO[]> => {
    const response = await apiClient.get<VoucherDTO[]>('/vouchers');
    return response.data;
  },

  // Tạo voucher mới
  createVoucher: async (voucher: VoucherDTO): Promise<VoucherDTO> => {
    const response = await apiClient.post<VoucherDTO>('/admin/vouchers', voucher);
    return response.data;
  },

  // Cập nhật voucher
  updateVoucher: async (id: number, voucher: VoucherDTO): Promise<VoucherDTO> => {
    const response = await apiClient.put<VoucherDTO>(`/admin/vouchers/${id}`, voucher);
    return response.data;
  },

  // Xóa voucher
  deleteVoucher: async (id: number): Promise<void> => {
    await apiClient.delete(`/admin/vouchers/${id}`);
  },
};
