

// // import React, { useState, useEffect } from 'react';
// // import './AdminDashboard.css';

// // const AdminDashboard = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [isUserCardVisible, setIsUserCardVisible] = useState(false);
// //   const [isApplicationCardVisible, setIsApplicationCardVisible] = useState(false);
// //   const [applications, setApplications] = useState([]);
// //   const [users, setUsers] = useState([]);
// //   const [modalContent, setModalContent] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   const toggleUserCard = () => {
// //     setIsUserCardVisible(!isUserCardVisible);
// //     if (!isUserCardVisible) {
// //       fetchUsers(); // Fetch users when opening the user card
// //     }
// //   };

// //   const toggleApplicationCard = () => {
// //     setIsApplicationCardVisible(!isApplicationCardVisible);
// //     if (!isApplicationCardVisible) {
// //       fetchPendingApplications(); // Fetch applications when opening the card
// //     }
// //   };

// //   // Fetch pending applications from the backend
// //   const fetchPendingApplications = async () => {
// //     try {
// //       const response = await fetch('http://127.0.0.1:5000/admin/documents', {
// //         method: 'GET',
// //         headers: {
// //           'Authorization': `Bearer ${localStorage.getItem('token')}`,
// //           'Content-Type': 'application/json',
// //         },
// //       });
// //       if (response.ok) {
// //         const data = await response.json();
// //         setApplications(data); // Assuming the response is an array of applications with document details
// //       } else {
// //         console.error('Failed to fetch applications:', response.statusText);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching applications:', error);
// //     }
// //   };

// //   // Fetch users from the backend
// //   const fetchUsers = async () => {
// //     try {
// //       const response = await fetch('/user', {
// //         method: 'GET',
// //         headers: {
// //           'Authorization': `Bearer ${localStorage.getItem('token')}`,
// //           'Content-Type': 'application/json',
// //         },
// //       });
// //       if (response.ok) {
// //         const data = await response.json();
// //         setUsers(data);
// //       } else {
// //         console.error('Failed to fetch users:', response.statusText);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching users:', error);
// //     }
// //   };

// //   // Update the status of an application
// //   const updateApplicationStatus = async (id, newStatus) => {
// //     const method = newStatus === 'Approved' ? 'approve' : 'reject';
// //     try {
// //       const response = await fetch(`http://127.0.0.1:5000/admin/documents/${id}/${method}`, {
// //         method: 'POST',
// //         headers: {
// //           'Authorization': `Bearer ${localStorage.getItem('token')}`,
// //           'Content-Type': 'application/json',
// //         },
// //       });

// //       if (response.ok) {
// //         setApplications((prevApplications) =>
// //           prevApplications.map((app) =>
// //             app.id === id ? { ...app, status: newStatus } : app
// //           )
// //         );
// //       } else {
// //         console.error('Failed to update application status:', response.statusText);
// //       }
// //     } catch (error) {
// //       console.error('Error updating application status:', error);
// //     }
// //   };

// //   const openModal = (url) => {
// //     setModalContent(url);
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setModalContent(null);
// //   };

// //   return (
// //     <div className="admin-dash-dashboard">
// //       <header className="admin-dash-header">
// //         <div className="burger-menu" onClick={toggleSidebar}>
// //           <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
// //         </div>

// //         <div className="admin-dash-search-box">
// //           <input type="text" placeholder="Search..." />
// //         </div>

// //         <div className="admin-dash-header-icons">
// //           <div className="admin-dash-account">
// //             <img src="/manngo.jpg" alt="Admin Profile" />
// //           </div>
// //         </div>

// //         <button className="toggle-user-card-btn" onClick={toggleUserCard}>
// //           {isUserCardVisible ? 'Hide Users' : 'See All Users'}
// //         </button>

// //         <button className="toggle-application-card-btn" onClick={toggleApplicationCard}>
// //           {isApplicationCardVisible ? 'Hide Applications' : 'See User Applications'}
// //         </button>
// //       </header>

// //       <div className="admin-dash-container">
// //         <nav className={`admin-dash-sidebar ${isSidebarOpen ? 'open' : ''}`}>
// //           <div className="admin-dash-sidebar-header">
// //             <div className="close-sidebar" onClick={toggleSidebar}>
// //               <i className="fas fa-times"></i>
// //             </div>
// //           </div>
// //           <div className="admin-dash-side-navbar">
// //             <span>Management</span>
// //             <div className="admin-dash-links">
// //               <a href="#" className="admin-dash-active">Dashboard</a>
// //               <a href="#">Users</a>
// //               <a href="#">Products</a>
// //               <a href="#">Orders</a>
// //               <a href="#">Reports</a>
// //               <a href="#">Settings</a>
// //             </div>
// //           </div>
// //         </nav>

// //         <main className="admin-dash-main-body">
// //           <div className="admin-dash-promo-card">
// //             <h1>This page is only visible to Minority Rights Organizations (MRO) Consortium Admin</h1>
// //             <button>This Dashboard is tailored to streamline the processes involved in overseeing applications from Minority Rights Organizations (MRO) Consortium site users.</button>
// //           </div>

// //           {isUserCardVisible && (
// //             <div className="admin-dash-user-card">
// //               <h2>All Users</h2>
// //               <table className="admin-dash-user-table">
// //                 <thead>
// //                   <tr>
// //                     <th>ID</th>
// //                     <th>Name</th>
// //                     <th>Email</th>
// //                     <th>Role</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {users.map(user => (
// //                     <tr key={user.id}>
// //                       <td>{user.id}</td>
// //                       <td>{user.name}</td>
// //                       <td>{user.email}</td>
// //                       <td>{user.role}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           )}

// //           {isApplicationCardVisible && (
// //             <div className="admin-dash-application-card">
// //               <h2>User Applications</h2>
// //               <table className="admin-dash-application-table">
// //                 <thead>
// //                   <tr>
// //                     <th>Application ID</th>
// //                     <th>User Name</th>
// //                     <th>User Email</th>
// //                     <th>Status</th>
// //                     <th>Documents</th>
// //                     <th>Actions</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {applications.map(application => (
// //                     <tr key={application.id}>
// //                       <td>{application.id}</td>
// //                       <td>{application.username}</td> {/* Displaying username */}
// //                       <td>{application.email}</td> {/* Displaying email */}
// //                       <td>{application.status}</td>
// //                       <td>
// //                         <button onClick={() => openModal(application.registration_certificate)}>Registration Certificate</button>
// //                         <button onClick={() => openModal(application.agency_profile)}>Agency Profile</button>
// //                         <button onClick={() => openModal(application.audit_report)}>Audit Report</button>
// //                         <button onClick={() => openModal(application.ngo_consortium_mandate)}>NGO Consortium Mandate</button>
// //                         <button onClick={() => openModal(application.icrc_code_of_conduct)}>ICRC Code of Conduct</button>
// //                       </td>
// //                       <td>
// //                         <button 
// //                           onClick={() => updateApplicationStatus(application.id, 'Approved')}
// //                           className="approve-button"
// //                         >
// //                           Approve
// //                         </button>
// //                         <button 
// //                           onClick={() => updateApplicationStatus(application.id, 'Rejected')}
// //                           className="reject-button"
// //                         >
// //                           Reject
// //                         </button>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           )}
// //         </main>
// //       </div>

// //       {/* Modal for Document Viewing */}
// //       {isModalOpen && (
// //         <div className="modal-overlay" onClick={closeModal}>
// //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// //             <h2>Document Viewer</h2>
// //             {modalContent ? (
// //               <iframe src={modalContent} width="100%" height="600px" title="Document Viewer" />
// //             ) : (
// //               <p>No document to display.</p>
// //             )}
// //             <button onClick={closeModal}>Close</button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AdminDashboard;



// import React, { useState, useEffect } from 'react';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isUserCardVisible, setIsUserCardVisible] = useState(false);
//   const [isApplicationCardVisible, setIsApplicationCardVisible] = useState(false);
//   const [applications, setApplications] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [modalContent, setModalContent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleUserCard = () => {
//     setIsUserCardVisible(!isUserCardVisible);
//     if (!isUserCardVisible) {
//       fetchUsers(); // Fetch users when opening the user card
//     }
//   };

//   const toggleApplicationCard = () => {
//     setIsApplicationCardVisible(!isApplicationCardVisible);
//     if (!isApplicationCardVisible) {
//       fetchPendingApplications(); // Fetch applications when opening the card
//     }
//   };

//   // Fetch pending applications from the backend
//   const fetchPendingApplications = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:5000/admin/documents', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setApplications(data); // Assuming the response is an array of applications with document details
//       } else {
//         console.error('Failed to fetch applications:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching applications:', error);
//     }
//   };

//   // Fetch users from the backend
//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('/user', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setUsers(data);
//       } else {
//         console.error('Failed to fetch users:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   // Update the status of an application
//   const updateApplicationStatus = async (id, newStatus) => {
//     const method = newStatus === 'Approved' ? 'approve' : 'reject';
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/admin/documents/${id}/${method}`, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         setApplications((prevApplications) =>
//           prevApplications.map((app) =>
//             app.id === id ? { ...app, status: newStatus } : app
//           )
//         );
//       } else {
//         console.error('Failed to update application status:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error updating application status:', error);
//     }
//   };

//   const openModal = (url) => {
//     setModalContent(url);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalContent(null);
//   };

//   return (
//     <div className="admin-dash-dashboard">
//       <header className="admin-dash-header">
//         <div className="burger-menu" onClick={toggleSidebar}>
//           <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </div>
//         <div className="admin-dash-search-box">
//           <input type="text" placeholder="Search..." />
//         </div>
//         <div className="admin-dash-header-icons">
//           <div className="admin-dash-account">
//             <img src="/manngo.jpg" alt="Admin Profile" />
//           </div>
//         </div>
//         <button className="toggle-user-card-btn" onClick={toggleUserCard}>
//           {isUserCardVisible ? 'Hide Users' : 'See All Users'}
//         </button>
//         <button className="toggle-application-card-btn" onClick={toggleApplicationCard}>
//           {isApplicationCardVisible ? 'Hide Applications' : 'See User Applications'}
//         </button>
//       </header>

//       <div className="admin-dash-container">
//         <nav className={`admin-dash-sidebar ${isSidebarOpen ? 'open' : ''}`}>
//           <div className="admin-dash-sidebar-header">
//             <div className="close-sidebar" onClick={toggleSidebar}>
//               <i className="fas fa-times"></i>
//             </div>
//           </div>
//           <div className="admin-dash-side-navbar">
//             <span>Management</span>
//             <div className="admin-dash-links">
//               <a href="#" className="admin-dash-active">Dashboard</a>
//               <a href="#">Users</a>
//               <a href="#">Products</a>
//               <a href="#">Orders</a>
//               <a href="#">Reports</a>
//               <a href="#">Settings</a>
//             </div>
//           </div>
//         </nav>

//         <main className="admin-dash-main-body">
//           <div className="admin-dash-promo-card">
//             <h1>This page is only visible to Minority Rights Organizations (MRO) Consortium Admin</h1>
//             <button>This Dashboard is tailored to streamline the processes involved in overseeing applications from Minority Rights Organizations (MRO) Consortium site users.</button>
//           </div>

//           {isUserCardVisible && (
//             <div className="admin-dash-user-card">
//               <h2>All Users</h2>
//               <table className="admin-dash-user-table">
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Role</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map(user => (
//                     <tr key={user.id}>
//                       <td>{user.id}</td>
//                       <td>{user.name}</td>
//                       <td>{user.email}</td>
//                       <td>{user.role}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {isApplicationCardVisible && (
//             <div className="admin-dash-application-card">
//               <h2>User Applications</h2>
//               <table className="admin-dash-application-table">
//                 <thead>
//                   <tr>
//                     <th>Application ID</th>
//                     <th>User Name</th>
//                     <th>User Email</th>
//                     <th>Status</th>
//                     <th>Documents</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {applications.map(application => (
//                     <tr key={application.id}>
//                       <td>{application.id}</td>
//                       <td>{application.username}</td>
//                       <td>{application.email}</td>
//                       <td>{application.status}</td>
//                       <td>
//                         <button onClick={() => openModal(application.registration_certificate)}>Registration Certificate</button>
//                         <button onClick={() => openModal(application.agency_profile)}>Agency Profile</button>
//                         <button onClick={() => openModal(application.audit_report)}>Audit Report</button>
//                         <button onClick={() => openModal(application.ngo_consortium_mandate)}>NGO Consortium Mandate</button>
//                         <button onClick={() => openModal(application.icrc_code_of_conduct)}>ICRC Code of Conduct</button>
//                       </td>
//                       <td>
//                         <button 
//                           onClick={() => updateApplicationStatus(application.id, 'Approved')}
//                           className="approve-button"
//                         >
//                           Approve
//                         </button>
//                         <button 
//                           onClick={() => updateApplicationStatus(application.id, 'Rejected')}
//                           className="reject-button"
//                         >
//                           Reject
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </main>
//       </div>

//       {/* Modal for Document Viewing */}
//       {isModalOpen && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>Document Viewer</h2>
//             {modalContent ? (
//               <iframe src={modalContent} width="100%" height="600px" title="Document Viewer" />
//             ) : (
//               <p>No document to display.</p>
//             )}
//             <button onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;





// import React, { useState, useEffect } from 'react';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isUserCardVisible, setIsUserCardVisible] = useState(false);
//   const [isApplicationCardVisible, setIsApplicationCardVisible] = useState(false);
//   const [applications, setApplications] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [modalContent, setModalContent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleUserCard = () => {
//     setIsUserCardVisible(!isUserCardVisible);
//     if (!isUserCardVisible) {
//       fetchUsers(); // Fetch users when opening the user card
//     }
//   };

//   const toggleApplicationCard = () => {
//     setIsApplicationCardVisible(!isApplicationCardVisible);
//     if (!isApplicationCardVisible) {
//       fetchPendingApplications(); // Fetch applications when opening the card
//     }
//   };

//   // Fetch pending applications from the backend
//   const fetchPendingApplications = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:5000/admin/documents', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Fetched applications:', data); // Debug log
//         setApplications(data); // Assuming the response is an array of applications with document details
//       } else {
//         console.error('Failed to fetch applications:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching applications:', error);
//     }
//   };

//   // Fetch users from the backend
//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('/user', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setUsers(data);
//       } else {
//         console.error('Failed to fetch users:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   // Update the status of an application
//   const updateApplicationStatus = async (id, newStatus) => {
//     const method = newStatus === 'Approved' ? 'approve' : 'reject';
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/admin/documents/${id}/${method}`, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         setApplications((prevApplications) =>
//           prevApplications.map((app) =>
//             app.id === id ? { ...app, status: newStatus } : app
//           )
//         );
//       } else {
//         console.error('Failed to update application status:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error updating application status:', error);
//     }
//   };

//   const openModal = (url) => {
//     console.log('Opening document:', url); // Debug log
//     if (url) {
//       setModalContent(url);
//       setIsModalOpen(true);
//     } else {
//       console.error('No valid URL provided for the document.');
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalContent(null);
//   };

//   return (
//     <div className="admin-dash-dashboard">
//       <header className="admin-dash-header">
//         <div className="burger-menu" onClick={toggleSidebar}>
//           <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </div>
//         <div className="admin-dash-search-box">
//           <input type="text" placeholder="Search..." />
//         </div>
//         <div className="admin-dash-header-icons">
//           <div className="admin-dash-account">
//             <img src="/manngo.jpg" alt="Admin Profile" />
//           </div>
//         </div>
//         <button className="toggle-user-card-btn" onClick={toggleUserCard}>
//           {isUserCardVisible ? 'Hide Users' : 'See All Users'}
//         </button>
//         <button className="toggle-application-card-btn" onClick={toggleApplicationCard}>
//           {isApplicationCardVisible ? 'Hide Applications' : 'See User Applications'}
//         </button>
//       </header>

//       <div className="admin-dash-container">
//         <nav className={`admin-dash-sidebar ${isSidebarOpen ? 'open' : ''}`}>
//           <div className="admin-dash-sidebar-header">
//             <div className="close-sidebar" onClick={toggleSidebar}>
//               <i className="fas fa-times"></i>
//             </div>
//           </div>
//           <div className="admin-dash-side-navbar">
//             <span>Management</span>
//             <div className="admin-dash-links">
//               <a href="#" className="admin-dash-active">Dashboard</a>
//               <a href="#">Users</a>
//               <a href="#">Products</a>
//               <a href="#">Orders</a>
//               <a href="#">Reports</a>
//               <a href="#">Settings</a>
//             </div>
//           </div>
//         </nav>

//         <main className="admin-dash-main-body">
//           <div className="admin-dash-promo-card">
//             <h1>This page is only visible to Minority Rights Organizations (MRO) Consortium Admin</h1>
//             <button>This Dashboard is tailored to streamline the processes involved in overseeing applications from Minority Rights Organizations (MRO) Consortium site users.</button>
//           </div>

//           {isUserCardVisible && (
//             <div className="admin-dash-user-card">
//               <h2>All Users</h2>
//               <table className="admin-dash-user-table">
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Role</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map(user => (
//                     <tr key={user.id}>
//                       <td>{user.id}</td>
//                       <td>{user.name}</td>
//                       <td>{user.email}</td>
//                       <td>{user.role}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {isApplicationCardVisible && (
//             <div className="admin-dash-application-card">
//               <h2>User Applications</h2>
//               <table className="admin-dash-application-table">
//                 <thead>
//                   <tr>
//                     <th>Application id</th>
//                     <th>User Name</th>
//                     <th>User Email</th>
//                     <th>Status</th>
//                     <th>Documents</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {applications.map(application => (
//                     <tr key={application.id}>
//                       <td>{application.id}</td>
//                       <td>{application.username}</td>
//                       <td>{application.email}</td>
//                       <td>{application.status}</td>
//                       <td>
//                         <button onClick={() => openModal(application.registration_certificate)}>Registration Certificate</button>
//                         <button onClick={() => openModal(application.agency_profile)}>Agency Profile</button>
//                         <button onClick={() => openModal(application.audit_report)}>Audit Report</button>
//                         <button onClick={() => openModal(application.ngo_consortium_mandate)}>NGO Consortium Mandate</button>
//                         <button onClick={() => openModal(application.icrc_code_of_conduct)}>ICRC Code of Conduct</button>
//                       </td>
//                       <td>
//                         <button 
//                           onClick={() => updateApplicationStatus(application.id, 'Approved')}
//                           className="approve-button"
//                         >
//                           Approve
//                         </button>
//                         <button 
//                           onClick={() => updateApplicationStatus(application.id, 'Rejected')}
//                           className="reject-button"
//                         >
//                           Reject
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </main>
//       </div>

//       {/* Modal for Document Viewing */}
//       {isModalOpen && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>Document Viewer</h2>
//             {modalContent ? (
//               <iframe 
//                 src={modalContent} 
//                 width="100%" 
//                 height="600px" 
//                 title="Document Viewer" 
//                 style={{ border: 'none' }} // Ensure no border styles interfere
//               />
//             ) : (
//               <p>No document to display.</p>
//             )}
//             <button onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;




// import React, { useState } from 'react';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isUserCardVisible, setIsUserCardVisible] = useState(false);
//   const [isApplicationCardVisible, setIsApplicationCardVisible] = useState(false);
//   const [applications, setApplications] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [modalContent, setModalContent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleUserCard = () => {
//     setIsUserCardVisible(!isUserCardVisible);
//     if (!isUserCardVisible) {
//       fetchUsers(); // Fetch users when opening the user card
//     }
//   };

//   const toggleApplicationCard = () => {
//     setIsApplicationCardVisible(!isApplicationCardVisible);
//     if (!isApplicationCardVisible) {
//       fetchPendingApplications(); // Fetch applications when opening the card
//     }
//   };

//   // Fetch pending applications from the backend
//   const fetchPendingApplications = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:5000/admin/documents', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Fetched applications:', data); // Debug log
//         setApplications(data); // Assuming the response is an array of applications with document details
//       } else {
//         console.error('Failed to fetch applications:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching applications:', error);
//     }
//   };

//   // Fetch users from the backend
//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:5000/user', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setUsers(data);
//       } else {
//         console.error('Failed to fetch users:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   // Update the status of an application
//   const updateApplicationStatus = async (id, newStatus) => {
//     const method = newStatus === 'Approved' ? 'approve' : 'reject';
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/admin/documents/${id}/${method}`, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         setApplications((prevApplications) =>
//           prevApplications.map((app) =>
//             app.id === id ? { ...app, status: newStatus } : app
//           )
//         );
//       } else {
//         console.error('Failed to update application status:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error updating application status:', error);
//     }
//   };

//   // Open modal to view the document
//   const openModal = (documentPath) => {
//     const baseUrl = 'http://127.0.0.1:5000/uploads'; // Assuming your documents are in the /uploads directory
//     const url = `${baseUrl}/${documentPath}`; // Construct full URL
//     console.log('Opening document:', url); // Debug log
//     if (url) {
//       setModalContent(url); // Set the document URL to be shown in the iframe
//       setIsModalOpen(true);
//     } else {
//       console.error('No valid URL provided for the document.');
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalContent(null);
//   };

//   return (
//     <div className="admin-dash-dashboard">
//       <header className="admin-dash-header">
//         <div className="burger-menu" onClick={toggleSidebar}>
//           <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </div>
//         <div className="admin-dash-search-box">
//           <input type="text" placeholder="Search..." />
//         </div>
//         <div className="admin-dash-header-icons">
//           <div className="admin-dash-account">
//             <img src="/manngo.jpg" alt="Admin Profile" />
//           </div>
//         </div>
//         <button className="toggle-user-card-btn" onClick={toggleUserCard}>
//           {isUserCardVisible ? 'Hide Users' : 'See All Users'}
//         </button>
//         <button className="toggle-application-card-btn" onClick={toggleApplicationCard}>
//           {isApplicationCardVisible ? 'Hide Applications' : 'See User Applications'}
//         </button>
//       </header>

//       <div className="admin-dash-container">
//         <nav className={`admin-dash-sidebar ${isSidebarOpen ? 'open' : ''}`}>
//           <div className="admin-dash-sidebar-header">
//             <div className="close-sidebar" onClick={toggleSidebar}>
//               <i className="fas fa-times"></i>
//             </div>
//           </div>
//           <div className="admin-dash-side-navbar">
//             <span>Management</span>
//             <div className="admin-dash-links">
//               <a href="#" className="admin-dash-active">Dashboard</a>
//               <a href="#">Users</a>
//               <a href="#">Products</a>
//               <a href="#">Orders</a>
//               <a href="#">Reports</a>
//               <a href="#">Settings</a>
//             </div>
//           </div>
//         </nav>

//         <main className="admin-dash-main-body">
//           <div className="admin-dash-promo-card">
//             <h1>This page is only visible to Minority Rights Organizations (MRO) Consortium Admin</h1>
//             <button>This Dashboard is tailored to streamline the processes involved in overseeing applications from Minority Rights Organizations (MRO) Consortium site users.</button>
//           </div>

//           {isUserCardVisible && (
//             <div className="admin-dash-user-card">
//               <h2>All Users</h2>
//               <table className="admin-dash-user-table">
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Role</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map(user => (
//                     <tr key={user.id}>
//                       <td>{user.id}</td>
//                       <td>{user.name}</td>
//                       <td>{user.email}</td>
//                       <td>{user.role}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {isApplicationCardVisible && (
//             <div className="admin-dash-application-card">
//               <h2>User Applications</h2>
//               <table className="admin-dash-application-table">
//                 <thead>
//                   <tr>
//                     <th>Application ID</th>
//                     <th>User Name</th>
//                     <th>User Email</th>
//                     <th>Status</th>
//                     <th>Documents</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {applications.map(application => (
//                     <tr key={application.id}>
//                       <td>{application.id}</td>
//                       <td>{application.username}</td>
//                       <td>{application.email}</td>
//                       <td>{application.status}</td>
//                       <td>
//                         <button onClick={() => openModal(application.registration_certificate)}>Registration Certificate</button>
//                         <button onClick={() => openModal(application.agency_profile)}>Agency Profile</button>
//                         <button onClick={() => openModal(application.audit_report)}>Audit Report</button>
//                         <button onClick={() => openModal(application.ngo_consortium_mandate)}>NGO Consortium Mandate</button>
//                         <button onClick={() => openModal(application.icrc_code_of_conduct)}>ICRC Code of Conduct</button>
//                       </td>
//                       <td>
//                         <button 
//                           onClick={() => updateApplicationStatus(application.id, 'Approved')}
//                           className="approve-button"
//                         >
//                           Approve
//                         </button>
//                         <button 
//                           onClick={() => updateApplicationStatus(application.id, 'Rejected')}
//                           className="reject-button"
//                         >
//                           Reject
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </main>
//       </div>

//       {/* Modal for Document Viewing */}
//       {isModalOpen && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>Document Viewer</h2>
//             <iframe 
//               src={modalContent} 
//               title="Document" 
//               width="100%" 
//               height="600px" 
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;



import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserCardVisible, setIsUserCardVisible] = useState(false);
  const [isApplicationCardVisible, setIsApplicationCardVisible] = useState(false);
  const [applications, setApplications] = useState([]);
  const [users, setUsers] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleUserCard = () => {
    setIsUserCardVisible(!isUserCardVisible);
    if (!isUserCardVisible) {
      fetchUsers(); // Fetch users when opening the user card
    }
  };

  const toggleApplicationCard = () => {
    setIsApplicationCardVisible(!isApplicationCardVisible);
    if (!isApplicationCardVisible) {
      fetchPendingApplications(); // Fetch applications when opening the card
    }
  };

  // Fetch pending applications from the backend
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
        console.log('Fetched applications:', data); // Debug log
        setApplications(data); // Assuming the response is an array of applications with document details
      } else {
        console.error('Failed to fetch applications:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  // Fetch users from the backend
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Failed to fetch users:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Update the status of an application
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

  // Open modal to view the document
  const openModal = (documentPath) => {
    const baseUrl = 'http://127.0.0.1:5000/uploads'; // Assuming your documents are in the /uploads directory
    const url = `${baseUrl}/${documentPath}`; // Construct full URL
    console.log('Opening document:', url); // Debug log
    if (url) {
      setModalContent(url); // Set the document URL to be shown in the iframe
      setIsModalOpen(true);
    } else {
      console.error('No valid URL provided for the document.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="admin-dash-dashboard">
      <header className="admin-dash-header">
        <div className="burger-menu" onClick={toggleSidebar}>
          <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <div className="admin-dash-search-box">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="admin-dash-header-icons">
          <div className="admin-dash-account">
            <img src="/manngo.jpg" alt="Admin Profile" />
          </div>
        </div>
        <button className="toggle-user-card-btn" onClick={toggleUserCard}>
          {isUserCardVisible ? 'Hide Users' : 'See All Users'}
        </button>
        <button className="toggle-application-card-btn" onClick={toggleApplicationCard}>
          {isApplicationCardVisible ? 'Hide Applications' : 'See User Applications'}
        </button>
      </header>

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

          {isUserCardVisible && (
            <div className="admin-dash-user-card">
              <h2>All Users</h2>
              <table className="admin-dash-user-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {isApplicationCardVisible && (
            <div className="admin-dash-application-card">
              <h2>User Applications</h2>
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
                  {applications.map(application => (
                    <tr key={application.id}>
                      <td>{application.id}</td>
                      <td>{application.username}</td>
                      <td>{application.email}</td>
                      <td>{application.status}</td>
                      <td>
                        <button onClick={() => openModal(application.registration_certificate)}>Registration Certificate</button>
                        <button onClick={() => openModal(application.agency_profile)}>Agency Profile</button>
                        <button onClick={() => openModal(application.audit_report)}>Audit Report</button>
                        <button onClick={() => openModal(application.ngo_consortium_mandate)}>NGO Consortium Mandate</button>
                        <button onClick={() => openModal(application.icrc_code_of_conduct)}>ICRC Code of Conduct</button>
                      </td>
                      <td>
                        <button 
                          onClick={() => updateApplicationStatus(application.id, 'Approved')}
                          className="approve-button"
                        >
                          Approve
                        </button>
                        <button 
                          onClick={() => updateApplicationStatus(application.id, 'Rejected')}
                          className="reject-button"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>

      {/* Modal for Document Viewing */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Document Viewer</h2>
            <iframe 
              src={modalContent} 
              title="Document" 
              width="100%" 
              height="600px" 
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
