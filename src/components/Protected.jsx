// import { useAuth } from "../Context/Context";
// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {
//   const { currentUser } = useAuth();

//   if (!currentUser) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// }

// export default ProtectedRoute;

import { useAuth } from "../Context/Context";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children,allowedRoles }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(currentUser.option)) {
    return <Navigate to="/Login" />;
  }


  return children;
}

export default ProtectedRoute;