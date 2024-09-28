


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!formData.fullName || !formData.description || !formData.missionStatement || !formData.website || !formData.yearsOperational || !formData.reasonToJoin) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      // Replace fetch with axios
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
      });

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
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
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <div className="registration-form-container">
        <h1>Agency Registration</h1>
        <p>All fields are required unless stated otherwise.</p>
        <form onSubmit={handleSubmit}>
          {/* Form fields remain the same as before */}
          <label htmlFor="fullName">Full name of agency:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="acronym">Acronym (optional):</label>
          <input
            type="text"
            id="acronym"
            name="acronym"
            value={formData.acronym}
            onChange={handleChange}
          />

          <label htmlFor="description">Brief description of agency:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <label htmlFor="missionStatement">Mission Statement:</label>
          <textarea
            id="missionStatement"
            name="missionStatement"
            value={formData.missionStatement}
            onChange={handleChange}
            required
          />

          <label htmlFor="website">Website:</label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            required
          />

          <label>Is your agency a non-governmental organisation (NGO)?</label>
          <div>
            <input
              type="checkbox"
              id="isNGO"
              name="isNGO"
              checked={formData.isNGO}
              onChange={handleChange}
            />
            <label htmlFor="isNGO">Yes</label>
          </div>

          <label htmlFor="yearsOperational">Number of years operational:</label>
          <input
            type="number"
            id="yearsOperational"
            name="yearsOperational"
            value={formData.yearsOperational}
            onChange={handleChange}
            required
          />

          <label htmlFor="reasonToJoin">Reason to join:</label>
          <textarea
            id="reasonToJoin"
            name="reasonToJoin"
            value={formData.reasonToJoin}
            onChange={handleChange}
            required
          />

          <label>Willing to participate in NGO Consortium activities?</label>
          <div>
            <input
              type="checkbox"
              id="participatesInConsortium"
              name="participatesInConsortium"
              checked={formData.participatesInConsortium}
              onChange={handleChange}
            />
            <label htmlFor="participatesInConsortium">Yes</label>
          </div>

          <label>Commitment to principles of Independence, Impartiality, and Neutrality:</label>
          <div>
            <input
              type="checkbox"
              id="understandsPrinciples"
              name="understandsPrinciples"
              checked={formData.understandsPrinciples}
              onChange={handleChange}
            />
            <label htmlFor="understandsPrinciples">Yes</label>
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}> successful! press next</p>}

          <button type="submit">Submit</button>

          <Link to="/personal-details">Next</Link>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
