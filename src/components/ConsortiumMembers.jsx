// // // import React from 'react';
// // // import './ConsortiumMembers.css';

// // // const consortiumMembers = [
// // //   "Aadamiga Somalia (AS)",
// // //   "Aamin Organization (Aamin)",
// // //   "Access Development and Relief Organization (ADRO)",
// // //   "Access for Relief and Development (ACRED)",
// // //   "Action Against Disasters Somalia (AADSOM)",
// // //   "Action Against Hunger (ACF)",
// // //   "Action for Rural Education and Agriculture Solutions (AREAS)",
// // //   "Action for Women and Children Concern (AWCC)",
// // //   "Action in Semi-Arid Lands (ASAL)",
// // //   "Action of Somali Social Workers (ACSOS)",
// // //   "ActionAid International (AAIS)",
// // //   "ADVENTIST DEVELOPMENT & RELIEF AGENCY - SOMALIA (ADRA SOMALIA)",
// // //   "Adventist Development and Relief Agency (ADRASOM)",
// // //   "Adventist Development and Relief Agency (ADRA Somalia)",
// // //   "Africa Educational Trust (AET)",
// // //   "Africa for Rural Development (ARD)",
// // //   "AFRICAN DEVELOPMENT SOLUTIONS (Adeso)",
// // //   "African Network for the prevention and protection Against Child Abuse and Neglect (ANPPCAN-SOM)",
// // //   "AFRICAN RELIEF & DEVELOPMENT (ARD)",
// // //   // Continue to add all the members in a similar format
// // // ];

// // // const ConsortiumMembers = () => {
// // //   return (
// // //     <div className="consortium-container">
// // //       <p className="consortium-title">Consortium Members</p>
// // //       <ul className="consortium-list">
// // //         {consortiumMembers.map((member, index) => (
// // //           <li key={index} className="consortium-item">
// // //             {member}
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default ConsortiumMembers;



// // import React from 'react';
// // import './ConsortiumMembers.css';

// // const consortiumMembers = [
// //   "Aadamiga Somalia (AS)",
// //   "Aamin Organization (Aamin)",
// //   "Access Development and Relief Organization (ADRO)",
// //   "Access for Relief and Development (ACRED)",
// //   "Action Against Disasters Somalia (AADSOM)",
// //   "Action Against Hunger (ACF)",
// //   "Action for Rural Education and Agriculture Solutions (AREAS)",
// //   "Action for Women and Children Concern (AWCC)",
// //   "Action in Semi-Arid Lands (ASAL)",
// //   "Action of Somali Social Workers (ACSOS)",
// //   "ActionAid International (AAIS)",
// //   "ADVENTIST DEVELOPMENT & RELIEF AGENCY - SOMALIA (ADRA SOMALIA)",
// //   "Adventist Development and Relief Agency (ADRASOM)",
// //   "Adventist Development and Relief Agency (ADRA Somalia)",
// //   "Africa Educational Trust (AET)",
// //   "Africa for Rural Development (ARD)",
// //   "AFRICAN DEVELOPMENT SOLUTIONS (Adeso)",
// //   "African Network for the prevention and protection Against Child Abuse and Neglect (ANPPCAN-SOM)",
// //   "AFRICAN RELIEF & DEVELOPMENT (ARD)",
// //   // Add all other members here
// // ];

// // const ConsortiumMembers = () => {
// //   return (
// //     <div className="consortium-page">
// //       {/* Left Section */}
// //       <div className="sidebar">
// //         <div className="join-section">
// //           <h3>Join</h3>
// //           <p>Become a member of our consortium by completing the registration process.</p>
// //           <button className="join-button">Join Now</button>
// //         </div>

// //         <div className="current-members-section">
// //           <h3>Current Members</h3>
// //           <p>We currently have over {consortiumMembers.length} active members working towards shared goals.</p>
// //         </div>

// //         <div className="feature-stories-section">
// //           <h3>Feature Stories</h3>
// //           <p>Read stories of impact and collaboration among our consortium members.</p>
// //         </div>
// //       </div>

// //       {/* Right Section: Consortium Members List */}
// //       <div className="consortium-container">
// //         <h2 className="consortium-title">Consortium Members</h2>
// //         <ul className="consortium-list">
// //           {consortiumMembers.map((member, index) => (
// //             <li key={index} className="consortium-item">
// //               {member}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ConsortiumMembers;


// import React from 'react';
// import './ConsortiumMembers.css';

// const consortiumMembers = [
//   "Aadamiga Somalia (AS)",
//   "Aamin Organization (Aamin)",
//   "Access Development and Relief Organization (ADRO)",
//   "Access for Relief and Development (ACRED)",
//   "Action Against Disasters Somalia (AADSOM)",
//   "Action Against Hunger (ACF)",
//   "Action for Rural Education and Agriculture Solutions (AREAS)",
//   "Action for Women and Children Concern (AWCC)",
//   "Action in Semi-Arid Lands (ASAL)",
//   "Action of Somali Social Workers (ACSOS)",
//   "ActionAid International (AAIS)",
//   "ADVENTIST DEVELOPMENT & RELIEF AGENCY - SOMALIA (ADRA SOMALIA)",
//   "Adventist Development and Relief Agency (ADRASOM)",
//   "Adventist Development and Relief Agency (ADRA Somalia)",
//   "Africa Educational Trust (AET)",
//   "Africa for Rural Development (ARD)",
//   "AFRICAN DEVELOPMENT SOLUTIONS (Adeso)",
//   "African Network for the prevention and protection Against Child Abuse and Neglect (ANPPCAN-SOM)",
//   "AFRICAN RELIEF & DEVELOPMENT (ARD)",
//   // Add all other members here
// ];

// const ConsortiumMembers = () => {
//   return (
//     <div className="consortium-page">
//       {/* Left Section */}
//       <div className="sidebar">
//         <div className="join-section">
//           <h3>
//             <a href="#join" className="sidebar-link">Join</a>
//           </h3>
//           <p>Become a member of our consortium by completing the registration process.</p>
//           <button className="join-button">Join Now</button>
//         </div>

//         <div className="current-members-section">
//           <h3>
//             <a href="#current-members" className="sidebar-link">Current Members</a>
//           </h3>
//           <p>We currently have over {consortiumMembers.length} active members working towards shared goals.</p>
//         </div>

//         <div className="feature-stories-section">
//           <h3>
//             <a href="#feature-stories" className="sidebar-link">Feature Stories</a>
//           </h3>
//           <p>Read stories of impact and collaboration among our consortium members.</p>
//         </div>
//       </div>

//       {/* Right Section: Consortium Members List */}
//       <div className="consortium-container">
//         <h2 className="consortium-title">Consortium Members</h2>
//         <ul className="consortium-list">
//           {consortiumMembers.map((member, index) => (
//             <li key={index} className="consortium-item">
//               {member}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ConsortiumMembers;


import React from 'react';
import './ConsortiumMembers.css';

const consortiumMembers = [
  "Aadamiga Somalia (AS)",
  "Aamin Organization (Aamin)",
  "Access Development and Relief Organization (ADRO)",
  "Access for Relief and Development (ACRED)",
  "Action Against Disasters Somalia (AADSOM)",
  "Action Against Hunger (ACF)",
  "Action for Rural Education and Agriculture Solutions (AREAS)",
  "Action for Women and Children Concern (AWCC)",
  "Action in Semi-Arid Lands (ASAL)",
  "Action of Somali Social Workers (ACSOS)",
  "ActionAid International (AAIS)",
  "ADVENTIST DEVELOPMENT & RELIEF AGENCY - SOMALIA (ADRA SOMALIA)",
  "Adventist Development and Relief Agency (ADRASOM)",
  "Adventist Development and Relief Agency (ADRA Somalia)",
  "Africa Educational Trust (AET)",
  "Africa for Rural Development (ARD)",
  "AFRICAN DEVELOPMENT SOLUTIONS (Adeso)",
  "African Network for the prevention and protection Against Child Abuse and Neglect (ANPPCAN-SOM)",
  "AFRICAN RELIEF & DEVELOPMENT (ARD)",
  // Add all other members here
];

const ConsortiumMembers = () => {
  return (
    <div className="consortium-page">
      {/* Right Section: Consortium Members List */}
      <div className="consortium-container">
        <h2 className="consortium-title">Consortium Members</h2>
        <ul className="consortium-list">
          {consortiumMembers.map((member, index) => (
            <li key={index} className="consortium-item">
              {member}
            </li>
          ))}
        </ul>
      </div>

      {/* Left Section */}
      <div className="sidebar">
        <div className="join-section">
          <h3>
       
          </h3>
          <p>Become a member of our consortium by completing the registration process.</p>
          <button className="join-button">Join Now</button>
        </div>

        <div className="current-members-section">
          <h3>
            <a href="#current-members" className="sidebar-link">Current Members</a>
          </h3>
        </div>

        <div className="feature-stories-section">
          <h3>
            <a href="#feature-stories" className="sidebar-link">Feature Stories</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ConsortiumMembers;
