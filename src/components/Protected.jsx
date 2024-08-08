import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from 'react';

function ProtectedRoute({ component: Component, allowedRoles }) {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'Users', user.uid));
        if (userDoc.exists()) {
          setUserRole(userDoc.data().role);
        }
      }
      setLoading(false);
    };

    fetchUserRole();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/Signup" replace />;
  }

  return <Component />;
}

export default ProtectedRoute;
