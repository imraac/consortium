import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ConsortiumJoinForm.css';

const ConsortiumJoinForm = () => {
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [additionalAccounts, setAdditionalAccounts] = useState('');
    const [mailingList, setMailingList] = useState('');
    const [emailCopy, setEmailCopy] = useState('');
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validate the form inputs
        if (!fullName || !emailAddress || !additionalAccounts || !emailCopy) {
            navigate('/feedback', { state: { message: 'All fields are required unless stated otherwise.', isError: true } });
            return;
        }
    
        const additionalAccountsNum = parseInt(additionalAccounts, 10);
        if (isNaN(additionalAccountsNum) || additionalAccountsNum <= 0) {
            navigate('/feedback', { state: { message: 'Requested number of additional accounts must be a valid positive number.', isError: true } });
            return;
        }
    
        // If all validations pass
        navigate('/feedback', { state: { message: 'Congratulations! The information provided is correct, and your registration is almost complete. Kindly note this DOES NOT MEAN your are a member !', isError: false } });
        
        // You can handle form data submission logic here (e.g., sending to an API)
        console.log({ fullName, emailAddress, additionalAccounts: additionalAccountsNum, mailingList, emailCopy, documents });
    };
    
    return (
        <div className="formPage">
            <form className="formContainer" onSubmit={handleSubmit}>
                <h2>Agency Details</h2>
                <p>All fields are required unless stated otherwise.</p>
                <h2 className="formTitle">Member Account Administrator Details</h2>
                <div className="formGroup">
                    <label className="formLabel">
                        Full Name:
                        <input
                            className="formInput"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="formGroup">
                    <label className="formLabel">
                        Email Address:
                        <input
                            className="formInput"
                            type="email"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="formGroup">
                    <label className="formLabel">
                        Requested Number of Additional Accounts:
                        <input
                            className="formInput"
                            type="number"
                            value={additionalAccounts}
                            onChange={(e) => setAdditionalAccounts(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="formGroup">
                    <label className="formLabel">
                        Mailing List (one email per line):
                        <textarea
                            className="formTextarea"
                            value={mailingList}
                            onChange={(e) => setMailingList(e.target.value)}
                            placeholder="Enter additional email addresses here, one per line. If none, enter 'none'."
                        />
                    </label>
                </div>
                <div className="formGroup">
                    <label className="formLabel">
                        Email Copy of Registration to:
                        <input
                            className="formInput"
                            type="email"
                            value={emailCopy}
                            onChange={(e) => setEmailCopy(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="formGroup">
                    <p className="uploadNote">Note: Please have the following documents ready to upload:</p>
                    <ul className="documentList">
                        <li>Registration Certificate</li>
                        <li>Agency Profile</li>
                        <li>Audit Report</li>
                        <li>Signed NGO Consortium Mandate</li>
                        <li>Signed ICRC/Red Crescent Code of Conduct</li>
                    </ul>
                    <p>All documents must be in PDF or Microsoft Word format.</p>
                </div>
                <button className="submitButton" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ConsortiumJoinForm;
