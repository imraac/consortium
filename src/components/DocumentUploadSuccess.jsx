import React from 'react';
import './DocumentsUploadSuccess.css.css';

const DocumentUploadSuccess = ({ approvalMessage, onClose }) => {
    return (
        <div className="modal">
            <div className="modalContent">
                <h3>Hello User</h3>
                <p>Your documents have been uploaded and are pending approval. Kindly wait for Admin Approval</p>
                <p>{approvalMessage}</p> {/* Display approval message */}
                <button className="closeButton" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default DocumentUploadSuccess;
