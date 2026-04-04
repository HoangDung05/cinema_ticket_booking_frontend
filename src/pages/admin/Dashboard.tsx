import { bookings, movies } from '../../utils/data';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '$124,500', trend: '+12%', icon: 'payments', color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Active Bookings', value: '1,432', trend: '+5%', icon: 'confirmation_number', color: 'text-sky-500', bg: 'bg-sky-50' },
          { label: 'New Users', value: '892', trend: '+18%', icon: 'group_add', color: 'text-indigo-500', bg: 'bg-indigo-50' },
          { label: 'Occupancy Rate', value: '76%', trend: '-2%', icon: 'event_seat', color: 'text-amber-500', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className={`text-xs font-medium mt-2 ${stat.trend.startsWith('+') ? 'text-emerald-600' : 'text-red-500'}`}>
                {stat.trend} from last month
              </p>
            </div>
            <div className={`p-3 rounded-xl ${stat.bg}`}>
              <span className={`material-symbols-outlined ${stat.color}`}>{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-headline font-bold text-lg">Recent Bookings</h3>
            <button className="text-sm text-sky-600 font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-medium">Movie</th>
                  <th className="p-4 font-medium">User</th>
                  <th className="p-4 font-medium">Date & Time</th>
                  <th className="p-4 font-medium">Amount</th>
                  <th className="p-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {bookings.map((booking, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium text-gray-900">{booking.movie}</td>
                    <td className="p-4 text-gray-600">{booking.user}</td>
                    <td className="p-4 text-gray-500">{booking.datetime}</td>
                    <td className="p-4 font-medium text-gray-900">{booking.amount}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${booking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' :
                        booking.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Movies */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100">
            <h3 className="font-headline font-bold text-lg">Top Performing Movies</h3>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-6">
            {movies.slice(0, 3).map((movie) => (
              <div key={movie.id} className="flex gap-4 items-center">
                <img src={movie.image} alt={movie.title} className="w-16 h-20 object-cover rounded-lg shadow-sm" />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{movie.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{movie.genre}</p>
                  <div className="flex items-center gap-1 mt-2 text-amber-500 text-sm font-medium">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    {movie.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
