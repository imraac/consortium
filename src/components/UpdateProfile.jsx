

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateProfile.css';
import Footer from './Footer';

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    acronym: '',
    description: '',
    mission_statement: '',
    website: '',
    is_ngo: false,
    years_operational: '',
    reason_for_joining: '',
    willing_to_participate: false,
    commitment_to_principles: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://mro-consortium-backend-production.up.railway.app/agency', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        try {
          const data = await response.json();
          console.log('Updated agency data:', data);
          navigate('/member-account-administrator');
        } catch (jsonError) {
          console.error('Error parsing JSON response:', jsonError);
        }
      } else {
        const errorData = await response.json().catch(() => null);
        console.error('Error updating agency:', errorData || response.statusText);
      }
    } catch (error) {
      console.error('Error during profile update:', error);
    }
  };

  return (
    <div className="update-profile-container">
      <div className="content-wrapper">
        <div className="form-container">
          <div className="instructions">
            <p>
              This page allows you to update your organization’s profile. Please fill in the fields below with the required information.
              If you press the "Update Profile" button, the changes will be saved and you will be redirected to the "Member Account Administrator" page.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="update-profile-form">
            <div>
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="acronym">Acronym</label>
              <input
                type="text"
                id="acronym"
                name="acronym"
                value={formData.acronym}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="mission_statement">Mission Statement</label>
              <textarea
                id="mission_statement"
                name="mission_statement"
                value={formData.mission_statement}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="website">Website</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="is_ngo">Is NGO?</label>
              <input
                type="checkbox"
                id="is_ngo"
                name="is_ngo"
                checked={formData.is_ngo}
                onChange={handleCheckboxChange}
              />
            </div>
            <div>
              <label htmlFor="years_operational">Years Operational</label>
              <input
                type="number"
                id="years_operational"
                name="years_operational"
                value={formData.years_operational}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="reason_for_joining">Reason for Joining</label>
              <textarea
                id="reason_for_joining"
                name="reason_for_joining"
                value={formData.reason_for_joining}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="willing_to_participate">Willing to Participate?</label>
              <input
                type="checkbox"
                id="willing_to_participate"
                name="willing_to_participate"
                checked={formData.willing_to_participate}
                onChange={handleCheckboxChange}
              />
            </div>
            <div>
              <label htmlFor="commitment_to_principles">Commitment to Principles?</label>
              <input
                type="checkbox"
                id="commitment_to_principles"
                name="commitment_to_principles"
                checked={formData.commitment_to_principles}
                onChange={handleCheckboxChange}
              />
            </div>
            <button type="submit">Update Profile</button>
          </form>
        </div>

        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li><strong>What is the purpose of this form?</strong> This form allows you to update your organization's profile information.</li>
            <li><strong>Can I change my organization's description?</strong> Yes, you can update your organization's description, mission statement, and other details.</li>
            <li><strong>What happens after I submit the form?</strong> After submission, your profile will be updated, and you'll be redirected to the "Member Account Administrator" page.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UpdateProfile;
