import React, { createContext, useState, useContext } from "react";

// 1. Tạo Context
const AuthContext = createContext();

// 2. Định nghĩa AuthProvider - Cái mà App.jsx đang tìm kiếm
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Lưu thông tin user sau khi login

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Tạo custom hook để các bạn A, B, C dễ dàng gọi dữ liệu auth
export const useAuth = () => useContext(AuthContext);
