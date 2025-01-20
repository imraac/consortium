import React from 'react';
import './RepresentationComponent.css'; // Reusing the same CSS file
import Footer from './Footer';

const AdditionalServicesComponent = () => {
  return (
    <>
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


      {/* Additional Services Section */}
      <div className="information-sharing-container">
        <h2>Additional Services</h2>
        <p>We provide a range of additional services including:</p>
        <ul>
          <li>
            <strong>• Training Workshops:</strong> Offering sessions on advocacy, organizational management, and other relevant skills.
          </li>
          <li>
            <strong>• Consulting Services:</strong> Providing expert advice and support for program development and implementation.
          </li>
          <li>
            <strong>• Resource Development:</strong> Creating and distributing tools and materials to support the work of minority-led organizations.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default AdditionalServicesComponent;
