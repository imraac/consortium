// // import React from "react";
// // import { Link } from "react-router-dom"; // Import Link for navigation
// // import "./Dashboard.css"; // Import the CSS file for styling

// // const Dashboard = () => {
// //   return (
// //     <div className="dashboard-container">
// //       <header className="dashboard-header">
// //         <h2>Welcome to the Minority Rights Organizations (MRO) Consortium Member Area</h2>
// //         <p>
// //           Follow the links below to manage your profile, create events, add vacancies, documents, or web links, and much more.
// //         </p>
// //         <p>
// //           Help files are provided throughout the system, but if anything is not clear, please email us.
// //         </p>
// //       </header>

// //       <div className="card-container">
// //         {/* Cards with more information at the top */}
// //         <div className="card">
// //           <h2>My Profile</h2>
// //           <p>
// //             <Link to="/profile">View and edit your profile information</Link>.
// //           </p>
// //           <ul>
// //             <li><Link to="/update-profile">Update profile information</Link></li>
// //             <li><Link to="/update-contact">Update contact information</Link></li>
// //             <li><Link to="/member-profiles">Other member profiles</Link></li>
// //             <li><Link to="/child-accounts">View child accounts</Link></li>
// //             <li><Link to="/request-child-removal">Request child account removal</Link></li>
// //             <li><Link to="/request-child-accounts">Request additional child account(s)</Link></li>
// //           </ul>
// //         </div>

// //         <div className="card">
// //           <h2>Login Activity</h2>
// //           <p>First access to site:</p>
// //           <p>Wednesday, 11 September 2024, 8:54 AM (15 days 12 hours)</p>
// //           <p>Last access to site:</p>
// //           <p>Thursday, 26 September 2024, 9:46 PM (13 secs ago)</p>
// //         </div>

// //         <div className="card">
// //           <h2>Vacancies</h2>
// //           <p>
// //             <Link to="/vacancies">List your organisation's job vacancies on our Careers page</Link>.
// //           </p>
// //           <ul>
// //             <li><Link to="/manage-vacancy">Manage a vacancy</Link></li>
// //             <li><Link to="/add-vacancy">Add a vacancy</Link></li>
// //           </ul>
// //         </div>

// //         <div className="card">
// //           <h2>Field Visits</h2>
// //           <p>Notify us when your staff will be in Somalia by logging their field visits.</p>
// //           <ul>
// //             <li><Link to="/manage-field-visit">Manage a field visit</Link></li>
// //             <li><Link to="/add-field-visit">Add a field visit</Link></li>
// //           </ul>
// //         </div>

// //         {/* Cards with less information at the bottom */}
// //         <div className="card">
// //           <h2>Events</h2>
// //           <p><Link to="/calendar">Manage my calendar</Link>.</p>
// //           <ul>
// //             <li><Link to="/manage-event">Manage or create an event</Link></li>
// //           </ul>
// //         </div>

// //         <div className="card">
// //           <h2>Documents</h2>
// //           <p>Share key documents with other members on our key documents page, from minutes to press statements.</p>
// //           <ul>
// //             <li><Link to="/manage-document">Manage a document</Link></li>
// //             <li><Link to="/add-document">Add a document</Link></li>
// //           </ul>
// //         </div>

// //         <div className="card">
// //           <h2>Add a Project</h2>
// //           <p>Help make our interactive WWW map valuable by adding your projects.</p>
// //           <p><strong>Coming soon</strong></p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;




//   import React from "react";
//   import { Link } from "react-router-dom"; // Import Link for navigation
//   import "./Dashboard.css"; // Import the CSS file for styling
//   import Footer from "./Footer"; // Import the Footer component

//   const Dashboard = () => {
//     return (
//       <div className="dashboard-container">
//         <header className="dashboard-header">
//           <h2>Welcome to the Minority Rights Organizations (MRO) Consortium Member Area</h2>
//           <p>
//             Follow the links below to manage your profile, create events, add vacancies, documents, or web links, and much more.
//           </p>
//           <p>
//             Help files are provided throughout the system, but if anything is not clear, please email us.
//           </p>
//         </header>

//         <div className="card-container">
//           {/* Cards with more information at the top */}
//           <div className="card">
//             <h2>My Profile</h2>
//             <p>
//               <Link to="/profile">View and edit your profile information</Link>.
//             </p>
//             <ul>
//               <li><Link to="/update-profile">Update profile information</Link></li>
//               <li><Link to="/update-contact">Update contact information</Link></li>
//               <li><Link to="/member-profiles">Other member profiles</Link></li>
//               <li><Link to="/child-accounts">View child accounts</Link></li>
//               <li><Link to="/request-child-removal">Request child account removal</Link></li>
//               <li><Link to="/request-child-accounts">Request additional child account(s)</Link></li>
//             </ul>
//           </div>

//           <div className="card">
//             <h2>Login Activity</h2>
//             <p>First access to site:</p>
//             <p>Wednesday, 11 September 2024, 8:54 AM (15 days 12 hours)</p>
//             <p>Last access to site:</p>
//             <p>Thursday, 26 September 2024, 9:46 PM (13 secs ago)</p>
//           </div>

//           <div className="card">
//             <h2>Vacancies</h2>
//             <p>
//               <Link to="/vacancies">List your organisation's job vacancies on our Careers page</Link>.
//             </p>
//             <ul>
//               <li><Link to="/manage-vacancy">Manage a vacancy</Link></li>
//               <li><Link to="/add-vacancy">Add a vacancy</Link></li>
//             </ul>
//           </div>

//           <div className="card">
//             <h2>Field Visits</h2>
//             <p>Notify us when your staff will be in Somalia by logging their field visits.</p>
//             <ul>
//               <li><Link to="/manage-field-visit">Manage a field visit</Link></li>
//               <li><Link to="/add-field-visit">Add a field visit</Link></li>
//             </ul>
//           </div>

//           {/* Cards with less information at the bottom */}
//           <div className="card">
//             <h2>Events</h2>
//             <p><Link to="/calendar">Manage my calendar</Link>.</p>
//             <ul>
//               <li><Link to="/manage-event">Manage or create an event</Link></li>
//             </ul>
//           </div>

//           <div className="card">
//             <h2>Documents</h2>
//             <p>Share key documents with other members on our key documents page, from minutes to press statements.</p>
//             <ul>
//               <li><Link to="/manage-document">Manage a document</Link></li>
//               <li><Link to="/add-document">Add a document</Link></li>
//             </ul>
//           </div>

//           <div className="card">
//             <h2>Add a Project</h2>
//             <p>Help make our interactive WWW map valuable by adding your projects.</p>
//             <p><strong>Coming soon</strong></p>
//           </div>
//         </div>

//         {/* Footer Component */}
//         <Footer />
//       </div>
//     );
//   };

//   export default Dashboard;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./Dashboard.css"; // Import the CSS file for styling
import Footer from "./Footer"; // Import the Footer component

const Dashboard = () => {
  const [logoutMessage, setLogoutMessage] = useState(""); // State for logout message
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming JWT is stored in localStorage
        },
      });

      if (response.ok) {
        setLogoutMessage("Logout successful");
        localStorage.removeItem("token"); // Clear the token from storage
        navigate("/login"); // Redirect to the login page
      } else {
        setLogoutMessage("Logout failed. Please try again.");
      }
    } catch (error) {
      setLogoutMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="dashboard-container">
      
      <header className="dashboard-header">
        
        <h2>Welcome to the Minority Rights Organizations (MRO) Consortium Member Area</h2>
       
        <p>
          Follow the links below to manage your profile, create events, add vacancies, documents, or web links, and much more.
        </p>
        <p>
          Help files are provided throughout the system, but if anything is not clear, please email us.
        </p>
         
       
      </header>
     
        
          <button className="logout-button" onClick={handleLogout}>
            Logout <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg>
          </button>
          {/* Show logout message */}
          {logoutMessage && <p className="logout-message">{logoutMessage}</p>}
       
      <div className="card-container">
        {/* Cards with more information at the top */}
        <div className="card">
          <h2>My Profile</h2>
          <p>
            <Link to="/profile">View and edit your profile information</Link>.
          </p>
          <ul>
            <li><Link to="/update-profile">Update profile information</Link></li>
            <li><Link to="/update-contact">Update contact information</Link></li>
            <li><Link to="/member-profiles">Other member profiles</Link></li>
            <li><Link to="/child-accounts">View child accounts</Link></li>
            <li><Link to="/request-child-removal">Request child account removal</Link></li>
            <li><Link to="/request-child-accounts">Request additional child account(s)</Link></li>
          </ul>
        </div>

        <div className="card">
          <h2>Login Activity</h2>
          <p>First access to site:</p>
          <p>Wednesday, 11 September 2024, 8:54 AM (15 days 12 hours)</p>
          <p>Last access to site:</p>
          <p>Thursday, 26 September 2024, 9:46 PM (13 secs ago)</p>
        </div>

        <div className="card">
          <h2>Vacancies</h2>
          <p>
            <Link to="/vacancies">List your organisation's job vacancies on our Careers page</Link>.
          </p>
          <ul>
            <li><Link to="/manage-vacancy">Manage a vacancy</Link></li>
            <li><Link to="/add-vacancy">Add a vacancy</Link></li>
          </ul>
        </div>

        <div className="card">
          <h2>Field Visits</h2>
          <p>Notify us when your staff will be in Somalia by logging their field visits.</p>
          <ul>
            <li><Link to="/manage-field-visit">Manage a field visit</Link></li>
            <li><Link to="/add-field-visit">Add a field visit</Link></li>
          </ul>
        </div>

        {/* Cards with less information at the bottom */}
        <div className="card">
          <h2>Events</h2>
          <p><Link to="/calendar">Manage my calendar</Link>.</p>
          <ul>
            <li><Link to="/manage-event">Manage or create an event</Link></li>
          </ul>
        </div>

        <div className="card">
          <h2>Documents</h2>
          <p>Share key documents with other members on our key documents page, from minutes to press statements.</p>
          <ul>
            <li><Link to="/manage-document">Manage a document</Link></li>
            <li><Link to="/add-document">Add a document</Link></li>
          </ul>
        </div>

        <div className="card">
          <h2>Add a Project</h2>
          <p>Help make our interactive WWW map valuable by adding your projects.</p>
          <p><strong>Coming soon</strong></p>
        </div>

        {/* Add Logout Button */}
       
        </div>
    

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Dashboard;
