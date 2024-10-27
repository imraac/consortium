

import React from 'react';
import './Certification.css';
import Footer from './Footer';

const Certification = () => {
  return (
    <div>
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

      {/* Certification Content */}
      <div className="certification-wrapper">
        <h2 className="certification-title">NGO-Certification</h2>
        <p className="certification-intro">
          The NGO-Certification program is designed to:
        </p>
        <ul className="certification-list">
          <li>
            <strong>1. Validate Standards:</strong> The Consortium ensures that organizations claiming to be minority-led are genuine and adhere to the highest ethical standards and best practices. This validation process guarantees that these organizations truly represent and serve minority communities.
          </li>
          <li>
            <strong>2. Certification Process:</strong> The certification process involves a thorough review of each organization's practices, governance, and impact. A panel of experts conducts this evaluation to ensure transparency and integrity. This rigorous process ensures that only organizations meeting the criteria are recognized as minority-led.
          </li>
          <li>
            <strong>3. Benefits of Certification:</strong> Certified minority-led organizations gain several key advantages:
            <ul className="sub-list">
              <li><strong>Credibility:</strong> Enhanced reputation and trust among donors, partners, and beneficiaries.</li>
              <li><strong>Access to Resources:</strong> Increased opportunities for funding, partnerships, and capacity-building initiatives.</li>
              <li><strong>Networking Opportunities:</strong> Greater access to a network of like-minded organizations, enhancing collaboration and impact.</li>
            </ul>
          </li>
        </ul>
      </div>
         {/* Footer component */}
         <Footer />
    </div>
  );
};

export default Certification;
