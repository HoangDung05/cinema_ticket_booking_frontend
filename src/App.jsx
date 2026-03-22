import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routers/AppRouters";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
