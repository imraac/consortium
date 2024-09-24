// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   // Toggle dropdown on click
//   const toggleDropdown = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="call-us">Call Us: +1 234 567 890</div>

//       <nav className="nav">
//         <div className="container nav__data">
//           <div className="nav_img">
//             <img src="/" alt="Logo" />
//           </div>

//           {/* Menu Toggle Icon for Mobile */}
//           <div className="nav__menu-toggle" onClick={toggleMenu}>
//             <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
//           </div>

//           {/* Menu */}
//           <div className={`nav__menu ${menuOpen ? "active" : ""}`}>
//             <ul>
//             <li>
//   <Link
//     to="/"
//     className="nav__link"
//     style={{ textDecoration: "none" }}
//   >
//     Home
//   </Link>
// </li>
//               <li
//                 className="dropdown"
//                 onMouseEnter={() => toggleDropdown(1)}
//                 onMouseLeave={() => toggleDropdown(null)}
//               >
//                 <a
//                   href="#"
//                   className="nav__link"
//                   style={{ textDecoration: "none" }}
//                 >
//                   About Us
//                 </a>
//                 {dropdownOpen === 1 && (
//                   <div className="dropdown__content">
//                     <a
//                       href="/about-us"
//                       className="dropdown__link"
//                       style={{ textDecoration: "none" }}
//                     >
//                       About Us
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Our Core Values
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Consortium Mandate
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Consortium Structure & Management
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Strategy
//                     </a>
//                   </div>
//                 )}
//               </li>
//               <li
//                 className="dropdown"
//                 onMouseEnter={() => toggleDropdown(2)}
//                 onMouseLeave={() => toggleDropdown(null)}
//               >
//                 <a
//                   href="#"
//                   className="nav__link"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Activities
//                 </a>
//                 {dropdownOpen === 2 && (
//                   <div className="dropdown__content">
//                     <a href="#" className="dropdown__link">
//                       Coordination
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Advocacy
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Working Groups
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Representation
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Information Sharing
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Twinning Program
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Additional Activities
//                     </a>
//                   </div>
//                 )}
//               </li>
//               <li
//                 className="dropdown"
//                 onMouseEnter={() => toggleDropdown(3)}
//                 onMouseLeave={() => toggleDropdown(null)}
//               >
//                 <a
//                   href="#"
//                   className="nav__link" 
//                   style={{ textDecoration: "none" }}
//                 >
//                   Resources
//                 </a>
//                 {dropdownOpen === 3 && (
//                   <div className="dropdown__content">
//                     <a href="#" className="dropdown__link">
//                       Maps
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Key Documents
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Government Law & Regulations
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Useful Links
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Calendar
//                     </a>
//                   </div>
//                 )}
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="nav__link"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Jobs
//                 </a>
//               </li>
//               <li
//                 className="dropdown"
//                 onMouseEnter={() => toggleDropdown(4)}
//                 onMouseLeave={() => toggleDropdown(null)}
//               >
//                 <a
//                   href="#"
//                   className="nav__link"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Membership
//                 </a>
//                 {dropdownOpen === 4 && (
//                   <div className="dropdown__content">
//                     <a href="#" className="dropdown__link">
//                       Coordination
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Advocacy
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Working Groups
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Representation
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Information Sharing
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Twinning Program
//                     </a>
//                     <a href="#" className="dropdown__link">
//                       Additional Activities
//                     </a>
//                   </div>
//                 )}
//               </li>
//             </ul>

//             <div className="nav__icons">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon"
//               >
//                 <FontAwesomeIcon icon={faFacebook} />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon"
//               >
//                 <FontAwesomeIcon icon={faTwitter} />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon"
//               >
//                 <FontAwesomeIcon icon={faInstagram} />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon"
//               >
//                 <FontAwesomeIcon icon={faLinkedin} />
//               </a>

//               <button
//                 className="btn join-consortium-button"
//                 onClick={() => navigate("/consortium")}
//               >
//                 Join Consortium
//               </button>
//               <button
//                 className="btn login-button"
//                 onClick={() => navigate("/login")}
//               >
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


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
            <img src="/" alt="Logo" />
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
              <li
                className="dropdown"
                onMouseEnter={() => toggleDropdown(3)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <span className="nav__link" style={{ textDecoration: "none" }}>
                  Resources
                </span>
                {dropdownOpen === 3 && (
                  <div className="dropdown__content">
                    <Link to="/maps" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Maps
                    </Link>
                    <Link to="/documents" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Key Documents
                    </Link>
                    <Link to="/laws" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Government Law & Regulations
                    </Link>
                    <Link to="/useful-links" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Useful Links
                    </Link>
                    <Link to="/calendar" className="dropdown__link" style={{ textDecoration: "none" }}>
                      Calendar
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
