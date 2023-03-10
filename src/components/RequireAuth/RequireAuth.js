import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import auth from "../../firebase/firebase.config";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
