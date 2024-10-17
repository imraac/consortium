

// import { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Registration.css';
// import Footer from './Footer';

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
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

//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     }
//     window.scrollTo(0, 0);
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(false);
//     setLoading(true);

//     if (!formData.fullName || !formData.description || !formData.missionStatement || !formData.website || !formData.yearsOperational || !formData.reasonToJoin) {
//       setError('Please fill in all required fields.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post('http://127.0.0.1:5000/agency', {
//         full_name: formData.fullName,
//         acronym: formData.acronym,
//         description: formData.description,
//         mission_statement: formData.missionStatement,
//         website: formData.website,
//         is_ngo: formData.isNGO,
//         years_operational: formData.yearsOperational,
//         reason_for_joining: formData.reasonToJoin,
//         willing_to_participate: formData.participatesInConsortium,
//         commitment_to_principles: formData.understandsPrinciples,
//       }, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 200 || response.status === 201) {
//         setSuccess(true);
//         // Reset the form after successful submission
//         setFormData({
//           fullName: '',
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
//       } else {
//         setError('Registration failed');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setError('Unauthorized access. Please log in.');
//         navigate('/login');
//       } else {
//         setError('An error occurred. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div className="registration-form-container">
//         <h1>Basic Information</h1>
//         <p>All fields are required unless stated otherwise.</p>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Full Name:</label>
//             <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Acronym:</label>
//             <input type="text" name="acronym" value={formData.acronym} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label>Description:</label>
//             <textarea name="description" value={formData.description} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Mission Statement:</label>
//             <textarea name="missionStatement" value={formData.missionStatement} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Website:</label>
//             <input type="url" name="website" value={formData.website} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>
//               <input type="checkbox" name="isNGO" checked={formData.isNGO} onChange={handleChange} />
//               Are you an NGO?
//             </label>
//           </div>
//           <div className="form-group">
//             <label>Years Operational:</label>
//             <input type="text" name="yearsOperational" value={formData.yearsOperational} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Reason for Joining:</label>
//             <textarea name="reasonToJoin" value={formData.reasonToJoin} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>
//               <input type="checkbox" name="participatesInConsortium" checked={formData.participatesInConsortium} onChange={handleChange} />
//               Willing to participate in the consortium?
//             </label>
//           </div>
//           <div className="form-group">
//             <label>
//               <input type="checkbox" name="understandsPrinciples" checked={formData.understandsPrinciples} onChange={handleChange} />
//               Understands the principles outlined?
//             </label>
//           </div>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           {success && <p style={{ color: 'green' }}>Basic Information
//         submitted! Press Next to go to the other page</p>}
//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
//           {success && (
//             <button 
//               type="button" 
//               onClick={() => navigate('/personal-details')} 
//               className="next-button"
//             >
//              next 
//             </button>
//           )}
//         </form>
//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Registration;




// import { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import jsPDF from 'jspdf';
// import './Registration.css';
// import Footer from './Footer';

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
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

//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     }
//     window.scrollTo(0, 0);
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();

//     // Set font size and add text
//     doc.setFontSize(12);
//     doc.text("Registration Details", 10, 10);
    
//     // Adding form data to the PDF
//     const textLines = [
//       `Full Name: ${formData.fullName}`,
//       `Acronym: ${formData.acronym || 'N/A'}`,
//       `Description: ${formData.description}`,
//       `Mission Statement: ${formData.missionStatement}`,
//       `Website: ${formData.website}`,
//       `Are you an NGO? ${formData.isNGO ? 'Yes' : 'No'}`,
//       `Years Operational: ${formData.yearsOperational}`,
//       `Reason for Joining: ${formData.reasonToJoin}`,
//       `Willing to participate in the consortium? ${formData.participatesInConsortium ? 'Yes' : 'No'}`,
//       `Understands the principles outlined? ${formData.understandsPrinciples ? 'Yes' : 'No'}`,
//     ];

//     textLines.forEach((line, index) => {
//       doc.text(line, 10, 20 + (index * 10)); // Adjust Y position for each line
//     });

//     // Save the PDF
//     doc.save('registration-details.pdf');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(false);
//     setLoading(true);

//     if (!formData.fullName || !formData.description || !formData.missionStatement || !formData.website || !formData.yearsOperational || !formData.reasonToJoin) {
//       setError('Please fill in all required fields.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post('http://127.0.0.1:5000/agency', {
//         full_name: formData.fullName,
//         acronym: formData.acronym,
//         description: formData.description,
//         mission_statement: formData.missionStatement,
//         website: formData.website,
//         is_ngo: formData.isNGO,
//         years_operational: formData.yearsOperational,
//         reason_for_joining: formData.reasonToJoin,
//         willing_to_participate: formData.participatesInConsortium,
//         commitment_to_principles: formData.understandsPrinciples,
//       }, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 200 || response.status === 201) {
//         setSuccess(true);
//         generatePDF(); // Generate PDF after successful submission
//         // Reset the form after successful submission
//         setFormData({
//           fullName: '',
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
//       } else {
//         setError('Registration failed');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setError('Unauthorized access. Please log in.');
//         navigate('/login');
//       } else {
//         setError('An error occurred. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div className="registration-form-container">
//         <h1>Basic Information</h1>
//         <p>All fields are required unless stated otherwise.</p>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Full Name:</label>
//             <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Acronym:</label>
//             <input type="text" name="acronym" value={formData.acronym} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label>Description:</label>
//             <textarea name="description" value={formData.description} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Mission Statement:</label>
//             <textarea name="missionStatement" value={formData.missionStatement} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Website:</label>
//             <input type="url" name="website" value={formData.website} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>
//               <input type="checkbox" name="isNGO" checked={formData.isNGO} onChange={handleChange} />
//               Are you an NGO?
//             </label>
//           </div>
//           <div className="form-group">
//             <label>Years Operational:</label>
//             <input type="text" name="yearsOperational" value={formData.yearsOperational} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Reason for Joining:</label>
//             <textarea name="reasonToJoin" value={formData.reasonToJoin} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>
//               <input type="checkbox" name="participatesInConsortium" checked={formData.participatesInConsortium} onChange={handleChange} />
//               Willing to participate in the consortium?
//             </label>
//           </div>
//           <div className="form-group">
//             <label>
//               <input type="checkbox" name="understandsPrinciples" checked={formData.understandsPrinciples} onChange={handleChange} />
//               Understands the principles outlined?
//             </label>
//           </div>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           {success && <p style={{ color: 'green' }}>Basic Information submitted! Press Next to go to the other page.</p>}
//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
//           {success && (
//             <button 
//               type="button" 
//               onClick={() => navigate('/personal-details')} 
//               className="next-button"
//             >
//               Next 
//             </button>
//           )}
//         </form>
//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Registration;



import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import './Registration.css';
import Footer from './Footer';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
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

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
    window.scrollTo(0, 0);
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Set font and title style
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Registration Details', 105, 20, { align: 'center' }); // Center the title

    // Reset font and set up the body text style
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(12);

    // Define the text to include in the PDF, organized by sections
    const textLines = [
      { label: 'Full Name:', value: formData.fullName },
      { label: 'Acronym:', value: formData.acronym || 'N/A' },
      { label: 'Description:', value: formData.description },
      { label: 'Mission Statement:', value: formData.missionStatement },
      { label: 'Website:', value: formData.website },
      { label: 'Are you an NGO?', value: formData.isNGO ? 'Yes' : 'No' },
      { label: 'Years Operational:', value: formData.yearsOperational },
      { label: 'Reason for Joining:', value: formData.reasonToJoin },
      { label: 'Willing to participate in the consortium?', value: formData.participatesInConsortium ? 'Yes' : 'No' },
      { label: 'Understands the principles outlined?', value: formData.understandsPrinciples ? 'Yes' : 'No' },
    ];

    // Adjust Y position dynamically for each line
    let yPosition = 40; // Initial Y position after the title
    const lineSpacing = 10; // Space between each line

    textLines.forEach(({ label, value }) => {
      const splitText = doc.splitTextToSize(`${label} ${value}`, 180); // Auto-wrap text if too long
      doc.text(splitText, 10, yPosition);
      yPosition += splitText.length * lineSpacing; // Adjust Y position based on the number of lines
    });

    // Save the PDF with a specific file name
    doc.save('Registration_Details.pdf');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    if (!formData.fullName || !formData.description || !formData.missionStatement || !formData.website || !formData.yearsOperational || !formData.reasonToJoin) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://127.0.0.1:5000/agency', {
        full_name: formData.fullName,
        acronym: formData.acronym,
        description: formData.description,
        mission_statement: formData.missionStatement,
        website: formData.website,
        is_ngo: formData.isNGO,
        years_operational: formData.yearsOperational,
        reason_for_joining: formData.reasonToJoin,
        willing_to_participate: formData.participatesInConsortium,
        commitment_to_principles: formData.understandsPrinciples,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
        generatePDF(); // Generate PDF after successful submission
        // Reset the form after successful submission
        setFormData({
          fullName: '',
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
      } else {
        setError('Registration failed');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Unauthorized access. Please log in.');
        navigate('/login');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="registration-form-container">
        <h1>Basic Information</h1>
        <p>All fields are required unless stated otherwise.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label> Organization Full Name:</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Acronym Name:</label>
            <input type="text" name="acronym" value={formData.acronym} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Key Activities and Programs:</label>
            <label>(Provide an overview of the main activities and programs your organization is involved in, particularly those related to minority rights.)</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Mission Statement:  </label>
            <label>(Please describe the primary goals and mission of your organization, focusing on its relevance to minority rights.)</label>
            <textarea name="missionStatement" value={formData.missionStatement} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Website:</label>
            <input type="url" name="website" value={formData.website} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="isNGO" checked={formData.isNGO} onChange={handleChange} />
              Are you an NGO?
            </label>
          </div>
          <div className="form-group">
            <label>Years Operational:</label>
            <input type="text" name="yearsOperational" value={formData.yearsOperational} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Reason for Joining:</label>
            <label>(Explain how membership will benefit your organization and how you plan to contribute to the consortium’s goals.)</label>
            <textarea name="reasonToJoin" value={formData.reasonToJoin} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="participatesInConsortium" checked={formData.participatesInConsortium} onChange={handleChange} />
              Willing to participate in the consortium?
            </label>
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="understandsPrinciples" checked={formData.understandsPrinciples} onChange={handleChange} />
              Understands the principles outlined?
            </label>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>Basic Information submitted! Press Next to go to the other page.</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          {success && (
            <button 
              type="button" 
              onClick={() => navigate('/personal-details')} 
              className="next-button"
            >
              Next 
            </button>
          )}
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
