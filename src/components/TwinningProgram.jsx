import React from 'react';
import './TwinningProgram.css';
import Footer from './Footer';

const TwinningProgram = () => {
  return (
    <div className="twinning-section">
      {/* First Container: Introduction and Why Twinning */}
      <div className="twinning-container intro-container">
        <h1>Twinning Program</h1>

        <div className="section-content">
          <h2>Introduction to Twinning</h2>
          <p>
            The Somalia NGO Consortium & Oxfam Somalia have agreed to support a capacity-building program focused on equitable sharing of power among NGOs, aiming to expand knowledge and resources between local, national, and international humanitarian actors. The focus is on:
          </p>
          <ul>
            <li>Supporting women’s rights organizations (WROs) and addressing gender inequities.</li>
            <li>Addressing the systemic lack of capacity of national NNGOs in providing humanitarian aid.</li>
            <li>Providing representation for NNGOs in the Common Humanitarian Fund (CHF).</li>
            <li>Creating a platform for international actors to better understand local and national civil society.</li>
          </ul>

          <h2>Why Twinning?</h2>
          <p>
            The SNC’s Strategy 2017-2019 aims for 25% of direct funding to go to Somali Local NGOs and to increase their voice and representation with donors by 2020. Oxfam Somalia, through the Twinning Program, intends to address gender justice, women's rights, and transformative leadership within the localization agenda.
          </p>

          <p><strong>Project Title:</strong> Strengthening Gender-Just, Locally-Led Humanitarian Response in Somalia</p>

          <hr className="section-divider" />

          <p>
            The Somalia NGO Consortium and Oxfam Somalia are driving the localization movement to equitably share power, knowledge, and resources between humanitarian actors in Somalia, with a specific focus on supporting women’s rights organizations and addressing gender inequities. The Twinning Program is a two-year pilot initiative running from 2019-2020.
          </p>
        </div>
      </div>

      <div className="twinning-container outcomes-container">
        <h2>Key Outcomes & Strategic Areas of Influence</h2>
        
        <h3>Possible Outcomes</h3>
        <ul>
          <li>Local/national NGOs participating in twinning have improved capacity related to gender equality.</li>
          <li>NGOs are more coordinated and gender-responsive in advocacy efforts.</li>
          <li>Establishing a long-term Capacity Building program to foster trust, solidarity, and improved aid delivery.</li>
        </ul>

        <h3>Strategic Areas of Influence</h3>
        <p>
          The Twinning Program focuses on three main components:
        </p>
        <ul>
          <li>Capacity Development</li>
          <li>Gender Leadership</li>
          <li>Advocacy on Localization</li>
        </ul>

        <h3>Influence in 6 Core Areas</h3>
        <ul>
          <li>NNGO membership in the SHF</li>
          <li>Participation in humanitarian clusters</li>
          <li>Access to future funding</li>
          <li>Managing emergency response and development projects</li>
          <li>Knowledge sharing between NNGOs and INGOs</li>
          <li>Building networks and partnerships with INGOs, OCHA, and other stakeholders</li>
        </ul>

        <h3>Key Outputs & Milestones</h3>
        <ul>
          <li>NGO mapping and perception survey</li>
          <li>Advocacy consultative meetings, workshops, and initiatives</li>
          <li>Supporting partnerships with local organizations</li>
        </ul>
      </div>
    </div>
  );
};

export default TwinningProgram;
