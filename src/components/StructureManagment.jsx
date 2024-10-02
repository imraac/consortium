import React, { useEffect } from 'react';
import Footer from './Footer'; // Import the Footer component
import './ConsortiumMandate.css'; // Import your CSS styles (if needed)

const ConsortiumMandate = () => {
  // Scroll to top when the component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="consortium-mandate-wrapper">
      <h2>Consortium Mandate</h2>
      <p>
      The Consortium will operate with the following governance framework:
    • General Assembly: Comprising all member organizations, responsible for strategic planning and decision-making.
    • Steering Committee: Elected representatives from the General Assembly who oversee the Consortium’s activities and initiatives.
    • Regional coordinators: promote and protect minority rights in Somalia. Through their localized approach, they help ensure that the Consortium's initiatives are responsive to the unique needs of minority communities across different regions.
    • Working Groups: Focused teams addressing specific areas such as legal advocacy, cultural preservation, education, and health.
    • Support team: Help in operation of the consortium in areas of logistics, procurement, Finance and Grants etc

      </p>
      
      <p>
        The MROs Consortium in Somalia aims to build a powerful coalition that amplifies the voices of minority communities and drives meaningful change. Through collective action, we envision a Somalia where diversity is embraced, and all individuals can live with dignity, free from discrimination and inequality.
      </p>
      <p>
        The MRO Consortium is dedicated to addressing and advancing the rights of minority groups in Somalia. Our mandate includes:
      </p>
      <ul className="mandate-list">
        <li>
          <strong>Advocacy for Minority Rights:</strong> Promoting and defending the rights and interests of minorities in national and local contexts.
        </li>
        <li>
          <strong>Support for Minority-Led Initiatives:</strong> Offering resources and assistance to organizations and projects led by minority communities.
        </li>
        <li>
          <strong>Strengthening Minority Voices:</strong> Ensuring that the voices of minorities are heard and represented in decision-making processes.
        </li>
      </ul>

    
      {/* SVG Diagram */}
      <div className="consortium-diagram">
  <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="responsive-svg">
    {/* General Assembly */}
    <rect x="150" y="10" width="200" height="40" fill="#65cafd" stroke="black" />
    <text x="250" y="35" fontFamily="Arial" fontSize="14" textAnchor="middle">General Assembly</text>

    {/* Steering Committee */}
    <rect x="150" y="70" width="200" height="40" fill="#65cafd" stroke="black" />
    <text x="250" y="95" fontFamily="Arial" fontSize="14" textAnchor="middle">Steering Committee</text>
    
    {/* Regional Coordinators */}
    <rect x="30" y="130" width="180" height="40" fill="#65cafd" stroke="black" />
    <text x="120" y="155" fontFamily="Arial" fontSize="12" textAnchor="middle">Regional Coordinators</text>

    {/* Working Groups */}
    <rect x="290" y="130" width="180" height="40" fill="#65cafd" stroke="black" />
    <text x="380" y="155" fontFamily="Arial" fontSize="12" textAnchor="middle">Working Groups</text>

    {/* Support Team */}
    <rect x="150" y="200" width="200" height="40" fill="#65cafd" stroke="black" />
    <text x="250" y="225" fontFamily="Arial" fontSize="14" textAnchor="middle">Support Team</text>

    {/* Lines connecting elements */}
    <line x1="250" y1="50" x2="250" y2="70" stroke="black" strokeWidth="2" />
    <line x1="250" y1="110" x2="120" y2="130" stroke="black" strokeWidth="2" />
    <line x1="250" y1="110" x2="380" y2="130" stroke="black" strokeWidth="2" />
    <line x1="250" y1="110" x2="250" y2="200" stroke="black" strokeWidth="2" />
  </svg>
</div>



      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ConsortiumMandate;
