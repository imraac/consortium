import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserCardVisible, setIsUserCardVisible] = useState(false);
  const [isApplicationCardVisible, setIsApplicationCardVisible] = useState(false);
  const [applications, setApplications] = useState([]);
  const [users, setUsers] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllUsers, setShowAllUsers] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleUserCard = () => {
    setIsUserCardVisible(!isUserCardVisible);
    if (!isUserCardVisible) {
      fetchUsers();
    }
  };

  const toggleApplicationCard = () => {
    setIsApplicationCardVisible(!isApplicationCardVisible);
    if (!isApplicationCardVisible) {
      fetchPendingApplications();
    }
  };

  const fetchPendingApplications = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/admin/documents', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      } else {
        console.error('Failed to fetch applications:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/users/list', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
      } else {
        console.error('Failed to fetch users:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const updateApplicationStatus = async (id, newStatus) => {
    const method = newStatus === 'Approved' ? 'approve' : 'reject';
    try {
      const response = await fetch(`http://127.0.0.1:5000/admin/documents/${id}/${method}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setApplications((prevApplications) =>
          prevApplications.map((app) =>
            app.id === id ? { ...app, status: newStatus } : app
          )
        );
      } else {
        console.error('Failed to update application status:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating application status:', error);
    }
  };

  const openModal = (documentPath) => {
    const baseUrl = 'http://127.0.0.1:5000/uploads';
    const url = `${baseUrl}/${documentPath}`;
    if (url) {
      setModalContent(url);
      setIsModalOpen(true);
    } else {
      console.error('No valid URL provided for the document.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter users and applications based on the search term
  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(searchTerm) ||
      user.role.toLowerCase().includes(searchTerm)
  );

  const filteredApplications = applications.filter(
    (application) =>
      application.username.toLowerCase().includes(searchTerm) ||
      application.email.toLowerCase().includes(searchTerm)
  );

  const toggleShowAllUsers = () => {
    setShowAllUsers(!showAllUsers);
  };

  return (
    <div className="admin-dash-dashboard">
      <div className="admin-dash-container">
        <nav className={`admin-dash-sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="admin-dash-sidebar-header">
            <div className="close-sidebar" onClick={toggleSidebar}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="admin-dash-side-navbar">
            <span>Management</span>
            <div className="admin-dash-links">
              <a href="#" className="admin-dash-active">Dashboard</a>
              <a href="#">Users</a>
              <a href="#">Products</a>
              <a href="#">Orders</a>
              <a href="#">Reports</a>
              <a href="#">Settings</a>
            </div>
          </div>
        </nav>

        <main className="admin-dash-main-body">
          <div className="admin-dash-promo-card">
            <h1>This page is only visible to Minority Rights Organizations (MRO) Consortium Admin</h1>
            <button>This Dashboard is tailored to streamline the processes involved in overseeing applications from Minority Rights Organizations (MRO) Consortium site users.</button>
          </div>

          {/* Buttons to show users and applications */}
          <div className="admin-dash-toggle-buttons">
            <button onClick={toggleUserCard}>Toggle User List</button>
            <button onClick={toggleApplicationCard}>Toggle Application List</button>
          </div>

          {isUserCardVisible && (
            <div className="admin-dash-user-card">
              <h2>(MRO) Consortium (USERS)</h2>
              <table className="admin-dash-user-table">
                <thead>
                  <tr>
                    <th>MROs ID</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.slice(0, showAllUsers ? filteredUsers.length : 3).map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={toggleShowAllUsers}>
                {showAllUsers ? 'See Less' : 'See More'}
              </button>
            </div>
          )}

          {isApplicationCardVisible && (
            <div className="admin-dash-application-card">
              <h2>Minority Rights Organizations (MRO) Consortium application requests</h2>
              <h4>Approve / Reject Member applications</h4>
              <table className="admin-dash-application-table">
                <thead>
                  <tr>
                    <th>Application ID</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Status</th>
                    <th>Documents</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map(application => (
                    <tr key={application.id}>
                      <td>{application.id}</td>
                      <td>{application.username}</td>
                      <td>{application.email}</td>
                      <td>{application.status}</td>
                      <td>
                        <button onClick={() => openModal(application.registration_certificate)}>Registration Cert</button>
                        <button onClick={() => openModal(application.agency_profile)}>Agency Profile</button>
                        <button onClick={() => openModal(application.audit_report)}>Audit Report</button>
                        <button onClick={() => openModal(application.ngo_consortium_mandate)}>(MRO)Consortium Mandate</button>
                        <button onClick={() => openModal(application.icrc_code_of_conduct)}>Passport Photo & ID</button>
                      </td>
                      <td>
                        <button onClick={() => updateApplicationStatus(application.id, 'Approved')} className="approve-button">Approve</button>
                        <button onClick={() => updateApplicationStatus(application.id, 'Rejected')} className="reject-button">Reject</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>(MROs) Document Viewer</h2>
            <iframe src={modalContent} title="Document" width="100%" height="600px" frameBorder="0" allowFullScreen></iframe>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
