// import   'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import Footer from './Footer'; // Import your Footer component
// import './ConsortiumRegistrationForm.css';

// const ConsortiumRegistrationForm = () => {
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent the default form submission
//     // Navigate to the MemberAccountAdministratorForm route
//     navigate('/member-account-administrator');
//   };

//   return (
//     <div className="consortium-form-page">
//       <div className="consortium-form-container">
//         <h1>JOIN THE CONSORTIUM</h1>
//         <p>All fields are required unless stated otherwise.</p>

//         <form onSubmit={handleSubmit}> {/* Wrap the form elements with <form> */}
//           <h2>Agency Details</h2>
//           <label htmlFor="districts">Please select the districts in Somalia/Somaliland:</label>
//           <select id="districts" multiple>
//             <option value="district1">District 1</option>
//             <option value="district2">District 2</option>
//             {/* Add other districts here */}
//           </select>

//           <label htmlFor="activeYear">Which year did the agency become active in Somalia/Somaliland?</label>
//           <input type="text" id="activeYear" name="activeYear" required />

//           <label htmlFor="partnerNGOs">Please list any partner NGOs in Somalia/Somaliland:</label>
//           <textarea id="partnerNGOs" name="partnerNGOs" placeholder="If none, please state none." required></textarea>

//           <label htmlFor="internationalStaff">Number of international staff:</label>
//           <input type="number" id="internationalStaff" name="internationalStaff" required />

//           <label htmlFor="nationalStaff">Number of national staff:</label>
//           <input type="number" id="nationalStaff" name="nationalStaff" required />

//           <label htmlFor="neighbouringCountries">Agency presence in neighbouring countries:</label>
//           <select id="neighbouringCountries" multiple>
//             <option value="djibouti">Djibouti</option>
//             <option value="eritrea">Eritrea</option>
//             <option value="ethiopia">Ethiopia</option>
//             <option value="kenya">Kenya</option>
//             <option value="yemen">Yemen</option>
//           </select>

//           <label htmlFor="programPlans">What are the agency's plans for programmes in 2024?</label>
//           <textarea id="programPlans" name="programPlans" required></textarea>

//           <label htmlFor="mainDonors">Main donors for funding in 2024 (one per line):</label>
//           <textarea id="mainDonors" name="mainDonors" required></textarea>

//           <label htmlFor="annualBudget">Agency's annual budget for Somalia/Somaliland:</label>
//           <input type="text" id="annualBudget" name="annualBudget" required />

//           <label htmlFor="membershipType">Membership Type:</label>
//           <select id="membershipType" name="membershipType" required>
//             <option value="full">Full Membership</option>
//             {/* Add other membership types here */}
//           </select>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <Footer /> {/* Add the Footer component here */}
//     </div>
//   );
// };

// export default ConsortiumRegistrationForm;


import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Footer from './Footer'; // Import your Footer component
import './ConsortiumRegistrationForm.css';

const ConsortiumRegistrationForm = () => {
  // State for form data
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

  // State for form validation
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false); // Track if form is valid

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation
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

    // Check if there are any errors
    const isValid = Object.keys(formErrors).length === 0;
    setIsFormValid(isValid); // Update the form validity state

    return isValid;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Validate the form
    if (validateForm()) {
      // If validation passes, set form as valid
      console.log('Form is valid. You can now navigate to the next page.');
    } else {
      console.log('Validation failed. Please fill in the required fields.');
    }
  };

  return (
    <div className="consortium-form-page">
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

          {/* Render Link component if form is valid */}
          {isFormValid ? (
            <Link
              to="/member-account-administrator"
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
            >
              Submit
            </button>
          )}
        </form>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default ConsortiumRegistrationForm;
