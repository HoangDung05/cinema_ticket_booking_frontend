import { useMemo, useState } from 'react';
import { movies as movieSeed } from '../../utils/data';

type MovieStatus = 'Showing' | 'Upcoming' | 'Archived';
type FilterStatus = 'ALL' | 'SHOWING' | 'UPCOMING';

type MovieRow = {
  id: number;
  title: string;
  director: string;
  genre: string;
  rating: number;
  release: string;
  status: MovieStatus;
  image: string;
};

type MovieForm = Omit<MovieRow, 'id'>;

const emptyForm: MovieForm = {
  title: '',
  director: '',
  genre: '',
  rating: 0,
  release: '',
  status: 'Upcoming',
  image: '',
};

export default function Movies() {
  const [rows, setRows] = useState<MovieRow[]>(movieSeed as MovieRow[]);
  const [filter, setFilter] = useState<FilterStatus>('ALL');
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<MovieForm>(emptyForm);
  const [searchTerm, setSearchTerm] = useState('');

  const nextId = useMemo(
    () => (rows.length ? Math.max(...rows.map((r) => r.id)) + 1 : 1),
    [rows]
  );

  const filteredRows = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if(!q) return rows;
    return rows.filter((m) =>
      m.title.toLowerCase().includes(q) ||
      m.director.toLowerCase().includes(q) ||
      m.genre.toLowerCase().includes(q)
    );
  }, [rows, searchTerm]);
  
  const filteredMovies = useMemo(() => {
    if (filter === 'ALL') return rows;
    if (filter === 'SHOWING') return rows.filter((m) => m.status === 'Showing');
    return rows.filter((m) => m.status === 'Upcoming');
  }, [filter, rows]);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setIsOpen(true);
  };

  const openEdit = (movie: MovieRow) => {
    setEditingId(movie.id);
    setForm({
      title: movie.title,
      director: movie.director,
      genre: movie.genre,
      rating: movie.rating,
      release: movie.release,
      status: movie.status,
      image: movie.image,
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const saveMovie = () => {
    if (!form.title.trim() || !form.genre.trim()) return;

    if (editingId === null) {
      setRows((prev) => [{ id: nextId, ...form }, ...prev]);
    } else {
      setRows((prev) =>
        prev.map((m) => (m.id === editingId ? { ...m, ...form } : m))
      );
    }
    closeModal();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'ALL'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Tất cả phim
          </button>
          <button
            onClick={() => setFilter('SHOWING')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'SHOWING'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Đang chiếu
          </button>
          <button
            onClick={() => setFilter('UPCOMING')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'UPCOMING'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Sắp chiếu
          </button>
        </div>

        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Thêm phim
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
                    movie.status === 'Showing'
                      ? 'bg-emerald-500/90 text-white'
                      : movie.status === 'Upcoming'
                      ? 'bg-sky-500/90 text-white'
                      : 'bg-gray-900/80 text-white'
                  }`}
                >
                  {movie.status}
                </span>
              </div>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{movie.title}</h3>
                <div className="flex items-center gap-1 text-amber-500 text-sm font-bold bg-amber-50 px-2 py-0.5 rounded-md">
                  <span
                    className="material-symbols-outlined text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  {movie.rating}
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-4">{movie.genre}</p>
              <p className="text-xs text-gray-400 mb-3">Đạo diễn: {movie.director}</p>

              <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                  {movie.release}
                </div>
                <button
                  onClick={() => openEdit(movie)}
                  className="text-sky-600 hover:text-sky-700 font-medium"
                >
                  Sửa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <div className="text-center py-10 text-gray-500">Không có phim phù hợp bộ lọc.</div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/30 flex items-center justify-center px-4">
          <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-5 space-y-4">
            <h3 className="text-lg font-bold">
              {editingId === null ? 'Thêm phim' : 'Sửa phim'}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <input
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="Tên phim"
                className="col-span-2 border rounded-lg px-3 py-2"
              />
              <input
                value={form.director}
                onChange={(e) => setForm((f) => ({ ...f, director: e.target.value }))}
                placeholder="Đạo diễn"
                className="col-span-2 border rounded-lg px-3 py-2"
              />
              <input
                value={form.genre}
                onChange={(e) => setForm((f) => ({ ...f, genre: e.target.value }))}
                placeholder="Thể loại"
                className="border rounded-lg px-3 py-2"
              />
              <input
                type="number"
                step="0.1"
                min="0"
                max="10"
                value={form.rating}
                onChange={(e) => setForm((f) => ({ ...f, rating: Number(e.target.value || 0) }))}
                placeholder="Rating"
                className="border rounded-lg px-3 py-2"
              />
              <input
                value={form.release}
                onChange={(e) => setForm((f) => ({ ...f, release: e.target.value }))}
                placeholder="Ngày phát hành"
                className="border rounded-lg px-3 py-2"
              />
              <select
                value={form.status}
                onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as MovieStatus }))}
                className="border rounded-lg px-3 py-2"
              >
                <option value="Showing">Showing</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Archived">Archived</option>
              </select>
              <input
                value={form.image}
                onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
                placeholder="URL ảnh poster"
                className="col-span-2 border rounded-lg px-3 py-2"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button onClick={closeModal} className="px-4 py-2 rounded-lg border">
                Hủy
              </button>
              <button onClick={saveMovie} className="px-4 py-2 rounded-lg bg-sky-600 text-white">
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}