import { useAuth } from "../Context/Context";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;