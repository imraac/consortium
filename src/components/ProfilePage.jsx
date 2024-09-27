import React, { useState } from "react";
import "./ProfilePage.css"; // Import the CSS file for styling

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [profileData, setProfileData] = useState({
    membershipStatus: "Active",
    membershipExpiration: "31/12/2024",
    mission: "ACRED mission is to promote sustainable development in areas affected by poverty, conflict, and natural disasters.",
    website: "www.acred.org",
    partners: "FAO",
    fieldOffice: "Hodan",
    contactName: "Abdishakur Mohamed Afrah",
    position: "Deputy Executive Director and Head of Programs",
    email: "info@acred.org",
    address: "Taleh street, Hodan District, Mogadishu, Somalia, Benadir, Somalia",
    tel1: "+252 614 979727",
    tel2: "+252 615 649366",
    fax: "N/A",
  });

  const [profilePicture, setProfilePicture] = useState(null); // State for profile picture

  const togglePrivacy = () => {
    setIsPrivate(!isPrivate);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Profile updated:", profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePictureDelete = () => {
    setProfilePicture(null);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>My Profile</h2>
        <p>See an overview of your agency's account and any attached child members.</p>

        <div className="profile-card">
          <div className="profile-header">
            <div className="membership-info">
              <p>
                <strong>Current membership status:</strong> {profileData.membershipStatus}
              </p>
              <p>
                <strong>Membership Expiration:</strong> {profileData.membershipExpiration}
              </p>
            </div>
            <div className="profile-picture">
              {profilePicture ? (
                <>
                  <img src={profilePicture} alt="Profile" className="profile-image" />
                  <button className="delete-button" onClick={handlePictureDelete}>Delete Picture</button>
                </>
              ) : (
                <div className="upload-button">
                  <input type="file" accept="image/*" onChange={handlePictureChange} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="profile-card">
          <h3>Settings</h3>
          <ul>
            <li>View child accounts</li>
            <li>Request child account removal</li>
            <li>Request additional child account(s)</li>
          </ul>
          <p>
            <strong>Profile:</strong>
            <label>
              <input type="checkbox" checked={isPrivate} onChange={togglePrivacy} />
              Make this profile private
            </label>
          </p>

          {isEditing ? (
            <div>
              <button className="save-button" onClick={handleSave}>Save</button>
              <button className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <button className="edit-button" onClick={handleEdit}>Edit</button>
          )}
        </div>

        {/* Other sections for Mission, Website, Partners, Field Offices, Contact Information remain unchanged */}
        <div className="profile-card">
          <h3>Mission</h3>
          {isEditing ? (
            <textarea
              name="mission"
              value={profileData.mission}
              onChange={handleChange}
            />
          ) : (
            <p>{profileData.mission}</p>
          )}
        </div>

        <div className="profile-card">
          <h3>Website</h3>
          {isEditing ? (
            <input
              type="text"
              name="website"
              value={profileData.website}
              onChange={handleChange}
            />
          ) : (
            <p>{profileData.website}</p>
          )}
        </div>

        <div className="profile-card">
          <h3>Partners in Somalia</h3>
          {isEditing ? (
            <input
              type="text"
              name="partners"
              value={profileData.partners}
              onChange={handleChange}
            />
          ) : (
            <p>{profileData.partners}</p>
          )}
        </div>

        <div className="profile-card">
          <h3>Field Offices</h3>
          {isEditing ? (
            <input
              type="text"
              name="fieldOffice"
              value={profileData.fieldOffice}
              onChange={handleChange}
            />
          ) : (
            <p>{profileData.fieldOffice}</p>
          )}
        </div>

        <div className="profile-card">
          <h3>Contact Information</h3>
          {isEditing ? (
            <>
              <p>
                <strong>HQ contact:</strong>{" "}
                <input
                  type="text"
                  name="contactName"
                  value={profileData.contactName}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Position:</strong>{" "}
                <input
                  type="text"
                  name="position"
                  value={profileData.position}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Address:</strong>{" "}
                <input
                  type="text"
                  name="address"
                  value={profileData.address}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Tel 1:</strong>{" "}
                <input
                  type="text"
                  name="tel1"
                  value={profileData.tel1}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Tel 2:</strong>{" "}
                <input
                  type="text"
                  name="tel2"
                  value={profileData.tel2}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Fax:</strong>{" "}
                <input
                  type="text"
                  name="fax"
                  value={profileData.fax}
                  onChange={handleChange}
                />
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>HQ contact:</strong> {profileData.contactName}
              </p>
              <p>
                <strong>Position:</strong> {profileData.position}
              </p>
              <p>
                <strong>Email:</strong> {profileData.email}
              </p>
              <p>
                <strong>Address:</strong> {profileData.address}
              </p>
              <p>
                <strong>Tel 1:</strong> {profileData.tel1}
              </p>
              <p>
                <strong>Tel 2:</strong> {profileData.tel2}
              </p>
              <p>
                <strong>Fax:</strong> {profileData.fax}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
