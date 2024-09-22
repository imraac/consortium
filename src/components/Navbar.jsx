
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Navbar.css'; // Import your CSS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <header className="main-header">
      <div className="call-us">Call Us: +1 234 567 890</div>

      <nav>
        <img src="/path/to/logo.png" alt="Logo" />
        <div className="nav-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li className="dropdown" onMouseEnter={() => toggleDropdown(1)} onMouseLeave={() => toggleDropdown(null)}>
              <a href="#">About Us</a>
              <i className="fa-solid fa-chevron-down"></i>
              {dropdownOpen === 1 && (
                <div className="dropdown-content">
                  <a href="#">Service 1</a>
                  <a href="#">Service 2</a>
                  <a href="#">Service 3</a>
                </div>
              )}
            </li>
            <li className="dropdown" onMouseEnter={() => toggleDropdown(2)} onMouseLeave={() => toggleDropdown(null)}>
              <a href="#">Activities</a>
              <i className="fa-solid fa-chevron-down"></i>
              {dropdownOpen === 2 && (
                <div className="dropdown-content">
                  <a href="#">Activity 1</a>
                  <a href="#">Activity 2</a>
                  <a href="#">Activity 3</a>
                </div>
              )}
            </li>
            <li className="dropdown" onMouseEnter={() => toggleDropdown(3)} onMouseLeave={() => toggleDropdown(null)}>
              <a href="#">Resources</a>
              <i className="fa-solid fa-chevron-down"></i>
              {dropdownOpen === 3 && (
                <div className="dropdown-content">
                  <a href="#">Resource 1</a>
                  <a href="#">Resource 2</a>
                  <a href="#">Resource 3</a>
                </div>
              )}
            </li>
            <li className="dropdown" onMouseEnter={() => toggleDropdown(4)} onMouseLeave={() => toggleDropdown(null)}>
              <a href="#">Members</a>
              <i className="fa-solid fa-chevron-down"></i>
              {dropdownOpen === 4 && (
                <div className="dropdown-content">
                  <a href="#">Member 1</a>
                  <a href="#">Member 2</a>
                  <a href="#">Member 3</a>
                </div>
              )}
            </li>
            <li className="dropdown" onMouseEnter={() => toggleDropdown(5)} onMouseLeave={() => toggleDropdown(null)}>
              <a href="#">Skill Development Hub</a>
              <i className="fa-solid fa-chevron-down"></i>
              {dropdownOpen === 5 && (
                <div className="dropdown-content">
                  <a href="#">Skill 1</a>
                  <a href="#">Skill 2</a>
                  <a href="#">Skill 3</a>
                </div>
              )}
            </li>
            <li>
              <a href="/jobs">Jobs</a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons and Buttons */}
        <div className="social-media" style={{ display: 'flex', alignItems: 'center' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', margin: '0 10px' }}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'light', margin: '0 10px' }}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'light-blue', margin: '0 10px' }}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <button
            className="join-consortium-button"
            style={{
              backgroundColor: '#fff',
              color: '#4CAF50',
              border: 'none',
              padding: '10px 20px',
              marginLeft: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#4CAF50';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#fff';
              e.target.style.color = '#4CAF50';
            }}
            onClick={() => navigate('/consortium')} // Navigate to the consortium page
          >
            Join Consortium
          </button>
          <button
            className="login-button"
            style={{
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              marginLeft: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#45a049';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#4CAF50';
            }}
            onClick={() => {
              // Handle login button click (e.g., redirect to login page)
              console.log('Login button clicked');
            }}
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
