import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ContactDetails.css'; // Ensure to style as per your design
import Footer from './Footer';

const ContactDetails = () => {
  const [contactData, setContactData] = useState({
    founders: [{ name: '', contact: '', clan: '' }],
    boardDirectors: [{ name: '', contact: '', clan: '' }],
    keyStaffs: [{ name: '', contact: '', clan: '' }],
  });

  const handleChange = (e, index, group) => {
    const { name, value } = e.target;
    const updatedGroup = contactData[group].map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setContactData({ ...contactData, [group]: updatedGroup });
  };

  const addRow = (group) => {
    setContactData({
      ...contactData,
      [group]: [...contactData[group], { name: '', contact: '', clan: '' }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Details submitted:', contactData);
    // Add your logic to save the data
  };

  return (
    <div className="contact-details-page">
      <div className="contact-details-container">
        <form onSubmit={handleSubmit}>
          <h2>Personal Information </h2>
          <p>Mention the names of the founders of the organization and the clans they belong to and they must be from minority clans, and they need to adhere to the guidelines provided by the Government of Somalia/Somaliland (please send the passports as supporting documents)</p>
          {contactData.founders.map((founder, index) => (
            <div key={index} className="input-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={founder.name}
                onChange={(e) => handleChange(e, index, 'founders')}
                required
              />
              <label>Contact Number:</label>
              <input
                type="text"
                name="contact"
                value={founder.contact}
                onChange={(e) => handleChange(e, index, 'founders')}
                required
              />
              <label>Clan:</label>
              <input
                type="text"
                name="clan"
                value={founder.clan}
                onChange={(e) => handleChange(e, index, 'founders')}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => addRow('founders')}>
            Add More Founders
          </button>

          <h2>Board Directors</h2>
          {contactData.boardDirectors.map((director, index) => (
            <div key={index} className="input-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={director.name}
                onChange={(e) => handleChange(e, index, 'boardDirectors')}
                required
              />
              <label>Contact Number:</label>
              <input
                type="text"
                name="contact"
                value={director.contact}
                onChange={(e) => handleChange(e, index, 'boardDirectors')}
                required
              />
              <label>Clan:</label>
              <input
                type="text"
                name="clan"
                value={director.clan}
                onChange={(e) => handleChange(e, index, 'boardDirectors')}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => addRow('boardDirectors')}>
            Add More Directors
          </button>

          <h2>Key Staffs</h2>
          {contactData.keyStaffs.map((staff, index) => (
            <div key={index} className="input-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={staff.name}
                onChange={(e) => handleChange(e, index, 'keyStaffs')}
                required
              />
              <label>Contact Number:</label>
              <input
                type="text"
                name="contact"
                value={staff.contact}
                onChange={(e) => handleChange(e, index, 'keyStaffs')}
                required
              />
              <label>Clan:</label>
              <input
                type="text"
                name="clan"
                value={staff.clan}
                onChange={(e) => handleChange(e, index, 'keyStaffs')}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => addRow('keyStaffs')}>
            Add More Staffs
          </button>

          <Link to="/consortium-registration">
            <button type="submit" className="submit-btn">
              NEXT
            </button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactDetails;
