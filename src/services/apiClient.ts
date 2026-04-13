import axios, { AxiosHeaders } from 'axios';
import { CURRENT_USER_STORAGE_KEY } from '../utils/authSession';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Đường dẫn tới Backend Spring Boot
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Bật nếu dùng cookie, session hoặc JWT trong HttpOnly cookie
});

// Interceptor cho Request (ví dụ muốn đính kèm JWT Token)
apiClient.interceptors.request.use(
  (config) => {
    const rawCurrentUser = localStorage.getItem(CURRENT_USER_STORAGE_KEY);
    if (rawCurrentUser) {
      try {
        const parsed = JSON.parse(rawCurrentUser);
        if (parsed.token) {
          // Chuẩn hóa headers để tránh mismatch type giữa object và AxiosHeaders
          const headers = AxiosHeaders.from(config.headers);
          headers.set('Authorization', `Bearer ${parsed.token}`);
          config.headers = headers;
        }
      } catch (e) {
        // Ignore JSON parse error
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor cho Response (ví dụ xử lý lỗi 401 token hết hạn)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response && error.response.status === 401) {
    //   // handle unauthorized (logout user, clear token, v.v...)
    // }
    return Promise.reject(error);
  }
);

export default apiClient;
