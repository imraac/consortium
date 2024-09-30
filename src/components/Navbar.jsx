

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
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

  return (
    <header className="header">
      <div className="call-us">Call Us: +1 234 567 890</div>

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
                <Link to="/" className="nav__link" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => toggleDropdown(1)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <span className="nav__link" style={{ textDecoration: "none" }}>
                  About Us
                </span>
                {dropdownOpen === 1 && (
                  <div className="dropdown__content">
                    <Link to="/about-us" className="dropdown__link" style={{ textDecoration: "none" }}>
                      About Us
                    </Link>
                    <Link to="/core-values" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Our Core Values
                    </Link>
                    <Link to="/consortium-mandate" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Consortium Mandate
                    </Link>
                    <Link to="/structure-management" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Consortium Structure & Management
                    </Link>
                    <Link to="/strategy" className="dropdown__link" style={{ textDecoration: "none" }}>
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
                  Activities
                </span>
                {dropdownOpen === 2 && (
                  <div className="dropdown__content">
                    <Link to="/coordination" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Coordination
                    </Link>
                    <Link to="/advocacy" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Advocacy
                    </Link>
                    <Link to="/working-groups" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Working Groups
                    </Link>
                    <Link to="/representation" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Representation
                    </Link>
                    <Link to="/info-sharing" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Information Sharing
                    </Link>
                    <Link to="/twinning-program" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Twinning Program
                    </Link>
                    <Link to="/additional-activities" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Additional Activities
                    </Link>
                  </div>
                )}
              </li>
             
              <li>
                <Link to="/jobs" className="nav__link" style={{ textDecoration: "none" }}>
                  Jobs
                </Link>
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => toggleDropdown(4)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <span className="nav__link" style={{ textDecoration: "none" }}>
                  Membership
                </span>
                {dropdownOpen === 4 && (
                  <div className="dropdown__content">
                    <Link to="/coordination" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Coordination
                    </Link>
                    <Link to="/advocacy" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Advocacy
                    </Link>
                    <Link to="/working-groups" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Working Groups
                    </Link>
                    <Link to="/representation" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Representation
                    </Link>
                    <Link to="/info-sharing" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Information Sharing
                    </Link>
                    <Link to="/twinning-program" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Twinning Program
                    </Link>
                    <Link to="/additional-activities" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Additional Activities
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
                  Contacts
                </span>
                {dropdownOpen === 4 && (
                  <div className="dropdown__content">
                    <Link to="/coordination" className="dropdown__link" style={{ textDecoration: "none" }}>
                    Secretariat
                    </Link>
                    <Link to="/advocacy" className="dropdown__link" style={{ textDecoration: "none" }}>
                    Regional Representatives
                    </Link>
                    <Link to="/working-groups" className="dropdown__link" style={{ textDecoration: "none" }}>
                    Seats Representatives 
                    </Link>

                  </div>
                )}
              </li>
            </ul>

            <div className="nav__icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <button
                className="btn join-consortium-button"
                onClick={() => navigate("/consortium")}
              >
                Join Consortium
              </button>
              <button
                className="btn login-button"
                onClick={() => navigate("/login")}
              >
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


