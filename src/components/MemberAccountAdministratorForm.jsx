import  { useState } from 'react';
import './MemberAccountAdministratorForm.css';
 // Optional: Create a CSS file for styles

const MemberAccountAdministratorForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    additionalEmails: '',
    registrationEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Member Account Administrator Details:', formData);
    // Handle form submission logic here, such as sending data to the backend
  };

  return (
    <div className="member-account-administrator-container">
      <h1>JOIN THE CONSORTIUM</h1>
      <p>All fields are required unless stated otherwise.</p>
      <h2>Member Account Administrator Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="additionalEmails">Requested number of additional accounts:</label>
        <textarea
          id="additionalEmails"
          name="additionalEmails"
          value={formData.additionalEmails}
          onChange={handleChange}
          placeholder="Enter each email address on a new line. If none, please enter none."
          required
        ></textarea>

        <label htmlFor="registrationEmail">Email copy of registration to email indicated below:</label>
        <input
          type="email"
          id="registrationEmail"
          name="registrationEmail"
          value={formData.registrationEmail}
          onChange={handleChange}
          required
        />

        <p>Please note: The final page will ask you to upload 5 documents. You should have these ready before submitting this page as once submitted you will not be able to restart the process with the same email address.</p>
        <p>The 5 documents are: registration certificate, agency profile, audit report, signed NGO consortium mandate, and signed ICRC/Red Crescent code of conduct. All documents need to be in PDF or Microsoft Word document format.</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MemberAccountAdministratorForm;
