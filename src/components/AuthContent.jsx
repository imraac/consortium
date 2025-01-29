import React from "react";
import Login from "./Login";

const AuthContent = () => {
  const isRestricted = false;

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
     
    >
      {isRestricted ? (
        <div className="auth-prompt bg-white p-10 rounded-xl shadow-2xl max-w-lg text-center border border-gray-200 transition-transform transform hover:scale-105">
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
              className="text-blue-600 font-semibold hover:underline transition-colors duration-300"
            >
              log in here
            </Link>
            .
          </p>
          <p className="text-gray-700 mb-6">
            New to the platform?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline transition-colors duration-300"
            >
              Sign up here
            </Link>
            .
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-block bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300"
            >
              Go to Home
            </Link>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default AuthContent;
