
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Footer from "./Footer";

const Dashboard = () => {
  const [logoutMessage, setLogoutMessage] = useState("");
  const [loginHistory, setLoginHistory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLoginHistory = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/login-history", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setLoginHistory(data);
        }
      } catch (error) {
        console.error("Error fetching login history:", error);
      }
    };

    fetchLoginHistory();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        setLogoutMessage("Logout successful");
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        setLogoutMessage("Logout failed. Please try again.");
      }
    } catch (error) {
      setLogoutMessage("An error occurred. Please try again.");
    }
  };

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "Africa/Nairobi",
    };
    return new Date(dateString).toLocaleString("en-KE", options);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2 className="c2">
          Welcome to the Minority Rights Organizations (MRO) Consortium Member Area
        </h2>
        <p>
          Follow the links below to manage your profile, create events, add vacancies,
          documents, or web links, and much more.
        </p>
        <p>
          Help files are provided throughout the system, but if anything is not clear,
          please email us.
        </p>
      </header>

      <button className="Btn" onClick={handleLogout}>
        <div className="sign">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg>
        </div>
        <span className="text">Logout</span>
      </button>

      {logoutMessage && <p className="logout-message">{logoutMessage}</p>}

      <div className="card-container">
        <div className="card">
        <svg stroke="currentColor" fill="currentColor"  color = "sky"stroke-width="0" version="1.1" viewBox="0 0 16 16" height="2em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 0h-12c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h12c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM13 14h-11v-12h11v12zM4 9h7v1h-7zM4 11h7v1h-7zM5 4.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM7.5 6h-2c-0.825 0-1.5 0.45-1.5 1v1h5v-1c0-0.55-0.675-1-1.5-1z"></path></svg>
          <h2> My Profile</h2>
          <p>
            <Link to="/profile">View and edit your profile information</Link>.
          </p>
          <ul>
            <li>
              <Link to="/update-profile">Update profile information</Link>
            </li>
            <li>
              <Link to="/not-found">Update contact information</Link>
            </li>
            <li>
              <Link to="/not-found">Other member profiles</Link>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>Login Activity</h2>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"  color = "#2980b9" stroke-linejoin="round" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          {loginHistory && loginHistory.length > 0 ? (
            <>
              <p>Recent login:</p>
              <p>{formatDate(loginHistory[0].login_time)}</p>
              <p>Previous login:</p>
              <p>{loginHistory[1] ? formatDate(loginHistory[1].login_time) : "No previous login available"}</p>
            </>
          ) : (
            <p>Loading login history...</p>
          )}
        </div>

        <div className="card">
          <h2>Vacancies</h2>
          <p>
            <Link to="/vacancies">List your organisation's job vacancies on our Careers page</Link>.
          </p>
          <ul>
            <li>
              <Link to="/manage-vacancy">Manage a vacancy</Link>
            </li>
            <li>
              <Link to="/add-vacancy">Add a vacancy</Link>
            </li>
          </ul>
        </div>


        <div className="card">
          <h2>Events</h2>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="3em" 
          color = "#2980b9"width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"></path></svg>
          <p><Link to="/calendar">Manage my calendar</Link>.</p>
          <ul>
            <li><Link to="/manage-event">Manage or create an event</Link></li>
          </ul>
        </div>

        <div className="card">
          <h2>Documents</h2>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><polygon fill="#90CAF9" points="40,45 8,45 8,3 30,3 40,13"></polygon><polygon fill="#E1F5FE" points="38.5,14 29,14 29,4.5"></polygon><g fill="#1976D2"><rect x="16" y="21" width="17" height="2"></rect><rect x="16" y="25" width="13" height="2"></rect><rect x="16" y="29" width="17" height="2"></rect><rect x="16" y="33" width="13" height="2"></rect></g></svg>
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

      <Footer />
    </div>
  );
};

export default Dashboard;
