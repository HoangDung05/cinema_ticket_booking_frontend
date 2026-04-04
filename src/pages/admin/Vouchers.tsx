import { vouchers } from '../../utils/data';

export default function Vouchers() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold font-headline">Vouchers & Promotions</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
          <span className="material-symbols-outlined text-sm">add</span>
          Create Voucher
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Code</th>
                <th className="p-4 font-medium">Discount</th>
                <th className="p-4 font-medium">Expiry Date</th>
                <th className="p-4 font-medium">Usage</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {vouchers.map((voucher, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <span className="font-mono font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded">{voucher.code}</span>
                  </td>
                  <td className="p-4 font-bold text-sky-600">{voucher.discount}</td>
                  <td className="p-4 text-gray-500">{voucher.expiry}</td>
                  <td className="p-4 text-gray-900">
                    {voucher.usage} <span className="text-gray-400">/ {voucher.limit}</span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${voucher.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                      voucher.status === 'Inactive' ? 'bg-gray-100 text-gray-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                      {voucher.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-gray-400 hover:text-sky-600 transition-colors">
                      <span className="material-symbols-outlined text-[20px]">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
