import apiClient from './apiClient';

export interface VoucherDTO {
  id: number;
  code: string;
  description: string;
  discountType: string;
  discountValue: number;
  minOrderValue?: number;
  maxDiscountAmount?: number;
  endDate: string;
}

export const voucherService = {
  // Lấy các mã voucher đang active
  getActiveVouchers: async (): Promise<VoucherDTO[]> => {
    const response = await apiClient.get<VoucherDTO[]>('/vouchers');
    return response.data;
  },
};
