// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import jsPDF from 'jspdf';
// import './Registration.css';
// import Footer from './Footer';
// import ProgressBar from './ProgressBar'; // Import the ProgressBar component

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
//   const [currentStep, setCurrentStep] = useState(1); // Initialize current step
//   const totalSteps = 6; // Define total steps
//   const navigate = useNavigate();
//   const stepNames = ['Registration', 'Personal Details', 'Consortium Registration', 'Contact Details', 'Agency Details'];

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
//     doc.setFont('Helvetica', 'bold');
//     doc.setFontSize(16);
//     doc.text('Registration Details', 105, 20, { align: 'center' });
//     doc.setFont('Helvetica', 'normal');
//     doc.setFontSize(12);

//     const textLines = [
//       { label: 'Full Name:', value: formData.fullName },
//       { label: 'Acronym:', value: formData.acronym || 'N/A' },
//       { label: 'Description:', value: formData.description },
//       { label: 'Mission Statement:', value: formData.missionStatement },
//       { label: 'Website:', value: formData.website },
//       { label: 'Are you an NGO?', value: formData.isNGO ? 'Yes' : 'No' },
//       { label: 'Years Operational:', value: formData.yearsOperational },
//       { label: 'Reason for Joining:', value: formData.reasonToJoin },
//       { label: 'Willing to participate in the consortium?', value: formData.participatesInConsortium ? 'Yes' : 'No' },
//       { label: 'Understands the principles outlined?', value: formData.understandsPrinciples ? 'Yes' : 'No' },
//     ];

//     let yPosition = 40;
//     const lineSpacing = 10;

//     textLines.forEach(({ label, value }) => {
//       const splitText = doc.splitTextToSize(`${label} ${value}`, 180);
//       doc.text(splitText, 10, yPosition);
//       yPosition += splitText.length * lineSpacing;
//     });

//     doc.save('Registration_Details.pdf');
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
//       const response = await axios.post(
//         'https://mro-consortium-backend-production.up.railway.app/agency',
//         {
//           full_name: formData.fullName,
//           acronym: formData.acronym,
//           description: formData.description,
//           mission_statement: formData.missionStatement,
//           website: formData.website,
//           is_ngo: formData.isNGO,
//           years_operational: formData.yearsOperational,
//           reason_for_joining: formData.reasonToJoin,
//           willing_to_participate: formData.participatesInConsortium,
//           commitment_to_principles: formData.understandsPrinciples,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200 || response.status === 201) {
//         setSuccess(true);
//         generatePDF(); 
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
//         setCurrentStep((prev) => prev + 1); 
//         navigate('/personal-details');
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
//     <div className="registration-container">
//       <ProgressBar currentStep={currentStep} totalSteps={totalSteps} stepNames={stepNames} />
//       <div className="registration-form-container">
//         <h1>Basic Information</h1>
//         <p>All fields are required unless stated otherwise.</p>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Organization Full Name:</label>
//             <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Acronym Name:</label>
//             <input type="text" name="acronym" value={formData.acronym} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label>Key Activities and Programs:</label>
//             <p>(Provide an overview of the main activities and programs your organization is involved in, particularly those related to minority rights.)</p>
//             <textarea name="description" value={formData.description} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Mission Statement:</label>
//             <p>(Please describe the primary goals and mission of your organization, focusing on its relevance to minority rights.)</p>
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
//             <p>(Explain how membership will benefit your organization and how you plan to contribute to the consortium’s goals.)</p>
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
//           {success && <p style={{ color: 'green' }}>Submission successful!</p>}
//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Registration;



import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import './Registration.css';
import Footer from './Footer';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component

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
  const [currentStep, setCurrentStep] = useState(1); // Initialize current step
  const totalSteps = 6; // Define total steps
  const navigate = useNavigate();
  const stepNames = ['Registration', 'Personal Details', 'Consortium Registration', 'Contact Details', 'Agency Details'];

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
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Registration Details', 105, 20, { align: 'center' });
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(12);

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

    let yPosition = 40;
    const lineSpacing = 10;

    textLines.forEach(({ label, value }) => {
      const splitText = doc.splitTextToSize(`${label} ${value}`, 180);
      doc.text(splitText, 10, yPosition);
      yPosition += splitText.length * lineSpacing;
    });

    doc.save('Registration_Details.pdf');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);
  
    // Validation to ensure all required fields are filled
    if (!formData.fullName || !formData.description || !formData.missionStatement || !formData.website || !formData.yearsOperational || !formData.reasonToJoin) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }
  
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage
  
      const response = await axios.post(
        'https://mro-consortium-backend-production.up.railway.app/agency',
        {
          full_name: formData.fullName,
          acronym: formData.acronym || '', // Default to empty string if not provided
          description: formData.description,
          mission_statement: formData.missionStatement,
          website: formData.website,
          is_ngo: formData.isNGO,
          years_operational: formData.yearsOperational,
          reason_for_joining: formData.reasonToJoin,
          willing_to_participate: formData.participatesInConsortium,
          commitment_to_principles: formData.understandsPrinciples,
          user_id: userId, // Assuming the user is logged in, use userId from localStorage
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
        generatePDF();
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
        setCurrentStep((prev) => prev + 1);
        navigate('/personal-details');
      } else {
        setError('Registration failed');
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response.data); // Logs the response from the backend
        if (error.response.status === 401) {
          setError('Unauthorized access. Please log in.');
          navigate('/login');
        } else if (error.response.status === 422) {
          setError('Unprocessable Content: Please check the input fields and try again.');
        } else {
          setError('An error occurred. Please try again.');
        }
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="registration-container">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} stepNames={stepNames} />
      <div className="registration-form-container">
        <h1>Basic Information</h1>
        <p>All fields are required unless stated otherwise.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Organization Full Name:</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Acronym Name:</label>
            <input type="text" name="acronym" value={formData.acronym} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Key Activities and Programs:</label>
            <p>(Provide an overview of the main activities and programs your organization is involved in, particularly those related to minority rights.)</p>
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Mission Statement:</label>
            <p>(Please describe the primary goals and mission of your organization, focusing on its relevance to minority rights.)</p>
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
            <p>(Explain how membership will benefit your organization and how you plan to contribute to the consortium’s goals.)</p>
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
          {success && <p style={{ color: 'green' }}>Submission successful!</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
