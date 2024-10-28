import React from 'react';
import './RepresentationComponent.css'; // Optional: Create a CSS file for styling
import Footer from './Footer';
const RepresentationComponent = () => {
  return (
    <>
      {/* Hero Section */}
      <main className="hero-gradient animate-bg relative">
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
          src="/readinguncle.jpg" // Correct image path without "/public"
          alt="Minority Rights Organizations"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: 0 }} // Start with opacity 0
        />
      </main>

      {/* Representation Section */}
      <div className="representation-container">
        <section className="representation-content">
          <h2>Representation</h2>
          <p>We represent minority communities in the following areas:</p>
          <ul>
            <li>
              <strong>1. Humanitarian Working Groups:</strong> 
              Actively participating in cluster and sector-specific working groups to ensure that minority communities are considered and prioritized in humanitarian planning and response efforts.
            </li>
            <li>
              <strong>2. National Forums:</strong> 
              Engaging with Somali governmental bodies and national institutions to advocate for the rights, protection, and inclusion of minority communities in policy-making and national initiatives.
            </li>
            <li>
              <strong>3. International Platforms:</strong> 
              Taking part in global discussions, forums, and conferences to raise awareness and bring attention to the challenges and rights of minority groups in Somalia, ensuring they are visible on the international stage.
            </li>
            <li>
              <strong>4. Public Advocacy:</strong> 
              Leveraging media platforms and public speaking opportunities to advocate for the rights and needs of minority communities, aiming to influence public opinion and promote social justice.
            </li>
          </ul>
        </section>
      </div>

      {/* Footer Section */}
    <Footer />
    </>
  );
};

export default RepresentationComponent;
