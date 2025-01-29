
import React from 'react';
import './ProgressBar.css'; 

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
