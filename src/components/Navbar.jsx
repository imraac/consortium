// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Navbar.css'; // Your existing CSS file
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const navigate = useNavigate();

//   const toggleDropdown = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//   };

//   return (
//     <header className="header">
      
//       <div className="call-us">Call Us: +1 234 567 890</div>
      

//       <nav className="nav">
//         <div className="container nav__data">
//           <div className="nav__logo">
//             <img src="/path/to/logo.png" alt="Logo" />
//             <span>Company Name</span>
//           </div>
          
//           <ul className="nav__menu">
//             <li>
//               <a href="/" className="nav__link">Home</a>
//             </li>
//             <li className="dropdown" onMouseEnter={() => toggleDropdown(1)} onMouseLeave={() => toggleDropdown(null)}>
//               <a href="#" className="nav__link dropdown__button">About Us</a>
//               <i className="fa-solid fa-chevron-down dropdown__arrow"></i>
//               {dropdownOpen === 1 && (
//                 <div className="dropdown__content">
//                   <a href="#" className="dropdown__link">Service 1</a>
//                   <a href="#" className="dropdown__link">Service 2</a>
//                   <a href="#" className="dropdown__link">Service 3</a>
//                   <a href="#" className="dropdown__link">Service 1</a>
//                   <a href="#" className="dropdown__link">Service 2</a>
//                   <a href="#" className="dropdown__link">Service 3</a>
//                 </div>
//               )}
//             </li>
//             <li className="dropdown" onMouseEnter={() => toggleDropdown(2)} onMouseLeave={() => toggleDropdown(null)}>
//               <a href="#" className="nav__link dropdown__button">Activities</a>
//               <i className="fa-solid fa-chevron-down dropdown__arrow"></i>
//               {dropdownOpen === 2 && (
//                 <div className="dropdown__content">
//                   <a href="#" className="dropdown__link">Activity 1</a>
//                   <a href="#" className="dropdown__link">Activity 2</a>
//                   <a href="#" className="dropdown__link">Activity 3</a>
//                   <a href="#" className="dropdown__link">Service 1</a>
//                   <a href="#" className="dropdown__link">Service 2</a>
//                   <a href="#" className="dropdown__link">Service 3</a>
//                 </div>
//               )}
//             </li>
//             {/* Repeat for other dropdowns */}
//           </ul>

//           <div className="nav__icons">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
//               <FontAwesomeIcon icon={faFacebook} />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
//               <FontAwesomeIcon icon={faTwitter} />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
//               <FontAwesomeIcon icon={faLinkedin} />
//             </a>

//             <button className="btn join-consortium-button" onClick={() => navigate('/consortium')}>
//               Join Consortium
//             </button>
//             <button className="btn login-button" onClick={() => navigate('/login')}>
//               Login
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Your existing CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="call-us">Call Us: +1 234 567 890</div>

      <nav className="nav">
        <div className="container nav__data">
          <div className="nav_img">
            <img src="/" alt="Logo" />
          
          </div>

          {/* Menu Toggle Icon for Mobile */}
          <div className="nav__menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>

          {/* Menu */}
          <div className={`nav__menu ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <a href="/" className="nav__link">Home</a>
              </li>
              <li className="dropdown" onMouseEnter={() => toggleDropdown(1)} onMouseLeave={() => toggleDropdown(null)}>
                <a href="#" className="nav__link dropdown__button">About Us</a>
                <i className="fa-solid fa-chevron-down dropdown__arrow"></i>
                {dropdownOpen === 1 && (
                  <div className="dropdown__content">
                    <a href="#" className="dropdown__link">Service 1</a>
                    <a href="#" className="dropdown__link">Service 2</a>
                    <a href="#" className="dropdown__link">Service 3</a>
                  </div>
                )}
              </li>
              <li className="dropdown" onMouseEnter={() => toggleDropdown(2)} onMouseLeave={() => toggleDropdown(null)}>
                <a href="#" className="nav__link dropdown__button">Activities</a>
                <i className="fa-solid fa-chevron-down dropdown__arrow"></i>
                {dropdownOpen === 2 && (
                  <div className="dropdown__content">
                    <a href="#" className="dropdown__link">Activity 1</a>
                    <a href="#" className="dropdown__link">Activity 2</a>
                    <a href="#" className="dropdown__link">Activity 3</a>
                  </div>
                )}
              </li>
            </ul>

            <div className="nav__icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <button className="btn join-consortium-button" onClick={() => navigate('/consortium')}>
                Join Consortium
              </button>
              <button className="btn login-button" onClick={() => navigate('/login')}>
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
