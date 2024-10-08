import React from 'react';
import './Represenation.css' 
import Footer from "./Footer"; 

const Representation = () => {
  return (
    <>
      <div className="representation-main-container">
        <div className="representation-container">
          <h2>Representation</h2>
          <h3>Influencing Decisions for Members</h3>
          <p>
            Somali NGO Consortium members benefit from representation at national and international levels where joint solutions and approaches are facilitated and key NGO positions communicated.
          </p>
          <p>
            The Consortium, through the Director, represents members within a number of coordination fora and at specialised meetings such as:
          </p>
          <ul>
            <li>The Humanitarian Country Team (HCT)</li>
            <li>Development Partnership Forum</li>
            <li>Somalia Humanitarian Fund (SHF) Advisory Board</li>
            <li>The Somalia Water and Land Information Management (SWALIM Board)</li>
            <li>The Special Protection Unit (SPU) reform Task Force</li>
            <li>The UN Security Management Team (SMT)</li>
          </ul>
          <p>
            The Director meets with key stakeholders on behalf of the Consortium membership to explain and seek solutions to key NGO concerns and positions. Reports are fed back to the broader membership on a regular basis, encouraging maximum participation where relevant and possible.
          </p>
          <h3>Estimated Results</h3>
          <p>
            NGO positions are represented at key meetings and within key coordination fora at international and national levels. Solutions to key NGO concerns are sought, and joint approaches are facilitated.
          </p>
          <h3>Main Activities</h3>
          <ul>
            <li>Representation of Consortium members in a variety of fora, negotiating the interests of member NGOs with key stakeholders.</li>
            <li>Regular liaison with government representatives, donors, and UN agencies for effective and constructive dialogue.</li>
            <li>Facilitation of views and positions of Consortium members, ensuring these are effectively debated and delivered and ultimately addressed.</li>
            <li>Ensuring members are kept informed on key debates and issues relevant to Somalia and the NGOs working within the country.</li>
          </ul>
        </div>
      </div>
      <Footer /> 
    </>
  );
};

export default Representation;
