// // ProgressBar.js
// import React from 'react';
// import './ProgressBar.css'; // Import your CSS file for styling

// const ProgressBar = ({ currentStep, totalSteps }) => {
//   const percentage = (currentStep / totalSteps) * 100;

//   return (
//     <div className="progress-container">
//       <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
//       <div className="progress-steps">
//         {Array.from({ length: totalSteps }, (_, index) => (
//           <div key={index} className={`step ${index < currentStep ? 'completed' : ''}`}>
//             {index + 1}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;



// ProgressBar.js
import React from 'react';
import './ProgressBar.css'; // Import your CSS file for styling

const ProgressBar = ({ currentStep, totalSteps, stepNames }) => {
  const percentage = (currentStep / totalSteps) * 90;

  return (
    <div className="progress-container">
        <>your progress</>
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      <div className="progress-steps">
        {stepNames.map((stepName, index) => (
          <div key={index} className={`step ${index < currentStep ? 'completed' : ''}`}>
            {stepName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
