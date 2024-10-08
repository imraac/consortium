import React from 'react';
import './InfoSharing.css'; // Adjust the path as necessary
import Footer from './Footer'; // Import Footer if needed

const InfoSharing = () => {
  return (
    <>
      <div className="info-sharing-main-container">
        <div className="info-sharing-container">
          <h2>Information Sharing</h2>
          <p>
            Effective information sharing is crucial for fostering collaboration and enhancing the capacity of NGOs in Somalia.
          </p>
          <p>
            The Somalia NGO Consortium aims to provide a robust framework for sharing vital information among its members and external stakeholders.
          </p>
          <p>
            By promoting open communication and the exchange of experiences, we ensure that all members are informed about ongoing projects, best practices, and lessons learned.
          </p>
          <p>
            The Consortium also facilitates access to reports, research, and updates from various sectors, helping NGOs to remain up-to-date with developments that affect their work.
          </p>
          <h3>Key Benefits of Information Sharing:</h3>
          <ul>
            <li>Enhances collaboration among NGOs and stakeholders.</li>
            <li>Improves decision-making through access to relevant data.</li>
            <li>Encourages learning and adaptation of best practices.</li>
            <li>Strengthens advocacy efforts by presenting unified positions.</li>
            <li>Facilitates timely responses to emerging challenges.</li>
          </ul>
          <h3>Main Activities Include:</h3>
          <ul>
            <li>Regular dissemination of key reports and updates.</li>
            <li>Organizing workshops and training sessions on effective communication.</li>
            <li>Creating a platform for members to share their experiences and insights.</li>
            <li>Developing resources that outline best practices in information sharing.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoSharing;
