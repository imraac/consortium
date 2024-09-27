import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './DocumentUpload.css'; // Ensure this CSS file for styles

const DocumentUpload = () => {
    const [files, setFiles] = useState({
        registrationCertificate: null,
        agencyProfile: null,
        auditReport: null,
        ngoConsortiumMandate: null,
        icrcCodeOfConduct: null,
    });

    const [uploadStatus, setUploadStatus] = useState({
        registrationCertificate: 'No file chosen',
        agencyProfile: 'No file chosen',
        auditReport: 'No file chosen',
        ngoConsortiumMandate: 'No file chosen',
        icrcCodeOfConduct: 'No file chosen',
    });

    const [showSuccessModal, setShowSuccessModal] = useState(false); // Modal state
    const navigate = useNavigate(); // Initialize useNavigate

    const handleFileChange = (e, documentName) => {
        const file = e.target.files[0];

        // Validate file type (PDF or Word)
        const validTypes = [
            'application/pdf', 
            'application/msword', 
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        if (file && validTypes.includes(file.type)) {
            setFiles(prevFiles => ({ ...prevFiles, [documentName]: file }));
            setUploadStatus(prevStatus => ({ ...prevStatus, [documentName]: 'Successful' }));
        } else {
            alert('Please upload a valid PDF or Word document.');
            e.target.value = ''; // Clear the input
            setUploadStatus(prevStatus => ({ ...prevStatus, [documentName]: 'No file chosen' }));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, documentName, inputRef) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        
        if (file) {
            // Set the dropped file to the input's files array
            inputRef.current.files = e.dataTransfer.files;
            handleFileChange({ target: inputRef.current }, documentName);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform submission logic (e.g., sending files to server)
        console.log('Files to upload:', files);

        // Show the success message
        setShowSuccessModal(true);

        // After a delay, navigate to the member-account-administrator page
        setTimeout(() => {
            navigate('/member-account-administrator'); // Navigate to the desired page
        }, 3000); // Redirect after 3 seconds (you can adjust the timing)
    };

    // Create refs for inputs to programmatically update input's file list
    const registrationRef = React.createRef();
    const agencyProfileRef = React.createRef();
    const auditReportRef = React.createRef();
    const ngoConsortiumMandateRef = React.createRef();
    const icrcCodeOfConductRef = React.createRef();

    return (
        <div className="documentUpload">
            <h2>Upload Required Documents</h2>
            <form onSubmit={handleSubmit} className="uploadForm">
                <div className="formGroup" 
                     onDragOver={handleDragOver} 
                     onDrop={(e) => handleDrop(e, 'registrationCertificate', registrationRef)}>
                    <label>
                        Registration Certificate:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'registrationCertificate')}
                            ref={registrationRef}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.registrationCertificate === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.registrationCertificate}
                    </p>
                </div>
                <div className="formGroup" 
                     onDragOver={handleDragOver} 
                     onDrop={(e) => handleDrop(e, 'agencyProfile', agencyProfileRef)}>
                    <label>
                        Agency Profile:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'agencyProfile')}
                            ref={agencyProfileRef}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.agencyProfile === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.agencyProfile}
                    </p>
                </div>
                <div className="formGroup" 
                     onDragOver={handleDragOver} 
                     onDrop={(e) => handleDrop(e, 'auditReport', auditReportRef)}>
                    <label>
                        Audit Report:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'auditReport')}
                            ref={auditReportRef}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.auditReport === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.auditReport}
                    </p>
                </div>
                <div className="formGroup" 
                     onDragOver={handleDragOver} 
                     onDrop={(e) => handleDrop(e, 'ngoConsortiumMandate', ngoConsortiumMandateRef)}>
                    <label>
                        Signed NGO Consortium Mandate:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'ngoConsortiumMandate')}
                            ref={ngoConsortiumMandateRef}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.ngoConsortiumMandate === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.ngoConsortiumMandate}
                    </p>
                </div>
                <div className="formGroup" 
                     onDragOver={handleDragOver} 
                     onDrop={(e) => handleDrop(e, 'icrcCodeOfConduct', icrcCodeOfConductRef)}>
                    <label>
                        Signed ICRC/Red Crescent Code of Conduct:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'icrcCodeOfConduct')}
                            ref={icrcCodeOfConductRef}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.icrcCodeOfConduct === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.icrcCodeOfConduct}
                    </p>
                </div>
                <button type="submit" className="submitButton">Upload Documents</button>
            </form>

            {/* Modal for success message */}
            {showSuccessModal && (
                <div className="modal">
                    <div className="modalContent">
                        <h3>Success!</h3>
                        <p>Your registration process was successful, and your documents have been uploaded.</p>
                        <button onClick={() => setShowSuccessModal(false)} className="closeButton">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DocumentUpload;
