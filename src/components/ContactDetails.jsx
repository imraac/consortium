

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './ContactDetails.css'; // Create a CSS file for styles if needed
// import Footer from './Footer'; // Import your Footer component

// const ContactDetails = () => {
//   const [contactData, setContactData] = useState({
//     registrationDate: '',
//     registrationNumber: '',
//     hqName: '',
//     hqPosition: '',
//     hqEmail: '',
//     hqAddress: '',
//     hqCity: '',
//     hqState: '',
//     hqCountry: '',
//     hqTelephone: '',
//     hqTelephone2: '',
//     hqFax: '',
//     sameAsHQ: false,
//     regionalName: '',
//     regionalPosition: '',
//     regionalEmail: '',
//     regionalAddress: '',
//     regionalCity: '',
//     regionalState: '',
//     regionalCountry: '',
//     regionalTelephone: '',
//     regionalTelephone2: '',
//     regionalFax: '',
//   });

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setContactData({
//       ...contactData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle submission of contact data
//     console.log('Contact Details submitted:', contactData);
    
//     // Navigate to the next route
//     navigate('/consortium-registration');
//   };

//   return (
//     <div className="contact-details-page">
//       <div className="contact-details-container">
//         <form onSubmit={handleSubmit}>
//           <h2>Agency Registration Details</h2>
//           <label htmlFor="registrationDate">Agency date of registration:</label>
//           <input type="date" id="registrationDate" name="registrationDate" value={contactData.registrationDate} onChange={handleChange} required />

//           <label htmlFor="registrationNumber">Agency Registration number (optional):</label>
//           <input type="text" id="registrationNumber" name="registrationNumber" value={contactData.registrationNumber} onChange={handleChange} />

//           <h2>Headquarters Contact Details</h2>
//           <label htmlFor="hqName">Name:</label>
//           <input type="text" id="hqName" name="hqName" value={contactData.hqName} onChange={handleChange} required />

//           <label htmlFor="hqPosition">Position:</label>
//           <input type="text" id="hqPosition" name="hqPosition" value={contactData.hqPosition} onChange={handleChange} required />

//           <label htmlFor="hqEmail">Email:</label>
//           <input type="email" id="hqEmail" name="hqEmail" value={contactData.hqEmail} onChange={handleChange} required />

//           <label htmlFor="hqAddress">Address:</label>
//           <input type="text" id="hqAddress" name="hqAddress" value={contactData.hqAddress} onChange={handleChange} required />

//           <label htmlFor="hqCity">City:</label>
//           <input type="text" id="hqCity" name="hqCity" value={contactData.hqCity} onChange={handleChange} required />

//           <label htmlFor="hqState">State / Province:</label>
//           <input type="text" id="hqState" name="hqState" value={contactData.hqState} onChange={handleChange} required />

//           <label htmlFor="hqCountry">Country:</label>
//           <input type="text" id="hqCountry" name="hqCountry" value={contactData.hqCountry} onChange={handleChange} required />

//           <label htmlFor="hqTelephone">Telephone:</label>
//           <input type="tel" id="hqTelephone" name="hqTelephone" value={contactData.hqTelephone} onChange={handleChange} required />

//           <label htmlFor="hqTelephone2">Telephone 2 (optional):</label>
//           <input type="tel" id="hqTelephone2" name="hqTelephone2" value={contactData.hqTelephone2} onChange={handleChange} />

//           <label htmlFor="hqFax">Fax (optional):</label>
//           <input type="text" id="hqFax" name="hqFax" value={contactData.hqFax} onChange={handleChange} />

//           <h2>Regional Contact Details</h2>
//           <label>
//             <input type="checkbox" name="sameAsHQ" checked={contactData.sameAsHQ} onChange={handleChange} />
//             Same as HQ
//           </label>

//           {!contactData.sameAsHQ && (
//             <>
//               <label htmlFor="regionalName">Name:</label>
//               <input type="text" id="regionalName" name="regionalName" value={contactData.regionalName} onChange={handleChange} required />

//               <label htmlFor="regionalPosition">Position:</label>
//               <input type="text" id="regionalPosition" name="regionalPosition" value={contactData.regionalPosition} onChange={handleChange} required />

//               <label htmlFor="regionalEmail">Email:</label>
//               <input type="email" id="regionalEmail" name="regionalEmail" value={contactData.regionalEmail} onChange={handleChange} required />

//               <label htmlFor="regionalAddress">Address:</label>
//               <input type="text" id="regionalAddress" name="regionalAddress" value={contactData.regionalAddress} onChange={handleChange} required />

//               <label htmlFor="regionalCity">City:</label>
//               <input type="text" id="regionalCity" name="regionalCity" value={contactData.regionalCity} onChange={handleChange} required />

//               <label htmlFor="regionalState">State / Province:</label>
//               <input type="text" id="regionalState" name="regionalState" value={contactData.regionalState} onChange={handleChange} required />

//               <label htmlFor="regionalCountry">Country:</label>
//               <input type="text" id="regionalCountry" name="regionalCountry" value={contactData.regionalCountry} onChange={handleChange} required />

//               <label htmlFor="regionalTelephone">Telephone:</label>
//               <input type="tel" id="regionalTelephone" name="regionalTelephone" value={contactData.regionalTelephone} onChange={handleChange} required />

//               <label htmlFor="regionalTelephone2">Telephone 2 (optional):</label>
//               <input type="tel" id="regionalTelephone2" name="regionalTelephone2" value={contactData.regionalTelephone2} onChange={handleChange} />

//               <label htmlFor="regionalFax">Fax (optional):</label>
//               <input type="text" id="regionalFax" name="regionalFax" value={contactData.regionalFax} onChange={handleChange} />
//             </>
//           )}

//           <button type="submit" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px', border: 'none' }}>
//             NEXT
//           </button>
//         </form>
//       </div>
//       <Footer /> {/* Add the Footer component here */}
//     </div>
//   );
// };

// export default ContactDetails;


import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import './ContactDetails.css'; // Create a CSS file for styles if needed
import Footer from './Footer'; // Import your Footer component

const ContactDetails = () => {
  const [contactData, setContactData] = useState({
    registrationDate: '',
    registrationNumber: '',
    hqName: '',
    hqPosition: '',
    hqEmail: '',
    hqAddress: '',
    hqCity: '',
    hqState: '',
    hqCountry: '',
    hqTelephone: '',
    hqTelephone2: '',
    hqFax: '',
    sameAsHQ: false,
    regionalName: '',
    regionalPosition: '',
    regionalEmail: '',
    regionalAddress: '',
    regionalCity: '',
    regionalState: '',
    regionalCountry: '',
    regionalTelephone: '',
    regionalTelephone2: '',
    regionalFax: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactData({
      ...contactData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission of contact data
    console.log('Contact Details submitted:', contactData);
    // Add any necessary logic to save contactData here
  };

  return (
    <div className="contact-details-page">
      <div className="contact-details-container">
        <form onSubmit={handleSubmit}>
          <h2>Agency Registration Details</h2>
          <label htmlFor="registrationDate">Agency date of registration:</label>
          <input type="date" id="registrationDate" name="registrationDate" value={contactData.registrationDate} onChange={handleChange} required />

          <label htmlFor="registrationNumber">Agency Registration number (optional):</label>
          <input type="text" id="registrationNumber" name="registrationNumber" value={contactData.registrationNumber} onChange={handleChange} />

          <h2>Headquarters Contact Details</h2>
          <label htmlFor="hqName">Name:</label>
          <input type="text" id="hqName" name="hqName" value={contactData.hqName} onChange={handleChange} required />

          <label htmlFor="hqPosition">Position:</label>
          <input type="text" id="hqPosition" name="hqPosition" value={contactData.hqPosition} onChange={handleChange} required />

          <label htmlFor="hqEmail">Email:</label>
          <input type="email" id="hqEmail" name="hqEmail" value={contactData.hqEmail} onChange={handleChange} required />

          <label htmlFor="hqAddress">Address:</label>
          <input type="text" id="hqAddress" name="hqAddress" value={contactData.hqAddress} onChange={handleChange} required />

          <label htmlFor="hqCity">City:</label>
          <input type="text" id="hqCity" name="hqCity" value={contactData.hqCity} onChange={handleChange} required />

          <label htmlFor="hqState">State / Province:</label>
          <input type="text" id="hqState" name="hqState" value={contactData.hqState} onChange={handleChange} required />

          <label htmlFor="hqCountry">Country:</label>
          <input type="text" id="hqCountry" name="hqCountry" value={contactData.hqCountry} onChange={handleChange} required />

          <label htmlFor="hqTelephone">Telephone:</label>
          <input type="tel" id="hqTelephone" name="hqTelephone" value={contactData.hqTelephone} onChange={handleChange} required />

          <label htmlFor="hqTelephone2">Telephone 2 (optional):</label>
          <input type="tel" id="hqTelephone2" name="hqTelephone2" value={contactData.hqTelephone2} onChange={handleChange} />

          <label htmlFor="hqFax">Fax (optional):</label>
          <input type="text" id="hqFax" name="hqFax" value={contactData.hqFax} onChange={handleChange} />

          <h2>Regional Contact Details</h2>
          <label>
            <input type="checkbox" name="sameAsHQ" checked={contactData.sameAsHQ} onChange={handleChange} />
            Same as HQ
          </label>

          {!contactData.sameAsHQ && (
            <>
              <label htmlFor="regionalName">Name:</label>
              <input type="text" id="regionalName" name="regionalName" value={contactData.regionalName} onChange={handleChange} required />

              <label htmlFor="regionalPosition">Position:</label>
              <input type="text" id="regionalPosition" name="regionalPosition" value={contactData.regionalPosition} onChange={handleChange} required />

              <label htmlFor="regionalEmail">Email:</label>
              <input type="email" id="regionalEmail" name="regionalEmail" value={contactData.regionalEmail} onChange={handleChange} required />

              <label htmlFor="regionalAddress">Address:</label>
              <input type="text" id="regionalAddress" name="regionalAddress" value={contactData.regionalAddress} onChange={handleChange} required />

              <label htmlFor="regionalCity">City:</label>
              <input type="text" id="regionalCity" name="regionalCity" value={contactData.regionalCity} onChange={handleChange} required />

              <label htmlFor="regionalState">State / Province:</label>
              <input type="text" id="regionalState" name="regionalState" value={contactData.regionalState} onChange={handleChange} required />

              <label htmlFor="regionalCountry">Country:</label>
              <input type="text" id="regionalCountry" name="regionalCountry" value={contactData.regionalCountry} onChange={handleChange} required />

              <label htmlFor="regionalTelephone">Telephone:</label>
              <input type="tel" id="regionalTelephone" name="regionalTelephone" value={contactData.regionalTelephone} onChange={handleChange} required />

              <label htmlFor="regionalTelephone2">Telephone 2 (optional):</label>
              <input type="tel" id="regionalTelephone2" name="regionalTelephone2" value={contactData.regionalTelephone2} onChange={handleChange} />

              <label htmlFor="regionalFax">Fax (optional):</label>
              <input type="text" id="regionalFax" name="regionalFax" value={contactData.regionalFax} onChange={handleChange} />
            </>
          )}

          <Link to="/consortium-registration">
            <button type="submit" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px', border: 'none' }}>
              NEXT
            </button>
          </Link>
        </form>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default ContactDetails;
