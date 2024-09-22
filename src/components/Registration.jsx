// import { useState } from 'react';
// import './Registration.css';
// import Footer from "./Footer";

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     agencyName: '',
//     acronym: '',
//     description: '',
//     missionStatement: '',
//     website: '',
//     isNGO: false,
//     yearsOperational: '',
//     reasonToJoin: '',
//     participatesInConsortium: false,
//     understandsPrinciples: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check for required fields
//     if (!formData.agencyName || !formData.description || !formData.missionStatement || !formData.website || !formData.yearsOperational || !formData.reasonToJoin) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     try {
//       const response = await fetch('/api/registration', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Registration successful:', result);
//         // Reset form data
//         setFormData({
//           agencyName: '',
//           acronym: '',
//           description: '',
//           missionStatement: '',
//           website: '',
//           isNGO: false,
//           yearsOperational: '',
//           reasonToJoin: '',
//           participatesInConsortium: false,
//           understandsPrinciples: false,
//         });
//         // Redirect to Contact Details page
//         window.location.href = '/contact-details';
//       } else {
//         console.error('Registration failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="registration-form-container">
//         <h1></h1>
//         <p>All fields are required unless stated otherwise.</p>
//         <h2>Basic Information</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="agencyName">Full name of agency:</label>
//           <input type="text" id="agencyName" name="agencyName" value={formData.agencyName} onChange={handleChange} required />

//           <label htmlFor="acronym">Acronym (optional):</label>
//           <input type="text" id="acronym" name="acronym" value={formData.acronym} onChange={handleChange} />

//           <label htmlFor="description">Brief description of agency:</label>
//           <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />

//           <label htmlFor="missionStatement">Mission Statement:</label>
//           <textarea id="missionStatement" name="missionStatement" value={formData.missionStatement} onChange={handleChange} required />

//           <label htmlFor="website">Website:</label>
//           <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} required />

//           <label>Is your agency a non-governmental organisation (NGO)?</label>
//           <div>
//             <input type="checkbox" id="isNGO" name="isNGO" checked={formData.isNGO} onChange={handleChange} />
//             <label htmlFor="isNGO">Yes</label>
//           </div>

//           <label htmlFor="yearsOperational">Number of years operational in Somalia/Somaliland:</label>
//           <input type="number" id="yearsOperational" name="yearsOperational" value={formData.yearsOperational} onChange={handleChange} required />

//           <label htmlFor="reasonToJoin">Please explain why you would like to join the consortium:</label>
//           <textarea id="reasonToJoin" name="reasonToJoin" value={formData.reasonToJoin} onChange={handleChange} required />

//           <label>Is your agency willing to participate in NGO Consortium activities?</label>
//           <div>
//             <input type="checkbox" id="participatesInConsortium" name="participatesInConsortium" checked={formData.participatesInConsortium} onChange={handleChange} />
//             <label htmlFor="participatesInConsortium">Yes</label>
//           </div>

//           <button type="submit" 
//           onClick={() => window.location.href = '/contact-details'}style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px', border: 'none' }}>
//             NEXT
//           </button>
//           <p>
//             Our agency understands, commits to and agrees to uphold and respect the principles of Independence, Impartiality, and Neutrality.
//           </p>
//           <div>
//             <input type="checkbox" id="understandsPrinciples" name="understandsPrinciples" checked={formData.understandsPrinciples} onChange={handleChange} />
//             <label htmlFor="understandsPrinciples">Yes</label>
//           </div>
//         </form>
//       </div>
//       <Footer /> {/* Add Footer here */}
//     </div>
//   );
// };

// export default Registration;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Registration.css';
import Footer from "./Footer";

const Registration = () => {
  const [formData, setFormData] = useState({
    agencyName: '',
    acronym: '',
    description: '',
    missionStatement: '',
    website: '',
    isNGO: false,
    yearsOperational: '',
    reasonToJoin: '',
    participatesInConsortium: false,
    understandsPrinciples: false,
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for required fields
    if (!formData.agencyName || !formData.description || !formData.missionStatement || !formData.website || !formData.yearsOperational || !formData.reasonToJoin) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Registration successful:', result);
        
        // Reset form data
        setFormData({
          agencyName: '',
          acronym: '',
          description: '',
          missionStatement: '',
          website: '',
          isNGO: false,
          yearsOperational: '',
          reasonToJoin: '',
          participatesInConsortium: false,
          understandsPrinciples: false,
        });

        // Navigate to Contact Details page
        navigate('/contact-details'); // Use navigate instead of window.location.href
      } else {
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="registration-form-container">
        <h1></h1>
        <p>All fields are required unless stated otherwise.</p>
        <h2>Basic Information</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="agencyName">Full name of agency:</label>
          <input type="text" id="agencyName" name="agencyName" value={formData.agencyName} onChange={handleChange} required />

          <label htmlFor="acronym">Acronym (optional):</label>
          <input type="text" id="acronym" name="acronym" value={formData.acronym} onChange={handleChange} />

          <label htmlFor="description">Brief description of agency:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />

          <label htmlFor="missionStatement">Mission Statement:</label>
          <textarea id="missionStatement" name="missionStatement" value={formData.missionStatement} onChange={handleChange} required />

          <label htmlFor="website">Website:</label>
          <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} required />

          <label>Is your agency a non-governmental organisation (NGO)?</label>
          <div>
            <input type="checkbox" id="isNGO" name="isNGO" checked={formData.isNGO} onChange={handleChange} />
            <label htmlFor="isNGO">Yes</label>
          </div>

          <label htmlFor="yearsOperational">Number of years operational in Somalia/Somaliland:</label>
          <input type="number" id="yearsOperational" name="yearsOperational" value={formData.yearsOperational} onChange={handleChange} required />

          <label htmlFor="reasonToJoin">Please explain why you would like to join the consortium:</label>
          <textarea id="reasonToJoin" name="reasonToJoin" value={formData.reasonToJoin} onChange={handleChange} required />

          <label>Is your agency willing to participate in NGO Consortium activities?</label>
          <div>
            <input type="checkbox" id="participatesInConsortium" name="participatesInConsortium" checked={formData.participatesInConsortium} onChange={handleChange} />
            <label htmlFor="participatesInConsortium">Yes</label>
          </div>

          <button type="submit" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px', border: 'none' }}>
            NEXT
          </button>
          <p>
            Our agency understands, commits to and agrees to uphold and respect the principles of Independence, Impartiality, and Neutrality.
          </p>
          <div>
            <input type="checkbox" id="understandsPrinciples" name="understandsPrinciples" checked={formData.understandsPrinciples} onChange={handleChange} />
            <label htmlFor="understandsPrinciples">Yes</label>
          </div>
        </form>
      </div>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Registration;
