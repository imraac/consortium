import   'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Footer from './Footer'; // Import your Footer component
import './ConsortiumRegistrationForm.css';

const ConsortiumRegistrationForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Navigate to the MemberAccountAdministratorForm route
    navigate('/member-account-administrator');
  };

  return (
    <div className="consortium-form-page">
      <div className="consortium-form-container">
        <h1>JOIN THE CONSORTIUM</h1>
        <p>All fields are required unless stated otherwise.</p>

        <form onSubmit={handleSubmit}> {/* Wrap the form elements with <form> */}
          <h2>Agency Details</h2>
          <label htmlFor="districts">Please select the districts in Somalia/Somaliland:</label>
          <select id="districts" multiple>
            <option value="district1">District 1</option>
            <option value="district2">District 2</option>
            {/* Add other districts here */}
          </select>

          <label htmlFor="activeYear">Which year did the agency become active in Somalia/Somaliland?</label>
          <input type="text" id="activeYear" name="activeYear" required />

          <label htmlFor="partnerNGOs">Please list any partner NGOs in Somalia/Somaliland:</label>
          <textarea id="partnerNGOs" name="partnerNGOs" placeholder="If none, please state none." required></textarea>

          <label htmlFor="internationalStaff">Number of international staff:</label>
          <input type="number" id="internationalStaff" name="internationalStaff" required />

          <label htmlFor="nationalStaff">Number of national staff:</label>
          <input type="number" id="nationalStaff" name="nationalStaff" required />

          <label htmlFor="neighbouringCountries">Agency presence in neighbouring countries:</label>
          <select id="neighbouringCountries" multiple>
            <option value="djibouti">Djibouti</option>
            <option value="eritrea">Eritrea</option>
            <option value="ethiopia">Ethiopia</option>
            <option value="kenya">Kenya</option>
            <option value="yemen">Yemen</option>
          </select>

          <label htmlFor="programPlans">What are the agency's plans for programmes in 2024?</label>
          <textarea id="programPlans" name="programPlans" required></textarea>

          <label htmlFor="mainDonors">Main donors for funding in 2024 (one per line):</label>
          <textarea id="mainDonors" name="mainDonors" required></textarea>

          <label htmlFor="annualBudget">Agency's annual budget for Somalia/Somaliland:</label>
          <input type="text" id="annualBudget" name="annualBudget" required />

          <label htmlFor="membershipType">Membership Type:</label>
          <select id="membershipType" name="membershipType" required>
            <option value="full">Full Membership</option>
            {/* Add other membership types here */}
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default ConsortiumRegistrationForm;
