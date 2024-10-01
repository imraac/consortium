import React, { useEffect } from 'react';
import Footer from './Footer'; // Import the Footer component
import './CoreValues.css'; // Import your CSS styles (if needed)

const CoreValues = () => {
  // Scroll to top when the component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="core-values-wrapper">
      <h2>Our Core Values</h2>
      <p>
        At the Minority Rights Organizations (MRO) Consortium, which is exclusively owned and managed by minority groups in Somalia, we are committed to:
      </p>
      <ul className="core-values-list">
        <li>
          <strong>Inclusivity:</strong> Embracing the diversity of minority communities and ensuring all voices are represented.
        </li>
        <li>
          <strong>Empowerment:</strong> Supporting minority groups in asserting their rights and identities.
        </li>
        <li>
          <strong>Integrity:</strong> Upholding transparency, accountability, and ethical practices in all Consortium activities.
        </li>
        <li>
          <strong>Solidarity:</strong> Promoting unity among organizations and communities in the pursuit of justice and equality.
        </li>
      </ul>
   
    </div>
  
  );
};

export default CoreValues;
