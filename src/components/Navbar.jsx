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
        <button
          className="btn join-consortium-button mobile-only"
          onClick={() => {
            navigate("/consortium");
            closeMenu();
          }}
        >
          <i className="fas fa-users" style={{ color: "white" }}></i> Join
        </button>

        <a
          href="https://wa.me/0704390612" // WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon"
        >
          <img
            src="/372010_linkedin_stamp_social_icon.png"
            alt="WhatsApp"
            style={{ width: "25px", height: "25px", marginLeft: "140px" }}
          />
        </a>
        <a
          href="https://wa.me/0704390612" // WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon"
        >
          <img
            src="/3184113_media_social_whatsapp_icon.svg"
            alt="WhatsApp"
            style={{ width: "25px", height: "25px", marginLeft: "7px" }}
          />
        </a>
        <a
          href="https://wa.me/0704390612" // WhatsApp link
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
          href="https://wa.me/0704390612" // WhatsApp link
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
            <img src="/logo1.png" alt="Logo" />
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
                      to="/working-groups"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Working Groups
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
                      to="/info-sharing"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Information Sharing
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
                      to="/additional-activities"
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
                      Resource 1
                    </Link>
                    <Link
                      to="/resource-2" // Replace with actual path
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Resource 2
                    </Link>
                    <Link
                      to="/resource-3" // Replace with actual path
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Resource 3
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
                      to="/representation"
                      className="dropdown__link"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      Representation
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
                className="btn join-consortium-button"
                onClick={() => {
                  navigate("/consortium");
                  closeMenu();
                }}
              >
                <i className="fas fa-users" style={{ color: "#FFD700" }}></i>
                Join The Consortium
              </button>
              <button
                className="btn login-button"
                onClick={() => {
                  navigate("/login");
                  closeMenu();
                }}
              >
             
             <i className="fas fa-user" style={{ color: "white", fontSize: "14px" }}></i>   Login 
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
