import React from "react";
import { useAuth } from "./AuthProvider";
import AuthContent from "./AuthContent"; 

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <AuthContent />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
