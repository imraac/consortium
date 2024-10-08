import React from 'react';
import './Coordination.css';

const Coordination = () => {
  return (
    <section className="coordination-wrapper">
      <div className="image-container">
        <img 
          src="/help.jpg" // Update with the correct image path
          alt="Coordination Efforts" 
          className="coordination-image"
        />
      </div>

      <div className="text-container">
        <h1>Coordination and Engagement</h1>
        <p className="intro-text">
          The Somalia NGO Consortium aims to maintain a networked, informed, and active NGO community, enabling the best possible work in Somalia. By creating a conducive working environment, we help our members deliver humanitarian and developmental assistance to all Somali people.
        </p>
        <hr className="section-divider"/>

        <h2>Our Coordination Activities</h2>
        <ul className="coordination-list">
          <li><strong>Collaborative Projects:</strong> Organizing joint initiatives that harness the strengths of multiple minority-led organizations.</li>
          <li><strong>Resource Sharing:</strong> Facilitating access to knowledge, tools, and best practices for all consortium members.</li>
          <li><strong>Event Management:</strong> Coordinating conferences, workshops, and forums to foster collaboration and knowledge exchange.</li>
        </ul>
        <hr className="section-divider"/>

        <h2>Representation of Minority Communities</h2>
        <p>We represent minority communities in:</p>
        <ol className="representation-list">
          <li><strong>Humanitarian Working Groups:</strong> Participating in sector-specific working groups to prioritize minority communities in humanitarian planning.</li>
          <li><strong>National Forums:</strong> Engaging with Somali governmental bodies to advocate for the inclusion and rights of minority communities.</li>
          <li><strong>International Platforms:</strong> Raising awareness and advocating for minority groups in global discussions, forums, and conferences.</li>
          <li><strong>Public Advocacy:</strong> Utilizing media and public platforms to promote social justice and the needs of minority communities.</li>
        </ol>

        <h2>Information Sharing</h2>
        <p>
          We ensure valuable information is disseminated through:
          <ul>
            <li><strong>Newsletters:</strong> Regular updates on consortium activities and advocacy efforts.</li>
            <li><strong>Reports and Publications:</strong> Sharing research, impact reports, and policy papers.</li>
            <li><strong>Online Resources:</strong> Maintaining a digital platform with access to key documents and information.</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default Coordination;
