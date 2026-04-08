import { useMemo, useState } from 'react';
import { movies as movieSeed } from '../../utils/data';

type MovieStatus = 'Showing' | 'Upcoming' | 'Archived';
type FilterStatus = 'ALL' | 'SHOWING' | 'UPCOMING';

type MovieRow = {
  id: number;
  title: string;
  release: string;
  status: MovieStatus;
  image: string;
  duration: number; // thời lượng (phút)
  trailerUrl: string;
  description: string;
};

type MovieForm = Omit<MovieRow, 'id'>;

const emptyForm: MovieForm = {
  title: '',
  release: '',
  status: 'Upcoming',
  image: '',
  duration: 0,
  trailerUrl: '',
  description: '',
};

function formatDateVN(value: string) {
  if (!value) return '';
  const normalized = value.includes('/') ? value.split('/').reverse().join('-') : value;
  const date = new Date(`${normalized}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('vi-VN');
}

export default function Movies() {
  const [rows, setRows] = useState<MovieRow[]>(movieSeed as MovieRow[]);
  const [filter, setFilter] = useState<FilterStatus>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<MovieForm>(emptyForm);

  const nextId = useMemo(
    () => (rows.length ? Math.max(...rows.map((r) => r.id)) + 1 : 1),
    [rows]
  );

  const filteredMovies = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    const byFilter =
      filter === 'ALL'
        ? rows
        : filter === 'SHOWING'
        ? rows.filter((m) => m.status === 'Showing')
        : rows.filter((m) => m.status === 'Upcoming');

    if (!q) return byFilter;
    return byFilter.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.release.toLowerCase().includes(q)
    );
  }, [filter, rows, searchTerm]);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setIsOpen(true);
  };

  const openEdit = (movie: MovieRow) => {
    setEditingId(movie.id);
    setForm({
      title: movie.title,
      release: movie.release,
      status: movie.status,
      image: movie.image,
      duration: movie.duration,
      trailerUrl: movie.trailerUrl,
      description: movie.description,
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const saveMovie = () => {
    if (!form.title.trim()) return;

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
      <div className="relative max-w-md">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Tìm phim theo tên, mô tả, ngày phát hành"
          className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-sky-200"
        />
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
                 {movie.status === 'Showing'
                    ? 'Đang chiếu'
                    : movie.status === 'Upcoming'
                    ? 'Sắp chiếu'
                    : 'Lưu trữ'}
                </span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-900 line-clamp-1">
                {movie.title}
              </h3>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {movie.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  {movie.duration} phút
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                  {formatDateVN(movie.release)}
                </div>
              </div>

              <div className="flex justify-end mt-3">
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
                placeholder="Nhập tên phim"
                className="col-span-2 border rounded-lg px-3 py-2"
              />
              <input
                type="number"
                min="0"
                step="1"
                value={form.duration === 0 ? '' : form.duration}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    duration: Number(e.target.value || 0),
                  }))
                }
                placeholder="Nhập thời lượng (phút)"
                className="col-span-2 border rounded-lg px-3 py-2"
              />
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Ngày phát hành</p>
                <input
                  type="date"
                  value={form.release}
                  onChange={(e) => setForm((f) => ({ ...f, release: e.target.value }))}
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>
              <select
                value={form.status}
                onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as MovieStatus }))}
                className="border rounded-lg px-3 py-2"
              >
                <option value="Showing">Đang chiếu</option>
                <option value="Upcoming">Sắp chiếu</option>
                <option value="Archived">Lưu trữ</option>
              </select>
              <input
                value={form.image}
                onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
                placeholder="Nhập URL ảnh poster"
                className="col-span-2 border rounded-lg px-3 py-2"
              />
              <input
                value={form.trailerUrl}
                onChange={(e) => setForm((f) => ({ ...f, trailerUrl: e.target.value }))}
                placeholder="Nhập URL trailer"
                className="col-span-2 border rounded-lg px-3 py-2"
              />
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
                placeholder="Nhập mô tả phim"
                className="col-span-2 border rounded-lg px-3 py-2 min-h-[90px]"
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