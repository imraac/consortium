import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
 
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle dropdown on click
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="call-us">
  {/* <p className="moving-text">    🇸OMALIA📍 </p> */}
  
  <a
    href="https://wa.me/0704390612"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-icon"
  >
    <img
      src="/circlinkedin.webp"
      alt="WhatsApp"
      style={{ width: "25px", height: "25px", marginLeft: "140px" }}
    />
  </a>
  <a
    href="https://wa.me/0704390612"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-icon"
  >
    <img
      src="/WhatsApp.svg.png"
      alt="WhatsApp"
      style={{ width: "25px", height: "25px", marginLeft: "7px" }}
    />
  </a>
  <a
    href="https://wa.me/0704390612"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-icon"
  >
    <img
      src="/11244080_x_twitter_elon musk_twitter new logo_icon.svg"
      alt="WhatsApp"
      style={{ width: "20px", height: "20px", marginLeft: "7px" }}
    />
  </a>
  <a
    href="https://wa.me/0704390612"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-icon"
  >
    <img
      src="/5365678_fb_facebook_facebook logo_icon.svg"
      alt="WhatsApp"
      style={{ width: "20px", height: "20px", marginLeft: "7px" }}
    />
  </a>
</div>

      <nav className="nav">
        <div className="container nav__data">
        <div className="nav_img">
  <Link to="/">
    <img src="/logo1.png" alt="Logo" />
  </Link>
</div>

          {/* Menu Toggle Icon for Mobile */}
          <div className="nav__menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>

          {/* Menu */}
          <div className={`nav__menu ${menuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className="nav__link"
                  style={{ textDecoration: "none" }}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => toggleDropdown(1)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <span className="nav__link" style={{ textDecoration: "none" }}>
                  About Us <i className="fas fa-angle-down"></i>
                </span>
                {dropdownOpen === 1 && (
                  <div className="dropdown__content">
                    <Link
                      to="/about-us"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/core-values"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Our Core Values
                    </Link>
                    <Link
                      to="/consortium-mandate"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Consortium Mandate
                    </Link>
                    <Link
                      to="/structure-management"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Consortium Structure & Management
                    </Link>
                    <Link
                      to="/strategy"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Strategy
                    </Link>
                  </div>
                )}
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => toggleDropdown(2)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <span className="nav__link" style={{ textDecoration: "none" }}>
                  Activities <i className="fas fa-angle-down"></i>
                </span>
                {dropdownOpen === 2 && (
                  <div className="dropdown__content">
                    <Link
                      to="/certification"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      NGO-Certification
                    </Link>
                    <Link
                      to="/coordination"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Coordination
                    </Link>
                    <Link
                      to="/representation"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Representation
                    </Link>
                    <Link
                      to="/information-sharing"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Information Sharing
                    </Link>
                    <Link
                      to="/working-groups"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Working Groups
                    </Link>
                   
                   
                    <Link
                      to="/twinning-program"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Twinning Program
                    </Link>
                    <Link
                      to="/additional-services"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Additional Activities
                    </Link>
                  </div>
                )}
              </li>

              {/* Resources Dropdown */}
              <li
                className="dropdown"
                onMouseEnter={() => toggleDropdown(3)} // Change index to 3 for Resources
                onMouseLeave={() => toggleDropdown(null)}
              >
                <span className="nav__link" style={{ textDecoration: "none" }}>
                  Resources <i className="fas fa-angle-down"></i>
                </span>
                {dropdownOpen === 3 && ( // Check if dropdown index is 3
                  <div className="dropdown__content">
                    <Link
                      to="/resource-1" // Replace with actual path
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                 Assessment 


                    </Link>
                    <Link
                      to="/resource-2" // Replace with actual path
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                     ⁠Report & Publication
                    </Link>
                    <Link
                      to="/resource-3" // Replace with actual path
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      ⁠Events
                    </Link>
                  </div>
                )}
              </li>

              <li
                className="dropdown"
                onMouseEnter={() => toggleDropdown(4)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <span className="nav__link" style={{ textDecoration: "none" }}>
                  Membership <i className="fas fa-angle-down"></i>
                </span>
                {dropdownOpen === 4 && (
                  <div className="dropdown__content">
                    <Link
                      to="/coordination"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Coordination
                    </Link>
                    <Link
                      to="/advocacy"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Advocacy
                    </Link>
                    <Link
                      to="/consortium-members"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Members
                    </Link>
                    <Link
                      to="/feature-Stories"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                    Feature Stories
                    </Link>
                  </div>
                )}
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => toggleDropdown(5)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <span className="nav__link" style={{ textDecoration: "none" }}>
                  Contacts <i className="fas fa-angle-down"></i>
                </span>
                {dropdownOpen === 5 && (
                  <div className="dropdown__content">
                    <Link
                      to="/secretariat"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Secretariat
                    </Link>
                    <Link
                      to="/regional-representatives"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Regional Representatives
                    </Link>
                    <Link
                      to="/seats-representatives"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Seats Representatives
                    </Link>
                  </div>
                )}
              </li>
            </ul>

            <div className="nav__icons">
            <button
    className="join-consortium-button"
    onClick={() => {
      navigate("/consortium");
      closeMenu();
    }}
  >
    <span>Join The Consortium</span>
    <svg width="15px" height="10px" viewBox="0 0 13 10">
      <path d="M1,5 L11,5"></path>
      <polyline points="8 1 12 5 8 9"></polyline>
    </svg>
  </button>
              
  {/* <button
    className="button login-button"
    onClick={() => {
      navigate("/login");
      closeMenu();
    }}
  >
    <span className="fold"></span>

    <div className="points_wrapper">
      <i className="point"></i>
      <i className="point"></i>
      <i className="point"></i>
      <i className="point"></i>
      <i className="point"></i>
      <i className="point"></i>
      <i className="point"></i>
      <i className="point"></i>
      <i className="point"></i>
      <i className="point"></i>
    </div>

    <span className="inner">
      <svg
        className="icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      >
        <polyline
          points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"
        ></polyline>
      </svg>
      Login
    </span>
  </button>  */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
