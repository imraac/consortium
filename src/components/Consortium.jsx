import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './Consortium.css'; // Import your CSS styles

const Consortium = () => {
  return (
    <div className="consortium-wrapper">
      {/* Horizontal line above all containers */}
      {/* Text above the horizontal line */}
      <motion.h1
        style={{
          textAlign: 'center',         // Center the text
          fontSize: '2.5rem',         // Make the font size larger
          color: '#65cafd',           // Set a contrasting color for the text
          fontWeight: 'bold',          // Make the font bold
          margin: '20px 0',           // Add vertical margins for spacing
          textTransform: 'uppercase',  // Transform text to uppercase for emphasis
          letterSpacing: '1px',  
          marginTop: '-50px'      // Add letter spacing for readability
        }}
        initial={{ opacity: 0 }} // Start with zero opacity
        animate={{ opacity: 1 }} // Animate to full opacity
        transition={{ duration: 1 }} // Transition duration
      >
        Join the Consortium
      </motion.h1>

      <motion.p 
  style={{ 
    marginBottom: '20px', 
    fontSize: '16px', 
    lineHeight: '1.5', 
    color: 'white',
    backgroundColor: '#e52707', // Added background color
    padding: '10px', // Optional: Add padding for better spacing
    borderRadius: '1px' // Optional: Add rounded corners
  }}
  initial={{ opacity: 0 }} // Start with zero opacity
  animate={{ opacity: 1 }} // Animate to full opacity
  transition={{ duration: 1, delay: 0.2 }} // Transition with a delay
>
  In order for us to maintain our credibility, we have to be strict on membership and ensure that everyone who becomes a member is doing what they say they are doing. Membership of the Minority Rights Organizations Consortium requires that your agency must be a Minority-led Organization, currently undertaking activities, direct operations and/or support to partner NGOs in Somalia.
</motion.p>


      <motion.div
        style={{
          height: '4px', // Adjust the height as needed
          backgroundColor: '#65cafd', // Set the color of the line
          width: '100%', // Make it span the full width
          marginBottom: '20px', // Space between the line and content
        }}
        initial={{ width: 0 }} // Start with zero width
        animate={{ width: '100%' }} // Animate to full width
        transition={{ duration: 1 }} // Transition duration
      ></motion.div>

      <div className="consortium-container">
        <motion.h1
          className='H1'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Join the Minority Rights Organizations Consortium
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The registration process will take approximately 20 minutes. Please have all necessary documents and information ready before you begin.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          In order for us to maintain our credibility, we have to be strict on membership and ensure that everyone who becomes a member is doing what they say they are doing. Membership of the Minority Rights Organizations Consortium requires that your agency must be a Minority-led Organization, currently undertaking activities, direct operations and/or support to partner NGOs in Somalia.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          At your convenience, you may print the online registration checklist to be sure you have all necessary materials before starting the registration process.
        </motion.p>

        <motion.h2
          style={{ color: '#D15D51', fontSize: '1rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
         Required Documents
         
        </motion.h2>
        {/* <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            href="/assets/document.pdf" // Relative path to your document
            download // Enables download functionality
            style={{
              backgroundColor: '#D15D51',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Download Registration Checklist
          </a>
        </motion.div>
      </div> */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          The following documents are required for submission. Each should be signed, scanned, and ready to upload before you begin the registration process. Only DOC, DOCX, and PDF formats will be accepted.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
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
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Required Information
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Please provide the following information:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
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
        </motion.ul>

        <motion.p
          style={{ color: 'orange' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          I confirm that I have read and understood the requirements for registering with the MROs Consortium. I understand that all information submitted during the registration process will be held in confidence and can only be accessed by the MROs Consortium Secretariat.
        </motion.p>

        {/* Registration buttons and links */}
        <div style={{ marginTop: '20px' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
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
          </motion.div>
        </div>
      </div>

      {/* Sleek Container */}
      <div className="sleek-container">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Why Join Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Formed in 1999, we bring together local and international NGOs working in Somalia in order to:
        </motion.p>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <li>Share information and analysis on key issues</li>
          <li>Facilitate closer coordination and joint advocacy</li>
          <li>Improve representation with stakeholders including local authorities, the UN system, and donors</li>
        </motion.ul>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          Together, we can share resources, knowledge, and experiences that will help us all succeed in our missions.
          Join us in making a difference today!
        </motion.p>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <img 
            src="/map.png"
            alt="Consortium" 
            style={{ width: '100%', height: 'auto', borderRadius: '1px' }} 
          />
        </motion.div>

        {/* Action buttons */}
        <div style={{ marginTop: '20px' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
          >
            <img 
              src="/help.jpg"
              alt="Consortium" 
              style={{ width: '100%', height: 'auto', borderRadius: '1px', marginBottom: "20px" }} 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <img 
              src="/readinguncle.jpg"
              alt="Consortium" 
              style={{ width: '100%', height: 'auto', borderRadius: '1px', marginBottom: "20px" }} 
            />
          </motion.div>
          
          {/* New Text Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.1 }}
          >
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
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Consortium;
