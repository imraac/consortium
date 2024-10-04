

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
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
//    <div className="call-us">
//   <a
//     href="https://www.facebook.com"
//     target="_blank"
//     rel="noopener noreferrer"
//     style={{ color: "#4267B2", display: "inline-block", marginRight: "7px" }} // Facebook blue with spacing
//   >
//     <FontAwesomeIcon icon={faFacebook} className="social-icon" />
//   </a>

//   <a
//     href="https://www.linkedin.com"
//     target="_blank"
//     rel="noopener noreferrer"
//     style={{ color: "#0077B5", display: "inline-block", marginLeft: "7px" }} // LinkedIn blue with spacing
//   >
//     <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
//   </a>

 
// </div>



//       <nav className="nav">
//         <div className="container nav__data">
//           <div className="nav_img">
//             <img src="/logo1.png" alt="Logo" />
//           </div>

//           {/* Menu Toggle Icon for Mobile */}
//           <div className="nav__menu-toggle" onClick={toggleMenu}>
//             <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
//           </div>

//           {/* Menu */}
//           <div className={`nav__menu ${menuOpen ? "active" : ""}`}>
//             <ul>
//               <li>
//                 <Link to="/" className="nav__link" style={{ textDecoration: "none" }}>
//                   Home
//                 </Link>
//               </li>
//               <li
//                 className="dropdown"
//                 onMouseEnter={() => toggleDropdown(1)}
//                 onMouseLeave={() => toggleDropdown(null)}
//               >
//                 <span className="nav__link" style={{ textDecoration: "none" }}>
//                   About Us
//                 </span>
//                 {dropdownOpen === 1 && (
//                   <div className="dropdown__content">
//                     <Link to="/about-us" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       About Us
//                     </Link>
//                     <Link to="/core-values" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Our Core Values
//                     </Link>
//                     <Link to="/consortium-mandate" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Consortium Mandate
//                     </Link>
//                     <Link to="/structure-management" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Consortium Structure & Management
//                     </Link>
//                     <Link to="/strategy" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Strategy
//                     </Link>
//                   </div>
//                 )}
//               </li>
//               <li
//                 className="dropdown"
//                 onMouseEnter={() => toggleDropdown(2)}
//                 onMouseLeave={() => toggleDropdown(null)}
//               >
//                 <span className="nav__link" style={{ textDecoration: "none" }}>
//                   Activities
//                 </span>
//                 {dropdownOpen === 2 && (
//                   <div className="dropdown__content">
//                     <Link to="/coordination" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Coordination
//                     </Link>
//                     <Link to="/advocacy" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Advocacy
//                     </Link>
//                     <Link to="/working-groups" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Working Groups
//                     </Link>
//                     <Link to="/representation" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Representation
//                     </Link>
//                     <Link to="/info-sharing" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Information Sharing
//                     </Link>
//                     <Link to="/twinning-program" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Twinning Program
//                     </Link>
//                     <Link to="/additional-activities" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Additional Activities
//                     </Link>
//                   </div>
//                 )}
//               </li>
             
//               <li>
//                 <Link to="/jobs" className="nav__link" style={{ textDecoration: "none" }}>
//                   Jobs
//                 </Link>
//               </li>
//               <li
//                 className="dropdown"
//                 onMouseEnter={() => toggleDropdown(4)}
//                 onMouseLeave={() => toggleDropdown(null)}
//               >
//                 <span className="nav__link" style={{ textDecoration: "none" }}>
//                   Membership
//                 </span>
//                 {dropdownOpen === 4 && (
//                   <div className="dropdown__content">
//                     <Link to="/coordination" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Coordination
//                     </Link>
//                     <Link to="/advocacy" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Advocacy
//                     </Link>
//                     <Link to="/consortium-members" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Members
//                     </Link>
//                     <Link to="/representation" className="dropdown__link" style={{ textDecoration: "none" }}>
//                       Representation
//                     </Link>
                    
//                   </div>
//                 )}
//               </li>
//               <li
//                 className="dropdown"
//                 onMouseEnter={() => toggleDropdown(4)}
//                 onMouseLeave={() => toggleDropdown(null)}
//               >
//                 <span className="nav__link" style={{ textDecoration: "none" }}>
//                   Contacts
//                 </span>
//                 {dropdownOpen === 4 && (
//                   <div className="dropdown__content">
//                     <Link to="/secretariat" className="dropdown__link" style={{ textDecoration: "none" }}>
//                     Secretariat
//                     </Link>
//                     <Link to="/advocacy" className="dropdown__link" style={{ textDecoration: "none" }}>
//                     Regional Representatives
//                     </Link>
//                     <Link to="/working-groups" className="dropdown__link" style={{ textDecoration: "none" }}>
//                     Seats Representatives 
//                     </Link>

//                   </div>
//                 )}
//               </li>
//             </ul>

//             <div className="nav__icons">
              
             
            

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
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4267B2", display: "inline-block", marginRight: "7px" }} // Facebook blue with spacing
        >
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0077B5", display: "inline-block", marginLeft: "7px" }} // LinkedIn blue with spacing
        >
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
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
                <Link to="/" className="nav__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
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
                    <Link to="/about-us" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      About Us
                    </Link>
                    <Link to="/core-values" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Our Core Values
                    </Link>
                    <Link to="/consortium-mandate" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Consortium Mandate
                    </Link>
                    <Link to="/structure-management" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Consortium Structure & Management
                    </Link>
                    <Link to="/strategy" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
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
                    <Link to="/coordination" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Coordination
                    </Link>
                    <Link to="/advocacy" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Advocacy
                    </Link>
                    <Link to="/working-groups" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Working Groups
                    </Link>
                    <Link to="/representation" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Representation
                    </Link>
                    <Link to="/info-sharing" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Information Sharing
                    </Link>
                    <Link to="/twinning-program" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Twinning Program
                    </Link>
                    <Link to="/additional-activities" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Additional Activities
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link to="/jobs" className="nav__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
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
                    <Link to="/coordination" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Coordination
                    </Link>
                    <Link to="/advocacy" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Advocacy
                    </Link>
                    <Link to="/consortium-members" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Members
                    </Link>
                    <Link to="/representation" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Representation
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
                    <Link to="/secretariat" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Secretariat
                    </Link>
                    <Link to="/advocacy" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
                      Regional Representatives
                    </Link>
                    <Link to="/working-groups" className="dropdown__link" style={{ textDecoration: "none" }} onClick={closeMenu}>
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
                Join Consortium
              </button>
              <button
                className="btn login-button"
                onClick={() => { 
                  navigate("/login");
                  closeMenu();
                }}
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
