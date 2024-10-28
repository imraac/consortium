// FeatureStories.js
import React from 'react';
import './Secretariat.css'; // Import the same CSS file
import Footer from './Footer'; // Import the Footer component

const FeatureStories = () => {
  // Feature Stories content
  const featureStories = [
    { title: 'Case Studies', description: 'In-depth stories of successful initiatives and projects led by consortium members.' },
    { title: 'Member Spotlights', description: 'Highlights of achievements and contributions from individual members.' },
    { title: 'Impact Narratives', description: 'Accounts of positive changes and outcomes resulting from our collective efforts.' },
  ];

  return (
    <div className="secretariat-page">
      <div>
        <main className="hero-gradient animate-bg relative">
          <header className="flex flex-row justify-center md:h-96 items-center p-8">
            <h1 className="text-sm md:text-lg lg:text-2xl xl:text-3xl font-semibold text-black text-center">
              
              <div className="inline-block bg-orange-400 transform -rotate-3 px-1 md:px-2 rounded-md py-1 text-sm md:text-lg lg:text-xl xl:text-2xl">
              Feature Stories
              </div>
            </h1>
          </header>
          
          <img
            src="/readinguncle.jpg" // Correct image path without "/public"
            alt="Minority Rights Organizations"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: 0 }} // Start with opacity 0
          />
        </main>
      </div>

      {/* Feature Stories Section */}
      <div className="secretariat-container">
        <div className="secretariat-section membership-info">
          <h2 className="consortium-title">Feature Stories</h2>
          <div className="secretariat-list">
            {featureStories.map((story, index) => (
              <div key={index} className="secretariat-item">
                <span className="secretariat-role">{story.title}</span>
                <p className="secretariat-description">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer at the bottom of the page */}
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default FeatureStories;
