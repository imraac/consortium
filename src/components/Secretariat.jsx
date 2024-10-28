


import React from 'react';
import './Secretariat.css'; // Import the CSS file
import Footer from './Footer'; // Import the Footer component

const Secretariat = () => {
  // Secretariat members
  const secretariatMembers = [
    { role: 'Director', email: 'director@mrosconsortium.org', isDirector: true },
    { role: 'Deputy Director', email: 'dep.director@mrosconsortium.org' },
    { role: 'General Secretary', email: 'secretary@mrosconsortium.org' },
    { role: 'Treasurer', email: 'treasure@mrosconsortium.org' },
    { role: 'Membership & Communications Officer', email: 'memb.comms@mrosconsortium.org' },
    { role: 'Program Support Officer', email: 'program.support@mrosconsortium.org' },
    { role: 'Advocacy and Communications Specialist', email: 'advocacy@mrosconsortium.org' },
    { role: 'Finance & Grants Manager', email: 'finance@mrosconsortium.org' },
  ];

  return (
    <div className="secretariat-page">
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

      {/* Secretariat Section */}
      <div className="secretariat-container">
        <div className="secretariat-section membership-info">
          <h2 className="consortium-title">Secretariat</h2>
          <div className="secretariat-list">
            {secretariatMembers.map((member, index) => (
              <div key={index} className="secretariat-item">
                <span className={`secretariat-role ${member.isDirector ? 'secretariat-director' : ''}`}>
                  {member.role}
                </span>
                <a href={`mailto:${member.email}`} className="secretariat-email">{member.email}</a>
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

export default Secretariat;
