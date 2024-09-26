import React from 'react';
import './Advocacy.css'; // Adjust the path as necessary
import Footer from "./Footer";

const Advocacy = () => {
  return (
    <>
      <div className="advocacy-main-container"> {/* Main container for flex layout */}
        <div className="advocacy-container left-aligned"> {/* Left-aligned container */}
          <div className="advocacy-section">
            <h2>SERVICES </h2>
            <h2>  &   ADVOCACY</h2>
            <p>Bringing Somalia to the Forefront</p>
            <p>
              The Somalia NGO Consortium facilitates joint approaches and advocacy and influences policy change, increasing local, regional and international awareness of Somali humanitarian and development issues.
            </p>
            <p>
              The Somalia NGO Consortium influences positive policy change in areas of shared concerns raised by member organisations. The Consortium coordinates and facilitates members' advocacy initiatives through the following process:
            </p>
            <ul>
              <li>Identifying concerns</li>
              <li>Canvassing for input and consensus from members</li>
              <li>Creating advocacy task forces</li>
              <li>Drafting position papers/statements</li>
              <li>Presenting to members for ratification</li>
              <li>Delivering key positions/concerns to stakeholders/target groups</li>
              <li>Lobbying to collectively address concerns raised and achieve solutions</li>
            </ul>
            <h3>Estimated Results</h3>
            <ul>
              <li>Urgent and important joint actions are coordinated, and NGO key messages and advocacy positions are identified, facilitated and shared with stakeholders.</li>
              <li>Increased public awareness of NGO programming and key humanitarian and developmental issues in Somalia.</li>
              <li>Links to international agencies and bodies for support of national advocacy initiatives and improved international awareness of main Somali NGO concerns.</li>
            </ul>
            <h3>Main Activities</h3>
            <ul>
              <li>Establishing and maintaining close links to other external actors whose actions impact upon Consortium members' work in Somalia.</li>
              <li>Coordination and facilitation of public briefings and media events to increase public understanding of NGO programming and major humanitarian and developmental concerns in Somalia.</li>
              <li>Coordination and facilitation of advocacy initiatives through an established process involving all Consortium member organisations.</li>
              <li>Identification and development of positions and updates relevant to NGO activities in Somalia.</li>
            </ul>
          </div>
        </div>
        <div className="advocacy-container right-aligned"> {/* New thin and long right-aligned container */}
          <div className="advocacy-section">
            <h2>ADDITIONAL SERVICES</h2>
            
            <p>Our organization provides various support services to enhance the capabilities of local NGOs.</p>
            <ul>
              <li>Capacity Building Workshops</li>
              <li>Resource Allocation</li>
              <li>Technical Assistance</li>
              <li>Monitoring and Evaluation Support</li>
              <li>Networking Opportunities</li>
            </ul>
            <p>
              Through these services, we aim to empower local organizations and foster a collaborative environment that drives sustainable development in Somalia.
            </p>
            <h3>SUPPORT SERVICES</h3>
            <p>Our organization provides various support services to enhance the capabilities of local NGOs.</p>
            <ul>
              <li>Capacity Building Workshops</li>
              <li>Resource Allocation</li>
              <li>Technical Assistance</li>
              <li>Monitoring and Evaluation Support</li>
              <li>Networking Opportunities</li>
            </ul>
            <p>
              Through these services, we aim to empower local organizations and foster a collaborative environment that drives sustainable development in Somalia.
            </p>
          </div>
        </div>
      </div>
      <Footer /> 
    </>
  );
};

export default Advocacy;
