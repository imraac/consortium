import React from 'react';
import './RepresentationComponent.css'; // Reusing the same CSS file
import Footer from './Footer';
const TwinningProgramComponent = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="m-0 p-0 w-full">
  {/* Hero Section */}
  <div className="m-0 p-0 w-full">
    <main className="hero-gradient animate-bg relative w-full m-0 p-0">
      <header className="flex flex-row justify-center md:h-96 items-center p-8">
        <h1 className="text-sm md:text-lg lg:text-2xl xl:text-3xl font-semibold text-black text-center">
          Join the
          <div className="inline-block bg-orange-400 transform -rotate-3 px-1 md:px-2 rounded-md py-1 text-sm md:text-lg lg:text-xl xl:text-2xl">
            Minority Rights Organizations
          </div>
          Consortium
        </h1>
      </header>

      <img
        src="/readinguncle.jpg"
        alt="Minority Rights Organizations"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: 0 }}
      />
    </main>
  </div>
</div>


      {/* Twinning Program Section */}
      <div className="information-sharing-container">
        <h2>Twinning Program</h2>
        <p>The Twinning Program aims to:</p>
        <ul>
          <li>
            <strong>• Enhance Collaboration:</strong> Pair minority-led organizations with other entities to share knowledge and expertise.
          </li>
          <li>
            <strong>• Strengthen Capacities:</strong> Support the development and effectiveness of participating organizations through mutual learning.
          </li>
          <li>
            <strong>• Foster Innovation:</strong> Encourage new approaches and solutions to common challenges faced by minority communities.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default TwinningProgramComponent;
