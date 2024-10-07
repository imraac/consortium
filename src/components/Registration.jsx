

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
            <label>Full Name:</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Acronym:</label>
            <input type="text" name="acronym" value={formData.acronym} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Mission Statement:</label>
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
          {success && <p style={{ color: 'green' }}>Basic Information
        submitted! Press Next to go to the other page</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          {success && (
            <button 
              type="button" 
              onClick={() => navigate('/personal-details')} 
              className="next-button"
            >
             next 
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
