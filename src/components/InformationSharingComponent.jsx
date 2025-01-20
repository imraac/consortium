import React from 'react';
import './RepresentationComponent.css'; // Reusing the same CSS file
import Footer from './Footer';
const InformationSharingComponent = () => {
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


      {/* Information Sharing Section */}
      <div className="information-sharing-container">
        <h2>Information Sharing</h2>
        <p>We ensure that valuable information is shared through:</p>
        <ul>
          <li>
            <strong>• Newsletters:</strong> Providing regular updates on consortium activities, advocacy efforts, and relevant issues.
          </li>
          <li>
            <strong>• Reports and Publications:</strong> Sharing research findings, impact reports, and policy papers.
          </li>
          <li>
            <strong>• Online Resources:</strong> Maintaining a digital platform with access to essential documents and information.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default InformationSharingComponent;
