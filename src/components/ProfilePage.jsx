


import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import Footer from './Footer';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [profileData, setProfileData] = useState({
    membershipStatus: "Active",
    membershipExpiration: "31/12/2024",
    mission: "", 
    website: "", 
    partners: "FAO",
    fieldOffice: "Hodan",
    
  });

  const [profilePicture, setProfilePicture] = useState(null); 

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error("No authentication token found. Please log in.");
          return;
        }

        // Fetching member account data
        const memberResponse = await fetch('https://mro-consortium-backend-production.up.railway.app/member-account/1', { 
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const memberData = await memberResponse.json();
        if (memberData) {
          setProfileData((prevData) => ({
            ...prevData,
            contactName: memberData.hq_name,
            position: memberData.hq_position,
            email: memberData.hq_email,
            address: `${memberData.hq_address}, ${memberData.hq_city}, ${memberData.hq_state}, ${memberData.hq_country}`,
            tel1: memberData.hq_telephone,
            tel2: memberData.hq_telephone2,
            fax: memberData.hq_fax,
          }));
        }

        // Fetching agency data mission and website
        const agencyResponse = await fetch('https://mro-consortium-backend-production.up.railway.app/agency', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const agencyData = await agencyResponse.json();
        if (agencyData && agencyData.agencies.length > 0) {
          const firstAgency = agencyData.agencies[0]; 
          setProfileData((prevData) => ({
            ...prevData,
            mission: firstAgency.mission_statement || "", 
            website: firstAgency.website || "", 
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProfileData();
  }, []);

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

        <div className="">
          <div className="profile-header">
           
            <div className="profile-picture">
              {profilePicture ? (
                <>
                  
                </>
              ) : (
                <div className="upload-button">
                 
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
                  type="tel"
                  name="tel1"
                  value={profileData.tel1}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Tel 2:</strong>{" "}
                <input
                  type="tel"
                  name="tel2"
                  value={profileData.tel2}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Fax:</strong>{" "}
                <input
                  type="tel"
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
      <Footer />
    </div>
  );
};

export default ProfilePage;
