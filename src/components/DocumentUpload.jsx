import React, { useState } from 'react';
import './DocumentUpload.css'; // Create this CSS file for styles

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

    const handleFileChange = (e, documentName) => {
        const file = e.target.files[0];

        // Validate file type (PDF or Word)
        const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
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
        e.stopPropagation();
    };

    const handleDrop = (e, documentName) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        if (file) {
            handleFileChange({ target: { files: [file] } }, documentName);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform submission logic (e.g., sending files to server)
        console.log('Files to upload:', files);
        alert('Documents uploaded successfully!');
        // Clear file inputs after submission
        setFiles({
            registrationCertificate: null,
            agencyProfile: null,
            auditReport: null,
            ngoConsortiumMandate: null,
            icrcCodeOfConduct: null,
        });
        setUploadStatus({
            registrationCertificate: 'No file chosen',
            agencyProfile: 'No file chosen',
            auditReport: 'No file chosen',
            ngoConsortiumMandate: 'No file chosen',
            icrcCodeOfConduct: 'No file chosen',
        });
    };

    return (
        <div className="documentUpload">
            <h2>Upload Required Documents</h2>
            <form onSubmit={handleSubmit} className="uploadForm">
                <div className="formGroup" 
                     onDragOver={handleDragOver} 
                     onDrop={(e) => handleDrop(e, 'registrationCertificate')}>
                    <label>
                        Registration Certificate:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'registrationCertificate')}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.registrationCertificate === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.registrationCertificate}
                    </p>
                </div>
                <div className="formGroup" 
                     onDragOver={handleDragOver} 
                     onDrop={(e) => handleDrop(e, 'agencyProfile')}>
                    <label>
                        Agency Profile:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'agencyProfile')}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.agencyProfile === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.agencyProfile}
                    </p>
                </div>
                <div className="formGroup" 
                     onDragOver={handleDragOver} 
                     onDrop={(e) => handleDrop(e, 'auditReport')}>
                    <label>
                        Audit Report:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'auditReport')}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.auditReport === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.auditReport}
                    </p>
                </div>
                <div className="formGroup" 
                     onDragOver={handleDragOver} 
                     onDrop={(e) => handleDrop(e, 'ngoConsortiumMandate')}>
                    <label>
                        Signed NGO Consortium Mandate:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'ngoConsortiumMandate')}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.ngoConsortiumMandate === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.ngoConsortiumMandate}
                    </p>
                </div>
                <div className="formGroup" 
                     onDragOver={handleDragOver} 
                     onDrop={(e) => handleDrop(e, 'icrcCodeOfConduct')}>
                    <label>
                        Signed ICRC/Red Crescent Code of Conduct:
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={(e) => handleFileChange(e, 'icrcCodeOfConduct')}
                            required
                        />
                    </label>
                    <p style={{ color: uploadStatus.icrcCodeOfConduct === 'Successful' ? 'green' : 'black' }}>
                        {uploadStatus.icrcCodeOfConduct}
                    </p>
                </div>
                <button type="submit" className="submitButton">Upload Documents</button>
            </form>
        </div>
    );
};

export default DocumentUpload;
