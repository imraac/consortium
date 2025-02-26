import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './FormFeedbackPage.css'; 

const FormFeedbackPage = () => {
    const location = useLocation();
    const { message, isError } = location.state || { message: 'No message provided', isError: false };

    return (
        <div className={`feedbackPage ${isError ? 'error' : 'success'}`}>
            <h2>{isError ? 'Form Submission Failed' : 'Congratulations!'}</h2>
            <p>{message}</p>
            {!isError && (
                <p className="successDetails">
                </p>
            )}
            {isError && (
                <p className="errorDetails">
                    seems like you took alot of time in one page. log back in 
                </p>
            )}

            <button className="backButton" onClick={() => window.history.back()}>Go Back</button>

            <Link to="/document-upload">
                <button className="uploadButton">
                    Go to Document Upload
                </button>
            </Link>
        </div>
    );
};

export default FormFeedbackPage;
