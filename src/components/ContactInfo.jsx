import React, { useState } from "react";
import "./ContactInfo.css";

function ContactInfo() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HQ Contact Updates:", {
      name,
      position,
      email,
      address,
      city,
      state,
      country,
      tel1,
      tel2,
    });
    // Add logic to update the HQ contact information (API call or state update)
  };

  const handleBack = () => {
    // Navigate back to the previous page
    window.history.back();
  };

  return (
    <div className="edit-hq-contact-wrapper">
      <button onClick={handleBack} className="back-button">
        Back
      </button>
      <div className="edit-hq-contact-container">
        <h2>Edit HQ Contact Information</h2>
        <form onSubmit={handleSubmit} className="edit-hq-contact-form">
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter name..."
            />
          </div>

          {/* Position */}
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
              placeholder="Enter position..."
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter email..."
            />
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Enter address..."
            />
          </div>

          {/* City */}
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              placeholder="Enter city..."
            />
          </div>

          {/* State / Province */}
          <div className="form-group">
            <label htmlFor="state">State / Province:</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              placeholder="Enter state or province..."
            />
          </div>

          {/* Country */}
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              placeholder="Enter country..."
            />
          </div>

          {/* Tel 1 */}
          <div className="form-group">
            <label htmlFor="tel1">Tel 1:</label>
            <input
              type="text"
              id="tel1"
              value={tel1}
              onChange={(e) => setTel1(e.target.value)}
              required
              placeholder="Enter first phone number..."
            />
          </div>

          {/* Tel 2 */}
          <div className="form-group">
            <label htmlFor="tel2">Tel 2:</label>
            <input
              type="text"
              id="tel2"
              value={tel2}
              onChange={(e) => setTel2(e.target.value)}
              placeholder="Enter second phone number (optional)..."
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Update Contact Info
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactInfo;