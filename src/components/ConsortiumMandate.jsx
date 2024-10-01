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
        The Minority Rights Organizations (MROs) Consortium in Somalia is committed to advocating for the rights and dignity of minority communities across the country.
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
    </div>
  );
};

export default ConsortiumMandate;
