import React from 'react';
import { useLocation } from 'react-router-dom';
import './FormFeedbackPage.css'; // Ensure you create this CSS file for styles

const FormFeedbackPage = () => {
    const location = useLocation();
    const { message, isError } = location.state || { message: 'No message provided', isError: false };

    return (
        <div className={`feedbackPage ${isError ? 'error' : 'success'}`}>
            <h2>{isError ? 'Form Submission Failed' : 'Congratulations!'}</h2>
            <p>{message}</p>
            {!isError && (
                <p className="successDetails">
                    Your registration is almost complete. Kindly note this DOES NOT MEAN your are a member !
                </p>
            )}
            {isError && (
                <p className="errorDetails">
                    Please review the information you submitted. Make sure all fields are filled out correctly and try again.
                </p>
            )}
            <button className="backButton" onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
};

export default FormFeedbackPage;
