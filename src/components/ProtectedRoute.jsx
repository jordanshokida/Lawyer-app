
import { Navigate } from "react-router-dom";
import { useUserStorage } from "../stores/useUserStorage";

const ProtectedRoute = ({ children }) => {
  const user = useUserStorage((s) => s.user);

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;


