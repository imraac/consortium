import { useState, createRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './DocumentUpload.css'; // Ensure this CSS file for styles

const DocumentUpload = () => {
    const [files, setFiles] = useState({
        registration_certificate: null,
        agency_profile: null,
        audit_report: null,
        ngo_consortium_mandate: null,
        icrc_code_of_conduct: null,
    });

    const [uploadStatus, setUploadStatus] = useState({
        registration_certificate: 'No file chosen',
        agency_profile: 'No file chosen',
        audit_report: 'No file chosen',
        ngo_consortium_mandate: 'No file chosen',
        icrc_code_of_conduct: 'No file chosen',
    });

    const [showSuccessModal, setShowSuccessModal] = useState(false); // Modal state
    const [approvalMessage, setApprovalMessage] = useState(''); // State for approval message
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

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        Object.keys(files).forEach((key) => {
            if (files[key]) {
                formData.append(key, files[key]);
            }
        });
    
        const token = localStorage.getItem('token'); // Retrieve your JWT token
    
        try {
            const uploadResponse = await fetch('http://127.0.0.1:5000/upload', {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the request headers
                },
            });
    
            if (uploadResponse.ok) {
                // Notify admin about the pending approval
                const notifyResponse = await fetch('http://127.0.0.1:5000/admin/notify-approval', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ message: 'New documents uploaded for approval.' }),
                });

                if (notifyResponse.ok) {
                    setApprovalMessage('Your uploads have been sent for approval.'); // Update approval message
                } else {
                    alert('Error notifying admin for approval. Please try again.');
                }
                
                setShowSuccessModal(true); // Show success modal
            } else {
                alert('Error uploading documents. Please try again.');
            }
        } catch (error) {
            console.error('Error during file upload:', error);
            alert('An error occurred while uploading documents. Please try again.');
        }
    };

    // Create refs for inputs to programmatically update input's file list
    const registrationRef = createRef();
    const agencyProfileRef = createRef();
    const auditReportRef = createRef();
    const ngoConsortiumMandateRef = createRef();
    const icrcCodeOfConductRef = createRef();

    return (
        <div className="documentUpload">
            <h2>Upload Required Documents</h2>
            <form onSubmit={handleSubmit} className="uploadForm">
                <div className="formGroup"
                     onDragOver={handleDragOver}
                     onDrop={(e) => handleDrop(e, 'registration_certificate', registrationRef)}>
                    <label>
                        Registration Certificate:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'registration_certificate')}
                            ref={registrationRef}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.registration_certificate === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.registration_certificate}
                    </p>
                </div>
                <div className="formGroup"
                     onDragOver={handleDragOver}
                     onDrop={(e) => handleDrop(e, 'agency_profile', agencyProfileRef)}>
                    <label>
                        Agency Profile:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'agency_profile')}
                            ref={agencyProfileRef}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.agency_profile === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.agency_profile}
                    </p>
                </div>
                <div className="formGroup"
                     onDragOver={handleDragOver}
                     onDrop={(e) => handleDrop(e, 'audit_report', auditReportRef)}>
                    <label>
                        Audit Report:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'audit_report')}
                            ref={auditReportRef}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.audit_report === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.audit_report}
                    </p>
                </div>
                <div className="formGroup"
                     onDragOver={handleDragOver}
                     onDrop={(e) => handleDrop(e, 'ngo_consortium_mandate', ngoConsortiumMandateRef)}>
                    <label>
                        Signed NGO Consortium Mandate:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'ngo_consortium_mandate')}
                            ref={ngoConsortiumMandateRef}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.ngo_consortium_mandate === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.ngo_consortium_mandate}
                    </p>
                </div>
                <div className="formGroup"
                     onDragOver={handleDragOver}
                     onDrop={(e) => handleDrop(e, 'icrc_code_of_conduct', icrcCodeOfConductRef)}>
                    <label>
                        Signed ICRC/Red Crescent Code of Conduct:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'icrc_code_of_conduct')}
                            ref={icrcCodeOfConductRef}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.icrc_code_of_conduct === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.icrc_code_of_conduct}
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
                        <p>{approvalMessage}</p> {/* Display approval message */}
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
