import { cinemas } from '../../utils/data';

export default function Cinemas() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold font-headline">Manage Cinemas</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
          <span className="material-symbols-outlined text-sm">add</span>
          Add Cinema
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cinemas.map((cinema) => (
          <div key={cinema.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden shrink-0">
              <img src={cinema.image} alt={cinema.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{cinema.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      {cinema.location}
                    </p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${cinema.status === 'Operational' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                    {cinema.status}
                  </span>
                </div>
              </div>

              <div className="flex gap-6 mt-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Halls</p>
                  <p className="font-bold text-gray-900">{cinema.halls}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Capacity</p>
                  <p className="font-bold text-gray-900">{cinema.capacity}</p>
                </div>
                <div className="ml-auto flex items-end">
                  <button className="text-sky-600 hover:text-sky-700 text-sm font-medium">Manage Halls</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
