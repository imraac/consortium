import React, { useState } from "react";
import "./UpdateProfile.css";

function UpdateProfile() {
  const [missionStatement, setMissionStatement] = useState("");
  const [website, setWebsite] = useState("");
  const [partners, setPartners] = useState("");
  const [fieldOffices, setFieldOffices] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Updates:", {
      missionStatement,
      website,
      partners,
      fieldOffices,
    });
    // Add logic to update the profile (API call or state update)
  };

  const handleBack = () => {
    // Navigate back to the previous page
    window.history.back();
  };

  return (
    <div className="update-profile-wrapper">
  <button onClick={handleBack} className="back-button-profile">
    Back
  </button>
  <div className="update-profile-container">
    <h2>Edit Profile</h2>
    <form onSubmit={handleSubmit} className="update-profile-form">
      {/* Form fields */}
      <div className="form-group">
        <label htmlFor="mission-statement">Mission Statement:</label>
        <textarea
          id="mission-statement"
          value={missionStatement}
          onChange={(e) => setMissionStatement(e.target.value)}
          required
          placeholder="Enter your mission statement..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="website">Website:</label>
        <input
          type="url"
          id="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="https://example.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="partners">Partners in Somalia:</label>
        <input
          type="text"
          id="partners"
          value={partners}
          onChange={(e) => setPartners(e.target.value)}
          required
          placeholder="List of partners in Somalia"
        />
      </div>

      <div className="form-group">
        <label htmlFor="field-offices">Field Offices:</label>
        <input
          type="text"
          id="field-offices"
          value={fieldOffices}
          onChange={(e) => setFieldOffices(e.target.value)}
          required
          placeholder="Enter locations of field offices"
        />
      </div>

      <button type="submit" className="submit-button">
        Update Profile
      </button>
    </form>
  </div>

  <div className="faqs-container">
    <h4>Frequently Asked Questions (FAQs)</h4>
    <ul>
      <li>
        <strong>How can I update my profile?</strong>
        <p>You can update your profile by clicking the "Edit Profile" button at the top of this page.</p>
      </li>
      <li>
        <strong>How do I add or remove field offices?</strong>
        <p>Navigate to the "Field Offices" section to add or request the removal of offices.</p>
      </li>
      <li>
        <strong>Can I update my organization's mission statement?</strong>
        <p>Yes, the mission statement can be edited under the "Profile Information" section.</p>
      </li>
      <li>
        <strong>Who can see my profile information?</strong>
        <p>Your profile is visible to other members of the consortium but can be limited in settings.</p>
      </li>
    </ul>
  </div>
</div>
  )
  
}

export default UpdateProfile;