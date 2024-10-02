import React from 'react';
import './Coordination.css'; // Import a CSS file for styling if needed

const Coordination = () => {
  return (
    <div className="coordination-wrapper">
      <div className="image-container">
        <img 
          src="/help.jpg" // Use the relative path directly
          alt="Coordination" 
          className="coordination-image" 
        />
        <div className="text-overlay">
          <h2>Coordination</h2>
          <div className="coordination-activities">
            <p>Coordination activities include:</p>
            <ul className="coordination-list">
              <li>Collaborative Projects: Organizing joint initiatives and programs that leverage the strengths of multiple minority-led organizations.</li>
              <li>Resource Sharing: Facilitating access to tools, knowledge, and best practices among consortium members.</li>
              <li>Event Management: Coordinating events such as conferences, workshops, and forums to foster dialogue and collaboration.</li>
            </ul>
          </div>
          <div className="representation-section">
            <h3>Representation</h3>
            <p>We represent minority communities in the following areas:</p>
            <ol className="representation-list">
              <li>
                <strong>Humanitarian Working Groups:</strong>
                Actively participating in cluster and sector-specific working groups to ensure that minority communities are considered and prioritized in humanitarian planning and response efforts.
              </li>
              <li>
                <strong>National Forums:</strong>
                Engaging with Somali governmental bodies and national institutions to advocate for the rights, protection, and inclusion of minority communities in policy-making and national initiatives.
              </li>
              <li>
                <strong>International Platforms:</strong>
                Taking part in global discussions, forums, and conferences to raise awareness and bring attention to the challenges and rights of minority groups in Somalia, ensuring they are visible on the international stage.
              </li>
              <li>
                <strong>Public Advocacy:</strong>
                Leveraging media platforms and public speaking opportunities to advocate for the rights and needs of minority communities, aiming to influence public opinion and promote social justice.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordination;
