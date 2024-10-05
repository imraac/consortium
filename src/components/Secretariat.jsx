// // Secretariat.jsx
// import React from 'react';
// import './Secretariat.css'; // Make sure to import the CSS file
// import Footer from './Footer';
// const Secretariat = () => {
//   // Secretariat members
//   const secretariatMembers = [
//     { role: 'Director', email: 'director@mrosconsortium.org' },
//     { role: 'Deputy Director', email: 'dep.director@mrosconsortium.org' },
//     { role: 'General Secretary', email: 'secretary@mrosconsortium.org' },
//     { role: 'Treasurer', email: 'treasure@mrosconsortium.org' },
//     { role: 'Membership & Communications Officer', email: 'memb.comms@mrosconsortium.org' },
//     { role: 'Program Support Officer', email: 'program.support@mrosconsortium.org' },
//     { role: 'Advocacy and Communications Specialist', email: 'advocacy@mrosconsortium.org' },
//     { role: 'Finance & Grants Manager', email: 'finance@mrosconsortium.org' },
//   ];

//   // Regional Coordinators
//   const regionalCoordinators = [
//     { name: 'Regional Coordinator - Benadir (Mogadishu based)', email: 'rc.benadir@mrosconsortium.org' },
//     { name: 'Regional Coordinator – Somaliland (Hargeisa based)', email: 'rc.somaliland@mrosconsortium.org' },
//     { name: 'Regional Coordinator - Hirshabelle (Jowhar based)', email: 'rc.hirshabelle@mrosconsortium.org' },
//     { name: 'Regional Coordinator – South west state (Baidoa based)', email: 'rc.southwest@mrosconsortium.org' },
//     { name: 'Regional Coordinator - Jubaland (Doolow based)', email: 'rc.jubballand@mrosconsortium.org' },
//     { name: 'Regional Coordinator – Puntland (Garowe based)', email: 'rc.puntland@mrosconsortium.org' },
//     { name: 'Regional Coordinator - Galmudug (Dusamareb based)', email: 'rc.galmudug@mrosconsortium.org' },
//   ];

//   // Seats Representatives
//   const seatsRepresentatives = [
//     { name: 'Somali protection Cluster Seat', email: 'spc.seat@mrosconsortium.org' },
//     { name: 'Humanitarian Country Team HCT Seat', email: 'hct.seat@mrosconsortium.org' },
//     { name: 'Humanitarian Task force HTF Seat', email: 'htf.seat@mrosconsortium.org' },
//     { name: 'Gender in Humanitarian Action (GIHA) Seat', email: 'giha.seat@mrosconsortium.org' },
//   ];

//   return (
//     <div className="secretariat-container">
//       {/* Secretariat Section */}
//       <div className="secretariat-section">
//         <h1 className='h'>Secretariat</h1>
//         <ul className="secretariat-list">
//           {secretariatMembers.map((member, index) => (
//             <li key={index} className="secretariat-item">
//               <span className="secretariat-role">{member.role}</span>
//               <a href={`mailto:${member.email}`} className="secretariat-email">{member.email}</a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Regional Representatives Section */}
//       <div className="secretariat-section">
//         <h1 className='h'>Regional Representatives</h1>
//         <ul className="secretariat-list">
//           {regionalCoordinators.map((rep, index) => (
//             <li key={index} className="secretariat-item">
//               <span className="secretariat-role">{rep.name}</span>
//               <a href={`mailto:${rep.email}`} className="secretariat-email">{rep.email}</a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Seats Representatives Section */}
//       <div className="secretariat-section">
//         <h1 className='h'>Seats Representatives</h1>
//         <ul className="secretariat-list">
//           {seatsRepresentatives.map((seat, index) => (
//             <li key={index} className="secretariat-item">
//               <span className="secretariat-role">{seat.name}</span>
//               <a href={`mailto:${seat.email}`} className="secretariat-email">{seat.email}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Footer />
//     </div>
    
//   );
// };

// export default Secretariat;


import React from 'react';
import './Secretariat.css'; // Import the CSS file
import Footer from './Footer'; // Import the Footer component

const Secretariat = () => {
  // Secretariat members
  const secretariatMembers = [
    { role: 'Director', email: 'director@mrosconsortium.org' },
    { role: 'Deputy Director', email: 'dep.director@mrosconsortium.org' },
    { role: 'General Secretary', email: 'secretary@mrosconsortium.org' },
    { role: 'Treasurer', email: 'treasure@mrosconsortium.org' },
    { role: 'Membership & Communications Officer', email: 'memb.comms@mrosconsortium.org' },
    { role: 'Program Support Officer', email: 'program.support@mrosconsortium.org' },
    { role: 'Advocacy and Communications Specialist', email: 'advocacy@mrosconsortium.org' },
    { role: 'Finance & Grants Manager', email: 'finance@mrosconsortium.org' },
  ];

  // Regional Coordinators
  const regionalCoordinators = [
    { name: 'Regional Coordinator - Benadir (Mogadishu based)', email: 'rc.benadir@mrosconsortium.org' },
    { name: 'Regional Coordinator – Somaliland (Hargeisa based)', email: 'rc.somaliland@mrosconsortium.org' },
    { name: 'Regional Coordinator - Hirshabelle (Jowhar based)', email: 'rc.hirshabelle@mrosconsortium.org' },
    { name: 'Regional Coordinator – South west state (Baidoa based)', email: 'rc.southwest@mrosconsortium.org' },
    { name: 'Regional Coordinator - Jubaland (Doolow based)', email: 'rc.jubballand@mrosconsortium.org' },
    { name: 'Regional Coordinator – Puntland (Garowe based)', email: 'rc.puntland@mrosconsortium.org' },
    { name: 'Regional Coordinator - Galmudug (Dusamareb based)', email: 'rc.galmudug@mrosconsortium.org' },
  ];

  // Seats Representatives
  const seatsRepresentatives = [
    { name: 'Somali protection Cluster Seat', email: 'spc.seat@mrosconsortium.org' },
    { name: 'Humanitarian Country Team HCT Seat', email: 'hct.seat@mrosconsortium.org' },
    { name: 'Humanitarian Task force HTF Seat', email: 'htf.seat@mrosconsortium.org' },
    { name: 'Gender in Humanitarian Action (GIHA) Seat', email: 'giha.seat@mrosconsortium.org' },
  ];

  return (
    <div className="secretariat-container">
      {/* Secretariat Section */}
      <div className="secretariat-section">
        <h1 className='h'>Secretariat</h1>
        <ul className="secretariat-list">
          {secretariatMembers.map((member, index) => (
            <li key={index} className="secretariat-item">
              <span className="secretariat-role">{member.role}</span>
              <a href={`mailto:${member.email}`} className="secretariat-email">{member.email}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Regional Representatives Section */}
      <div className="secretariat-section">
        <h1 className='h'>Regional Representatives</h1>
        <ul className="secretariat-list">
          {regionalCoordinators.map((rep, index) => (
            <li key={index} className="secretariat-item">
              <span className="secretariat-role">{rep.name}</span>
              <a href={`mailto:${rep.email}`} className="secretariat-email">{rep.email}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Seats Representatives Section */}
      <div className="secretariat-section">
        <h1 className='h'>Seats Representatives</h1>
        <ul className="secretariat-list">
          {seatsRepresentatives.map((seat, index) => (
            <li key={index} className="secretariat-item">
              <span className="secretariat-role">{seat.name}</span>
              <a href={`mailto:${seat.email}`} className="secretariat-email">{seat.email}</a>
            </li>
          ))}
        </ul>
      </div>
<div className='footer'><Footer /></div>
      
    </div>
  );
};

export default Secretariat;
