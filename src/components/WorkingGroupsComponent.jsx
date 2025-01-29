import React from 'react';
import './RepresentationComponent.css';
import Footer from './Footer';

const WorkingGroupsComponent = () => {
  return (
    <>
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


      <div className="information-sharing-container">
        <h2>Working Groups</h2>
        <p>Our working groups focus on:</p>
        <ul>
          <li>
            <strong>• Human Rights Monitoring:</strong> Tracking and reporting on human rights conditions affecting minority groups in Somalia.
          </li>
          <li>
            <strong>• Legal Support:</strong> Offering legal assistance and advocacy to address rights violations.
          </li>
          <li>
            <strong>• Cultural Preservation:</strong> Working to safeguard and promote the cultural heritage of minority communities.
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default WorkingGroupsComponent;
