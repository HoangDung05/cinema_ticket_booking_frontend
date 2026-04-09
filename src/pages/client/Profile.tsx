import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { userService } from '../../services/userService';

type User = {
  fullName: string;
  email: string;
  phone: string;
  avatarUrl?: string;
};

const CURRENT_USER_STORAGE_KEY = 'currentUser';

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<User | null>(null);

  let authPayload: any = null;
  try {
    const rawCurrentUser = localStorage.getItem(CURRENT_USER_STORAGE_KEY);
    if (rawCurrentUser) {
      authPayload = JSON.parse(rawCurrentUser);
    }
  } catch (e) {
    localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
  }

  useEffect(() => {
    if (authPayload?.email) {
      userService.getMyProfile(authPayload.email)
        .then(data => {
          setUserProfile(data);
        })
        .catch(err => {
          console.error('Lỗi khi tải thông tin:', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [authPayload?.email]);

  if (!authPayload) {
    return <Navigate to="/" replace />;
  }

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 flex justify-center items-center min-h-[50vh]">
        <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        <span className="ml-3 text-on-surface">Đang tải hồ sơ...</span>
      </div>
    );
  }

  const displayUser = userProfile || authPayload;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-headline font-bold text-on-surface mb-8">Hồ sơ cá nhân</h1>
      <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/20 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1 flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-surface-container-high">
            <img
              src={displayUser.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-5">
          <div>
            <p className="text-sm text-on-surface-variant mb-1">Họ tên</p>
            <p className="text-lg font-semibold text-on-surface">{displayUser.fullName}</p>
          </div>
          <div>
            <p className="text-sm text-on-surface-variant mb-1">Email</p>
            <p className="text-lg font-semibold text-on-surface">{displayUser.email}</p>
          </div>
          <div>
            <p className="text-sm text-on-surface-variant mb-1">SĐT</p>
            <p className="text-lg font-semibold text-on-surface">{displayUser.phone || 'Chưa cập nhật'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
