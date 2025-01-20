import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      className="flex items-center justify-center text-center p-4"
      style={{
        backgroundImage: 'url(/path-to-your-image.jpg)', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Ensures the background covers the whole viewport height
      }}
    >
      <div className="max-w-md w-full">
        <div className="flex flex-col items-center">
          <img
            src="/comingsoon.svg" // Replace this with your image URL or import it as a file
            alt="404 Not Found"
            className="w-42 h-32 mb-4 object-contain"
          />
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Page Not Found</h2>
          <p className="text-gray-700 mb-6">Sorry, the page you are looking for does not exist yet.</p>
          <Link to="/landingpage" className="bg-red-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
