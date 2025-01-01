import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 text-center p-4">
      <div className="max-w-md w-full">
        <div className="flex flex-col items-center">
        <h1 className="text-9xl font-extrabold text-red-500 mb-2">404</h1>

          <h2 className="text-2xl font-semibold text-red-500 mb-4">Page Not Found</h2>

          <p className="text-gray-700 mb-6">Sorry, the page you are looking for does not exist yet.</p>
          <Link to="/landingpage" className="bg-[red] text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-[red] transition-colors">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
