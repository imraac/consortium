import React from 'react';
import './Secretariat.css'; 
import Footer from './Footer'; 
const RegionalRepresentatives = () => {
  const regionalMembers = [
    { role: 'Regional Coordinator - Benadir (Mogadishu based)', email: 'rc.benadir@mrosconsortium.org' },
    { role: 'Regional Coordinator – Somaliland (Hargeisa based)', email: 'rc.somaliland@mrosconsortium.org' },
    { role: 'Regional Coordinator - Hirshabelle (Jowhar based)', email: 'rc.hirshabelle@mrosconsortium.org' },
    { role: 'Regional Coordinator – South West State (Baidoa based)', email: 'rc.southwest@mrosconsortium.org' },
    { role: 'Regional Coordinator - Jubaland (Doolow based)', email: 'rc.jubballand@mrosconsortium.org' },
    { role: 'Regional Coordinator – Puntland (Garowe based)', email: 'rc.puntland@mrosconsortium.org' },
    { role: 'Regional Coordinator - Galmudug (Dusamareb based)', email: 'rc.galmudug@mrosconsortium.org' },
  ];

  return (
    <div className="secretariat-page">
      <div>
  <main
    className="hero-gradient animate-bg relative"
    style={{
      paddingTop: "calc(var(--navbar-height, 5px) + 1rem)", 
    }}
  >
    <header className="flex flex-row justify-center md:h-96 items-center p-20">
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


      <div className="secretariat-container">
        <div className="secretariat-section membership-info">
          <h2 className="consortium-title">Regional Representatives</h2>
          <div className="secretariat-list">
            {regionalMembers.map((member, index) => (
              <div key={index} className="secretariat-item">
                <span className="secretariat-role">
                  {member.role}
                </span>
                <a href={`mailto:${member.email}`} className="secretariat-email">{member.email}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default RegionalRepresentatives;
