import React from "react";
import { useAuth } from "./AuthProvider";
import { Link } from "react-router-dom";

const AuthContent = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="auth-prompt bg-white p-10 rounded-xl shadow-2xl max-w-lg text-center border border-gray-200">
          <h2 className="text-3xl font-extrabold mb-6 text-red-600">
            Access Restricted
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            You need to be logged in to view this content.
          </p>
          <p className="mb-4 text-gray-700">
            If you already have an account, please{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              log in here
            </Link>
            .
          </p>
          <p className="text-gray-700">
            New to the platform?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up here
            </Link>
            .
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthContent;
