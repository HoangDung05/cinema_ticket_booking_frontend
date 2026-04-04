import { movies } from '../../utils/data';

export default function Movies() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">All Movies</button>
          <button className="px-4 py-2 bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">Showing</button>
          <button className="px-4 py-2 bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">Upcoming</button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
          <span className="material-symbols-outlined text-sm">add</span>
          Add Movie
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
            <div className="relative h-64 overflow-hidden">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-md ${movie.status === 'Showing' ? 'bg-emerald-500/90 text-white' :
                  movie.status === 'Upcoming' ? 'bg-sky-500/90 text-white' :
                    'bg-gray-900/80 text-white'
                  }`}>
                  {movie.status}
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{movie.title}</h3>
                <div className="flex items-center gap-1 text-amber-500 text-sm font-bold bg-amber-50 px-2 py-0.5 rounded-md">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {movie.rating}
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4">{movie.genre}</p>

              <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                  {movie.release}
                </div>
                <button className="text-sky-600 hover:text-sky-700 font-medium">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
