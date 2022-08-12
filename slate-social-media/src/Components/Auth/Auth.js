import { Navigate, useLocation } from "../../Utils/SystemUtils";

function Auth({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("token");

  return token ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default Auth;
