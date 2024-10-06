import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Consortium.css'; // Import your CSS styles
const Consortium = () => {
  return (
    <div className="consortium-wrapper">
      <div className="consortium-container">
        <h1>Join the Minority Rights Organizations Consortium</h1>
        <p>
          The registration process will take approximately 20 minutes. Please have all necessary documents and information ready before you begin.
        </p>
        <p>
          In order for us to maintain our credibility, we have to be strict on membership and ensure that everyone who becomes a member is doing what they say they are doing. Membership of the Minority Rights Organizations Consortium requires that your agency must be a Minority-led Organization, currently undertaking activities, direct operations and/or support to partner NGOs in Somalia.
        </p>
        <p>
          At your convenience, you may print the online registration checklist to be sure you have all necessary materials before starting the registration process.
        </p>

        <h2>Required Documents</h2>
        <p>
          The following documents are required for submission. Each should be signed, scanned, and ready to upload before you begin the registration process. Only DOC, DOCX, and PDF formats will be accepted.
        </p>
        <ul>
          <li>Copy of the agency's registration certificate</li>
          <li>
            Agency profile containing the following details of the last three programmes for the past years:
            <ul>
              <li>Project Title</li>
              <li>Start date</li>
              <li>End date</li>
              <li>Sources of funds</li>
              <li>Target beneficiaries</li>
              <li>Main sector</li>
              <li>Sub sector</li>
              <li>Region</li>
              <li>District</li>
            </ul>
          </li>
          <li>
            Copy of a recent audit report from an independent auditor detailing:
            <ul>
              <li>Budget</li>
              <li>Expenditure</li>
              <li>Auditor's comments and/or recommendations</li>
            </ul>
          </li>
          <li>MROs Consortium Mandate: Download, scan, and sign the last page</li>
        </ul>

        <h2>Required Information</h2>
        <p>Please provide the following information:</p>
        <ul>
          <li>Brief description of the agency (how it is minority-led, Max 200 words)</li>
          <li>Mission statement (Max 200 words)</li>
          <li>Reasons for joining the MROs Consortium (Max 200 words)</li>
          <li>Number and date of agency registration</li>
          <li>Headquarter, regional, and local contact details</li>
          <li>Years operational in Somalia/Somaliland</li>
          <li>Partners in Somalia/Somaliland</li>
          <li>Number of (national and international) staff working on Somalia/Somaliland projects</li>
          <li>Programme/project plans for the coming year (Max 200 words)</li>
          <li>Main donors for the upcoming year</li>
          <li>Annual budget</li>
        </ul>
        <p style={{ color: 'orange' }}>
          I confirm that I have read and understood the requirements for registering with the MROs Consortium. I understand that all information submitted during the registration process will be held in confidence and can only be accessed by the MROs Consortium Secretariat.
        </p>

        {/* Registration buttons and links */}
        <div style={{ marginTop: '20px' }}>
          <Link to="/registration">
            <button
              style={{
                backgroundColor: '#D15D51',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '1px',
                cursor: 'pointer',
                fontSize: '16px',
                marginRight: '10px',
              }}
            >
              Begin Registration
            </button>
          </Link>
          <a href="/import-registration" style={{ marginRight: '10px', color: '#007BFF', textDecoration: 'none' }}>
            Import a saved registration
          </a>
          <a href="/load-documents" style={{ color: '#007BFF', textDecoration: 'none' }}>
            Skip to load documents
          </a>
        </div>
      </div>

      {/* Sleek Container */}
      <div className="sleek-container">
        <h2>Why Join Us?</h2>
        <p>
          Formed in 1999, we bring together local and international NGOs working in Somalia in order to:
        </p>
        <ul>
          <li>Share information and analysis on key issues</li>
          <li>Facilitate closer coordination and joint advocacy</li>
          <li>Improve representation with stakeholders including local authorities, the UN system, and donors</li>
        </ul>
        <p>
          Together, we can share resources, knowledge, and experiences that will help us all succeed in our missions.
          Join us in making a difference today!
        </p>

        {/* Image placeholder */}
        <div>
          <img 
            src="/map.png"
            alt="Consortium" 
            style={{ width: '100%', height: 'auto', borderRadius: '1px' }} 
          />
        </div>

        {/* Action buttons */}
        <div style={{ marginTop: '20px' }}>
          <button
            style={{
              backgroundColor: '#F79647',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              marginRight: '10px',
              marginBottom: '20px',
            }}
          >
            Become a Member
          </button>
          <div>
            <img 
              src="/help.jpg"
              alt="Consortium" 
              style={{ width: '100%', height: 'auto', borderRadius: '1px', marginBottom: "20px" }} 
            />
          </div>
          <div>
            <img 
              src="/readinguncle.jpg"
              alt="Consortium" 
              style={{ width: '100%', height: 'auto', borderRadius: '1px', marginBottom: "20px" }} 
            />
          </div>
          
          {/* New Text Section */}
          <div>
            <h2>Current Members</h2>
            <p>View our current members to see who is part of the consortium:</p>
            <ul>
              <li>
                <strong>Access for Relief and Development (ACRED)</strong>
                <br />
                <a href="http://www.acred.org" target="_blank" rel="noopener noreferrer">www.acred.org</a>
              </li>
              <li>
                <strong>Daami Youth Development Organization (DYDO)</strong>
                <br />
                <a href="http://www.dydo.net" target="_blank" rel="noopener noreferrer">www.dydo.net</a>
              </li>
              <li>
                <strong>International Development Association of Africa (IDAA)</strong>
                <br />
                <a href="http://www.idaainternational.org" target="_blank" rel="noopener noreferrer">www.idaainternational.org</a>
              </li>
              <li>
                <strong>Juba Valley Development Center (JVDC)</strong>
                <br />
                <a href="http://www.jvdc.org" target="_blank" rel="noopener noreferrer">www.jvdc.org</a>
              </li>
              <li>
                <strong>Livelihood Relief and Development Organization (LRDO)</strong>
                <br />
                <a href="http://www.lrdo.org" target="_blank" rel="noopener noreferrer">www.lrdo.org</a>
              </li>
              <li>
                <strong>Marginalized Communities Advocacy Network (MCAN)</strong>
                <br />
                <a href="http://www.mcan-africa.org" target="_blank" rel="noopener noreferrer">www.mcan-africa.org</a>
              </li>
              <li>
                <strong>Puntland Minority Women Development Organization (PMWDO)</strong>
                <br />
                <a href="http://www.pmwdo.org" target="_blank" rel="noopener noreferrer">www.pmwdo.org</a>
              </li>
              <li>
                <strong>Save Minority Women and Children (SMWC)</strong>
                <br />
                <a href="http://www.smwc.site" target="_blank" rel="noopener noreferrer">www.smwc.site</a>
              </li>
              <li>
                <strong>Voice of Somali Minority Women Organization (VOSOMWO)</strong>
                <br />
                <a href="http://www.vosomwo.org" target="_blank" rel="noopener noreferrer">www.vosomwo.org</a>
              </li>
            </ul>
          </div>

          <button
            style={{
              backgroundColor: '#F79647',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '1px',
              cursor: 'pointer',
              fontSize: '16px',
              marginBottom: '20px',
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consortium;
