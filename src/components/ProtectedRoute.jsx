import React from "react";
import { useAuth } from "./AuthProvider";
import AuthContent from "./AuthContent"; 

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <AuthContent />;
};

export default ProtectedRoute;
