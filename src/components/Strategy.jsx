



import React from 'react';
import './Strategy.css'; // Import the CSS file
import Footer from './Footer';

const Strategy = () => {
  return (
    <div className="page-wrapper">
      <div className="m-0 p-0 w-full">
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


      <div className="content">
        <div className="strategy-container">
          <p>
            The Minority Rights Organizations (MROs) Consortium in Somalia aims to address the unique challenges faced by minority communities in the country. This strategy outlines our approach to promoting and protecting minority rights through advocacy, collaboration, and capacity building.
            The MROs Consortium strategy in Somalia aims to create a cohesive and effective network dedicated to advancing minority rights. Through collaboration, capacity building, and targeted advocacy, we strive to ensure that all minority communities are recognized, protected, and empowered to contribute to a more inclusive society.
            The NGO-Certification program is designed to:
            <p></p>
            <br /> 1. Validate Standards: The Consortium ensures that organizations claiming to be minority-led are genuine and adhere to the highest ethical standards and best practices. This validation process guarantees that these organizations truly represent and serve minority communities.
            <br></br>
            <br /> 2. Certification Process: The certification process involves a thorough review of each organization's practices, governance, and impact. A panel of experts conducts this evaluation to ensure transparency and integrity. This rigorous process ensures that only organizations meeting the criteria are recognized as minority-led.
            <br></br>
            <br /> 3. Benefits of Certification: Certified minority-led organizations gain several key advantages:
            <br />• Credibility: Enhanced reputation and trust among donors, partners, and beneficiaries.
            <br />• Access to Resources: Increased opportunities for funding, partnerships, and capacity-building initiatives.
            <br />• Networking Opportunities: Greater access to a network of like-minded organizations, enhancing collaboration and impact.
          </p>
        </div>
      </div>

      <Footer /> 
    </div>
  );
};

export default Strategy;
