// import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation
// import "./Dashboard.css"; // Import the CSS file for styling

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <header className="dashboard-header">
//         <h2>Welcome to the Minority Rights Organizations (MRO) Consortium Member Area</h2>
//         <p>
//           Follow the links below to manage your profile, create events, add vacancies, documents, or web links, and much more.
//         </p>
//         <p>
//           Help files are provided throughout the system, but if anything is not clear, please email us.
//         </p>
//       </header>

//       <div className="card-container">
//         {/* Cards with more information at the top */}
//         <div className="card">
//           <h2>My Profile</h2>
//           <p>
//             <Link to="/profile">View and edit your profile information</Link>.
//           </p>
//           <ul>
//             <li><Link to="/update-profile">Update profile information</Link></li>
//             <li><Link to="/update-contact">Update contact information</Link></li>
//             <li><Link to="/member-profiles">Other member profiles</Link></li>
//             <li><Link to="/child-accounts">View child accounts</Link></li>
//             <li><Link to="/request-child-removal">Request child account removal</Link></li>
//             <li><Link to="/request-child-accounts">Request additional child account(s)</Link></li>
//           </ul>
//         </div>

//         <div className="card">
//           <h2>Login Activity</h2>
//           <p>First access to site:</p>
//           <p>Wednesday, 11 September 2024, 8:54 AM (15 days 12 hours)</p>
//           <p>Last access to site:</p>
//           <p>Thursday, 26 September 2024, 9:46 PM (13 secs ago)</p>
//         </div>

//         <div className="card">
//           <h2>Vacancies</h2>
//           <p>
//             <Link to="/vacancies">List your organisation's job vacancies on our Careers page</Link>.
//           </p>
//           <ul>
//             <li><Link to="/manage-vacancy">Manage a vacancy</Link></li>
//             <li><Link to="/add-vacancy">Add a vacancy</Link></li>
//           </ul>
//         </div>

//         <div className="card">
//           <h2>Field Visits</h2>
//           <p>Notify us when your staff will be in Somalia by logging their field visits.</p>
//           <ul>
//             <li><Link to="/manage-field-visit">Manage a field visit</Link></li>
//             <li><Link to="/add-field-visit">Add a field visit</Link></li>
//           </ul>
//         </div>

//         {/* Cards with less information at the bottom */}
//         <div className="card">
//           <h2>Events</h2>
//           <p><Link to="/calendar">Manage my calendar</Link>.</p>
//           <ul>
//             <li><Link to="/manage-event">Manage or create an event</Link></li>
//           </ul>
//         </div>

//         <div className="card">
//           <h2>Documents</h2>
//           <p>Share key documents with other members on our key documents page, from minutes to press statements.</p>
//           <ul>
//             <li><Link to="/manage-document">Manage a document</Link></li>
//             <li><Link to="/add-document">Add a document</Link></li>
//           </ul>
//         </div>

//         <div className="card">
//           <h2>Add a Project</h2>
//           <p>Help make our interactive WWW map valuable by adding your projects.</p>
//           <p><strong>Coming soon</strong></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Dashboard.css"; // Import the CSS file for styling
import Footer from "./Footer"; // Import the Footer component

const Dashboard = () => {
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
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Dashboard;

