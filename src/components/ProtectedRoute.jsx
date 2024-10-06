import React from "react";
import { useAuth } from "./AuthProvider";
import AuthContent from "./AuthContent"; // This is where the prompt is handled

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  // Show a loading spinner if authentication is in progress
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If not authenticated, show the AuthContent (the prompt)
  if (!isAuthenticated) {
    return <AuthContent />;
  }

  // If authenticated, show the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
