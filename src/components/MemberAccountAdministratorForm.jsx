import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './MemberAccountAdministratorForm.css';

// Contact detail page
const MemberAccountAdministratorForm = () => {
  const [formData, setFormData] = useState({
    agencyRegistrationDate: '',
    agencyRegistrationNumber: '',
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
    regionalSameAsHQ: false,
    regionalName: '',
    regionalPosition: '',
    regionalEmail: '',
    regionalAddress: '',
    regionalCity: '',
    regionalState: '',
    regionalCountry: '',
    regionalTelephone: '',
    regionalTelephone2: '',
    regionalFax: ''
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
      <p>All fields are required unless stated otherwise.</p>
      
      <h2>Contact Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="agencyRegistrationDate">Agency Date of Registration:</label>
        <input
          type="date"
          id="agencyRegistrationDate"
          name="agencyRegistrationDate"
          value={formData.agencyRegistrationDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="agencyRegistrationNumber">Agency Registration Number (optional):</label>
        <input
          type="text"
          id="agencyRegistrationNumber"
          name="agencyRegistrationNumber"
          value={formData.agencyRegistrationNumber}
          onChange={handleChange}
        />

        <h2>Headquarters Contact Details</h2>
        <label htmlFor="hqName">Name:</label>
        <input
          type="text"
          id="hqName"
          name="hqName"
          value={formData.hqName}
          onChange={handleChange}
          required
        />

        <label htmlFor="hqPosition">Position:</label>
        <input
          type="text"
          id="hqPosition"
          name="hqPosition"
          value={formData.hqPosition}
          onChange={handleChange}
          required
        />

        <label htmlFor="hqEmail">Email:</label>
        <input
          type="email"
          id="hqEmail"
          name="hqEmail"
          value={formData.hqEmail}
          onChange={handleChange}
          required
        />

        <label htmlFor="hqAddress">Address:</label>
        <input
          type="text"
          id="hqAddress"
          name="hqAddress"
          value={formData.hqAddress}
          onChange={handleChange}
          required
        />

        <label htmlFor="hqCity">City:</label>
        <input
          type="text"
          id="hqCity"
          name="hqCity"
          value={formData.hqCity}
          onChange={handleChange}
          required
        />

        <label htmlFor="hqState">State / Province:</label>
        <input
          type="text"
          id="hqState"
          name="hqState"
          value={formData.hqState}
          onChange={handleChange}
          required
        />

        <label htmlFor="hqCountry">Country:</label>
        <input
          type="text"
          id="hqCountry"
          name="hqCountry"
          value={formData.hqCountry}
          onChange={handleChange}
          required
        />

        <label htmlFor="hqTelephone">Telephone:</label>
        <input
          type="tel"
          id="hqTelephone"
          name="hqTelephone"
          value={formData.hqTelephone}
          onChange={handleChange}
          required
        />

        <label htmlFor="hqTelephone2">Telephone 2 (optional):</label>
        <input
          type="tel"
          id="hqTelephone2"
          name="hqTelephone2"
          value={formData.hqTelephone2}
          onChange={handleChange}
        />

        <label htmlFor="hqFax">Fax (optional):</label>
        <input
          type="text"
          id="hqFax"
          name="hqFax"
          value={formData.hqFax}
          onChange={handleChange}
        />

        <h2>Regional Contact Details</h2>
        <label>
          <input
            type="checkbox"
            name="regionalSameAsHQ"
            checked={formData.regionalSameAsHQ}
            onChange={() => setFormData({ ...formData, regionalSameAsHQ: !formData.regionalSameAsHQ })}
          />
          Same as HQ
        </label>

        {!formData.regionalSameAsHQ && (
          <>
            <label htmlFor="regionalName">Name:</label>
            <input
              type="text"
              id="regionalName"
              name="regionalName"
              value={formData.regionalName}
              onChange={handleChange}
              required
            />

            <label htmlFor="regionalPosition">Position:</label>
            <input
              type="text"
              id="regionalPosition"
              name="regionalPosition"
              value={formData.regionalPosition}
              onChange={handleChange}
              required
            />

            <label htmlFor="regionalEmail">Email:</label>
            <input
              type="email"
              id="regionalEmail"
              name="regionalEmail"
              value={formData.regionalEmail}
              onChange={handleChange}
              required
            />

            <label htmlFor="regionalAddress">Address:</label>
            <input
              type="text"
              id="regionalAddress"
              name="regionalAddress"
              value={formData.regionalAddress}
              onChange={handleChange}
              required
            />

            <label htmlFor="regionalCity">City:</label>
            <input
              type="text"
              id="regionalCity"
              name="regionalCity"
              value={formData.regionalCity}
              onChange={handleChange}
              required
            />

            <label htmlFor="regionalState">State / Province:</label>
            <input
              type="text"
              id="regionalState"
              name="regionalState"
              value={formData.regionalState}
              onChange={handleChange}
              required
            />

            <label htmlFor="regionalCountry">Country:</label>
            <input
              type="text"
              id="regionalCountry"
              name="regionalCountry"
              value={formData.regionalCountry}
              onChange={handleChange}
              required
            />

            <label htmlFor="regionalTelephone">Telephone:</label>
            <input
              type="tel"
              id="regionalTelephone"
              name="regionalTelephone"
              value={formData.regionalTelephone}
              onChange={handleChange}
              required
            />

            <label htmlFor="regionalTelephone2">Telephone 2 (optional):</label>
            <input
              type="tel"
              id="regionalTelephone2"
              name="regionalTelephone2"
              value={formData.regionalTelephone2}
              onChange={handleChange}
            />

            <label htmlFor="regionalFax">Fax (optional):</label>
            <input
              type="text"
              id="regionalFax"
              name="regionalFax"
              value={formData.regionalFax}
              onChange={handleChange}
            />
          </>
        )}
        
        <Link to="/agency-details" className="submit-button">
          Submit
        </Link>
      </form>
    </div>
  );
};

export default MemberAccountAdministratorForm;
