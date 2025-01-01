



// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; 
// import Footer from './Footer'; // Import your Footer component
// import './ConsortiumRegistrationForm.css';

// // Agency details page
// const ConsortiumRegistrationForm = () => {
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   // State for form data
//   const [formData, setFormData] = useState({
//     activeYear: '',
//     partnerNGOs: '',
//     internationalStaff: '',
//     nationalStaff: '',
//     programPlans: '',
//     mainDonors: '',
//     annualBudget: '',
//     membershipType: '',
//   });

//   // State for form validation
//   const [errors, setErrors] = useState({});
//   const [isFormValid, setIsFormValid] = useState(false); // Track if form is valid
//   const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
//   const [submissionMessage, setSubmissionMessage] = useState(''); // Track submission message

//   // Handle form data changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Form validation
//   const validateForm = () => {
//     let formErrors = {};
//     if (!formData.activeYear) formErrors.activeYear = 'Active year is required';
//     if (!formData.partnerNGOs) formErrors.partnerNGOs = 'Partner NGOs are required';
//     if (!formData.internationalStaff) formErrors.internationalStaff = 'Number of international staff is required';
//     if (!formData.nationalStaff) formErrors.nationalStaff = 'Number of national staff is required';
//     if (!formData.programPlans) formErrors.programPlans = 'Program plans are required';
//     if (!formData.mainDonors) formErrors.mainDonors = 'Main donors are required';
//     if (!formData.annualBudget) formErrors.annualBudget = 'Annual budget is required';
   
//     setErrors(formErrors);

//     // Check if there are any errors
//     const isValid = Object.keys(formErrors).length === 0;
//     setIsFormValid(isValid); // Update the form validity state

//     return isValid;
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent the default form submission

//     // Validate the form
//     if (validateForm()) {
//       setIsSubmitting(true); // Set submitting state

//       const token = localStorage.getItem('token'); // Retrieve your JWT token
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       };

//       try {
//         const response = await fetch('http://127.0.0.1:5000/consortium', {
//           method: 'POST',
//           headers: config.headers,
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           setSubmissionMessage('Form submitted successfully!');
//           setIsFormValid(false); // Reset form validity
//           setFormData({
//             activeYear: '',
//             partnerNGOs: '',
//             internationalStaff: '',
//             nationalStaff: '',
//             programPlans: '',
//             mainDonors: '',
//             annualBudget: '',
//             membershipType: '',
//           });
//           navigate('/contact-details'); // Navigate to the contact-details page on success
//         } else {
//           const errorData = await response.json();
//           setSubmissionMessage(`Submission failed: ${errorData.message}`);
//         }
//       } catch (error) {
//         setSubmissionMessage(`Error: ${error.message}`);
//       } finally {
//         setIsSubmitting(false); // Reset submitting state
//       }
//     } else {
//       setSubmissionMessage('Validation failed. Please fill in the required fields.');
//     }
//   };

//   return (
//     <div className="consortium-form-page">
//       <div className="consortium-form-container">
//         <h1>JOIN THE CONSORTIUM</h1>
//         <p>All fields are required unless stated otherwise.</p>

//         <form onSubmit={handleSubmit}>
//           <h2>Agency Details</h2>

//           <label htmlFor="districts">Please select the districts in Somalia/Somaliland:</label>
//           <select id="districts" multiple>
//             <option value="district1">District 1</option>
//             <option value="district2">District 2</option>
//             {/* Add other districts here */}
//           </select>

//           <label htmlFor="activeYear">Which year did the agency become active in Somalia/Somaliland?</label>
//           <input
//             type="text"
//             id="activeYear"
//             name="activeYear"
//             value={formData.activeYear}
//             onChange={handleChange}
//             required
//           />
//           {errors.activeYear && <p className="error">{errors.activeYear}</p>}

//           <label htmlFor="partnerNGOs">Please list any partner NGOs in Somalia/Somaliland:</label>
//           <textarea
//             id="partnerNGOs"
//             name="partnerNGOs"
//             value={formData.partnerNGOs}
//             onChange={handleChange}
//             placeholder="If none, please state none."
//             required
//           />
//           {errors.partnerNGOs && <p className="error">{errors.partnerNGOs}</p>}

//           <label htmlFor="internationalStaff">Number of international staff:</label>
//           <input
//             type="number"
//             id="internationalStaff"
//             name="internationalStaff"
//             value={formData.internationalStaff}
//             onChange={handleChange}
//             required
//           />
//           {errors.internationalStaff && <p className="error">{errors.internationalStaff}</p>}

//           <label htmlFor="nationalStaff">Number of national staff:</label>
//           <input
//             type="number"
//             id="nationalStaff"
//             name="nationalStaff"
//             value={formData.nationalStaff}
//             onChange={handleChange}
//             required
//           />
//           {errors.nationalStaff && <p className="error">{errors.nationalStaff}</p>}

//           <label htmlFor="neighbouringCountries">Agency presence in neighbouring countries:</label>
//           <select id="neighbouringCountries" multiple>
//             <option value="djibouti">Djibouti</option>
//             <option value="eritrea">Eritrea</option>
//             <option value="ethiopia">Ethiopia</option>
//             <option value="kenya">Kenya</option>
//             <option value="yemen">Yemen</option>
//           </select>

//           <label htmlFor="programPlans">What are the agency's plans for programmes in 2024?</label>
//           <textarea
//             id="programPlans"
//             name="programPlans"
//             value={formData.programPlans}
//             onChange={handleChange}
//             required
//           />
//           {errors.programPlans && <p className="error">{errors.programPlans}</p>}

//           <label htmlFor="mainDonors">Main donors for funding in 2024 (one per line):</label>
//           <textarea
//             id="mainDonors"
//             name="mainDonors"
//             value={formData.mainDonors}
//             onChange={handleChange}
//             required
//           />
//           {errors.mainDonors && <p className="error">{errors.mainDonors}</p>}

//           <label htmlFor="annualBudget">Agency's annual budget for Somalia/Somaliland:</label>
//           <input
//             type="text"
//             id="annualBudget"
//             name="annualBudget"
//             value={formData.annualBudget}
//             onChange={handleChange}
//             required
//           />
//           {errors.annualBudget && <p className="error">{errors.annualBudget}</p>}

//           <label htmlFor="membershipType">Membership Type:</label>
//           <select
//             id="membershipType"
//             name="membershipType"
//             value={formData.membershipType}
//             onChange={handleChange}
//             required
//           >
//             <option value="full">Full Membership</option>
//             {/* Add other membership types here */}
//           </select>
//           {errors.membershipType && <p className="error">{errors.membershipType}</p>}

//           {/* Display submission message */}
//           {submissionMessage && <p className="submission-message">{submissionMessage}</p>}

//           {/* Render Link component if form is valid */}
//           {isFormValid ? (
//             <Link
//               to="/contact-details"
//               className="submit-button"
//               style={{ display: 'inline-block', padding: '10px', backgroundColor: '#4CAF50', color: '#fff', textDecoration: 'none', textAlign: 'center', borderRadius: '5px' }}
//             >
//               Next
//             </Link>
//           ) : (
//             <button
//               type="submit"
//               className="submit-button"
//               style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px', border: 'none' }}
//               disabled={isSubmitting} // Disable button while submitting
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit'}
//             </button>
//           )}
//         </form>
//       </div>
//       <Footer /> {/* Render Footer component */}
//     </div>
//   );
// };

// export default ConsortiumRegistrationForm;



// ConsortiumRegistrationForm.js
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component
import './ConsortiumRegistrationForm.css';

const ConsortiumRegistrationForm = () => {
  const navigate = useNavigate();

  const currentStep = 2;
  const totalSteps = 4;
  const stepNames = ['Registration', 'Personal Details', 'Consortium Registration', 'Contact Details', 'Agency Details'];

  const [formData, setFormData] = useState({
    activeYear: '',
    partnerNGOs: '',
    internationalStaff: '',
    nationalStaff: '',
    programPlans: '',
    mainDonors: '',
    annualBudget: '',
    membershipType: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Token management
  const refreshTokenInterval = 5 * 60 * 1000; // Refresh every 5 minutes
  const getToken = () => localStorage.getItem('token');
  const setToken = (token) => localStorage.setItem('token', token);

  const refreshToken = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/refresh-token', {
        method: 'POST',
        headers: { Authorization: `Bearer ${getToken()}` },
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.newToken);
      } else {
        console.error('Failed to refresh token.');
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(refreshToken, refreshTokenInterval);
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.activeYear) formErrors.activeYear = 'Active year is required';
    if (!formData.partnerNGOs) formErrors.partnerNGOs = 'Partner NGOs are required';
    if (!formData.internationalStaff) formErrors.internationalStaff = 'Number of international staff is required';
    if (!formData.nationalStaff) formErrors.nationalStaff = 'Number of national staff is required';
    if (!formData.programPlans) formErrors.programPlans = 'Program plans are required';
    if (!formData.mainDonors) formErrors.mainDonors = 'Main donors are required';
    if (!formData.annualBudget) formErrors.annualBudget = 'Annual budget is required';

    setErrors(formErrors);
    const isValid = Object.keys(formErrors).length === 0;
    setIsFormValid(isValid);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('http://127.0.0.1:5000/consortium', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmissionMessage('Form submitted successfully!');
          setFormData({
            activeYear: '',
            partnerNGOs: '',
            internationalStaff: '',
            nationalStaff: '',
            programPlans: '',
            mainDonors: '',
            annualBudget: '',
            membershipType: '',
          });
          navigate('/contact-details');
        } else {
          const errorData = await response.json();
          setSubmissionMessage(`Submission failed: ${errorData.message}`);
        }
      } catch (error) {
        setSubmissionMessage(`Error: ${error.message}`);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setSubmissionMessage('Validation failed. Please fill in the required fields.');
    }
  };

  return (
    <div className="consortium-form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} stepNames={stepNames} />
      <div className="consortium-form-container">
        <h1>JOIN THE CONSORTIUM</h1>
        <p>All fields are required unless stated otherwise.</p>

        <form onSubmit={handleSubmit}>
          <h2>Agency Details</h2>

          <label htmlFor="districts">Please select the districts in Somalia/Somaliland:</label>
          <select id="districts" multiple>
            <option value="district1">District 1</option>
            <option value="district2">District 2</option>
            {/* Add other districts here */}
          </select>

          <label htmlFor="activeYear">Which year did the agency become active in Somalia/Somaliland?</label>
          <input
            type="text"
            id="activeYear"
            name="activeYear"
            value={formData.activeYear}
            onChange={handleChange}
            required
          />
          {errors.activeYear && <p className="error">{errors.activeYear}</p>}

          <label htmlFor="partnerNGOs">Please list any partner NGOs in Somalia/Somaliland:</label>
          <textarea
            id="partnerNGOs"
            name="partnerNGOs"
            value={formData.partnerNGOs}
            onChange={handleChange}
            placeholder="If none, please state none."
            required
          />
          {errors.partnerNGOs && <p className="error">{errors.partnerNGOs}</p>}

          <label htmlFor="internationalStaff">Number of international staff:</label>
          <input
            type="number"
            id="internationalStaff"
            name="internationalStaff"
            value={formData.internationalStaff}
            onChange={handleChange}
            required
          />
          {errors.internationalStaff && <p className="error">{errors.internationalStaff}</p>}

          <label htmlFor="nationalStaff">Number of national staff:</label>
          <input
            type="number"
            id="nationalStaff"
            name="nationalStaff"
            value={formData.nationalStaff}
            onChange={handleChange}
            required
          />
          {errors.nationalStaff && <p className="error">{errors.nationalStaff}</p>}

          <label htmlFor="neighbouringCountries">Agency presence in neighbouring countries:</label>
          <select id="neighbouringCountries" multiple>
            <option value="djibouti">Djibouti</option>
            <option value="eritrea">Eritrea</option>
            <option value="ethiopia">Ethiopia</option>
            <option value="kenya">Kenya</option>
            <option value="yemen">Yemen</option>
          </select>

          <label htmlFor="programPlans">What are the agency's plans for programmes in 2024?</label>
          <textarea
            id="programPlans"
            name="programPlans"
            value={formData.programPlans}
            onChange={handleChange}
            required
          />
          {errors.programPlans && <p className="error">{errors.programPlans}</p>}

          <label htmlFor="mainDonors">Main donors for funding in 2024 (one per line):</label>
          <textarea
            id="mainDonors"
            name="mainDonors"
            value={formData.mainDonors}
            onChange={handleChange}
            required
          />
          {errors.mainDonors && <p className="error">{errors.mainDonors}</p>}

          <label htmlFor="annualBudget">Agency's annual budget for Somalia/Somaliland:</label>
          <input
            type="text"
            id="annualBudget"
            name="annualBudget"
            value={formData.annualBudget}
            onChange={handleChange}
            required
          />
          {errors.annualBudget && <p className="error">{errors.annualBudget}</p>}

          <label htmlFor="membershipType">Membership Type:</label>
          <select
            id="membershipType"
            name="membershipType"
            value={formData.membershipType}
            onChange={handleChange}
            required
          >
            <option value="full">Full Membership</option>
            {/* Add other membership types here */}
          </select>
          {errors.membershipType && <p className="error">{errors.membershipType}</p>}

          {submissionMessage && <p className="submission-message">{submissionMessage}</p>}

          {isFormValid ? (
            <Link
              to="/contact-details"
              className="submit-button"
              style={{ display: 'inline-block', padding: '10px', backgroundColor: '#4CAF50', color: '#fff', textDecoration: 'none', textAlign: 'center', borderRadius: '5px' }}
            >
              Next
            </Link>
          ) : (
            <button
              type="submit"
              className="submit-button"
              style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px', border: 'none' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ConsortiumRegistrationForm;
