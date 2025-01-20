



import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './ConsortiumMembers.css';
import Footer from './Footer';

const consortiumMembers = [
  { name: "Access for Relief and Development (ACRED)", website: "https://www.acred.org" },
  { name: "Daami Youth Development Organization (DYDO)", website: "https://www.dydo.net" },
  { name: "International Development Association of Africa (IDAA)", website: "https://www.idaainternational.org" },
  { name: "Juba Valley Development Center (JVDC)", website: "https://www.jvdc.org" },
  { name: "Livelihood Relief and Development Organization (LRDO)", website: "https://www.lrdo.org" },
  { name: "Marginalized Communities Advocacy Network (MCAN)", website: "https://www.mcan-africa.org" },
  { name: "Puntland Minority Women Development Organization (PMWDO)", website: "https://www.pmwdo.org" },
  { name: "Save Minority Women and Children (SMWC)", website: "https://www.smwc.site" },
  { name: "Voice of Somali Minority Women Organization (VOSOMWO)", website: "https://www.vosomwo.org" }
];

const ConsortiumMembers = () => {
  const navigate = useNavigate();
  const handleJoinClick = () => {
    navigate('/consortium'); 
  };

  const handleFeatureStoriesClick = () => {
    navigate('/feature-stories'); 
  };

  return (
    <div>
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

      <div className="consortium-card">
        <div className="membership-info">
          <h2>Membership is Open to:</h2>
          <ul>
            <li>Organizations committed to promoting minority rights and social justice.</li>
            <li>Groups actively engaged in advocacy, research, or community service for minority populations.</li>
            <li>Entities that adhere to the values and principles of the Consortium.</li>
          </ul>
        </div>
        <div className="consortium-container">
          <h2 className="consortium-title">Current Members</h2>
          <ul className="consortium-list">
            {consortiumMembers.map((member, index) => (
              <li key={index} className="consortium-item">
                <a href={member.website} target="_blank" rel="noopener noreferrer">
                  {member.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar">
          <div className="join-section">
            <h3>Join Our Consortium</h3>
            <p>Become a member of our consortium by completing the registration process.</p>
            <button className="join-button" onClick={handleJoinClick}>Join Now</button>
          </div>
          <div className="feature-stories-section">
            <h3>
              <button className="sidebar-link" onClick={handleFeatureStoriesClick}>
                Feature Stories
              </button>
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConsortiumMembers;
