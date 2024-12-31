import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 text-center p-4 pt-14">
      <div className="max-w-md w-full">
        <h1 className="text-6xl font-bold text-[#FF6247] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-700 mb-6">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="bg-[#FF6247] text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-[#FF3C3C] transition-colors">
          Go Back to Homee
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;