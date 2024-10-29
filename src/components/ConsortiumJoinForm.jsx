// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import axios from 'axios'; // Import axios for making HTTP requests
// import './ConsortiumJoinForm.css';

// const ConsortiumJoinForm = () => {
//     const [fullName, setFullName] = useState('');
//     const [emailAddress, setEmailAddress] = useState('');
//     const [additionalAccounts, setAdditionalAccounts] = useState('');
//     const [mailingList, setMailingList] = useState('');
//     const [emailCopy, setEmailCopy] = useState('');
//     const [documents, setDocuments] = useState([]);
//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         // Validate the form inputs
//         if (!fullName || !emailAddress || !additionalAccounts || !emailCopy) {
//             navigate('/feedback', { state: { message: 'All fields are required unless stated otherwise.', isError: true } });
//             return;
//         }
    
//         const additionalAccountsNum = parseInt(additionalAccounts, 10);
//         if (isNaN(additionalAccountsNum) || additionalAccountsNum <= 0) {
//             navigate('/feedback', { state: { message: 'Requested number of additional accounts must be a valid positive number.', isError: true } });
//             return;
//         }

//         // Prepare the data to be sent to the backend
//         const applicationData = {
//             full_name: fullName,
//             email_address: emailAddress,
//             additional_accounts: additionalAccountsNum,
//             mailing_list: mailingList,
//             email_copy: emailCopy,
//         };

//         const token = localStorage.getItem('token'); // Retrieve your JWT token

//         const config = {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//             },
//         };

//         try {
//             // Send the POST request to the backend
//             const response = await axios.post('http://127.0.0.1:5000/consortium_application', applicationData, config);
            
//             // Redirect on success
//             navigate('/feedback', { state: { message: response.data.message, isError: false } });
//         } catch (error) {
//             // Handle error response from the server
//             if (error.response) {
//                 navigate('/feedback', { state: { message: error.response.data.error || 'An error occurred while submitting the application.', isError: true } });
//             } else {
//                 navigate('/feedback', { state: { message: 'Network error. Please try again later.', isError: true } });
//             }
//         }

//         // For debugging purposes
//         console.log({ fullName, emailAddress, additionalAccounts: additionalAccountsNum, mailingList, emailCopy, documents });
//     };
    
//     return (
//         <div className="formPage">
//             <form className="formContainer" onSubmit={handleSubmit}>
//                 <h2>Agency Details</h2>
//                 <p>All fields are required unless stated otherwise.</p>
//                 <h2 className="formTitle">Member Account Administrator Details</h2>
//                 <div className="formGroup">
//                     <label className="formLabel">
//                         Full Name:
//                         <input
//                             className="formInput"
//                             type="text"
//                             value={fullName}
//                             onChange={(e) => setFullName(e.target.value)}
//                             required
//                         />
//                     </label>
//                 </div>
//                 <div className="formGroup">
//                     <label className="formLabel">
//                         Email Address:
//                         <input
//                             className="formInput"
//                             type="email"
//                             value={emailAddress}
//                             onChange={(e) => setEmailAddress(e.target.value)}
//                             required
//                         />
//                     </label>
//                 </div>
//                 <div className="formGroup">
//                     <label className="formLabel">
//                         Requested Number of Additional Accounts:
//                         <input
//                             className="formInput"
//                             type="number"
//                             value={additionalAccounts}
//                             onChange={(e) => setAdditionalAccounts(e.target.value)}
//                             required
//                         />
//                     </label>
//                 </div>
//                 <div className="formGroup">
//                     <label className="formLabel">
//                         Mailing List (one email per line):
//                         <textarea
//                             className="formTextarea"
//                             value={mailingList}
//                             onChange={(e) => setMailingList(e.target.value)}
//                             placeholder="Enter additional email addresses here, one per line. If none, enter 'none'."
//                         />
//                     </label>
//                 </div>
//                 <div className="formGroup">
//                     <label className="formLabel">
//                         Email Copy of Registration to:
//                         <input
//                             className="formInput"
//                             type="email"
//                             value={emailCopy}
//                             onChange={(e) => setEmailCopy(e.target.value)}
//                             required
//                         />
//                     </label>
//                 </div>
//                 <div className="formGroup">
//                     <p className="uploadNote">Note: Please have the following documents ready to upload:</p>
//                     <ul className="documentList">
//                         <li>Registration Certificate</li>
//                         <li>Agency Profile</li>
//                         <li>Audit Report</li>
//                         <li>Signed NGO Consortium Mandate</li>
//                         <li>Passport Photo & ID Attached together</li>
//                     </ul>
//                     <p>All documents must be in PDF or Microsoft Word format.</p>
//                 </div>
//                 <button className="submitButton" type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default ConsortiumJoinForm;




import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProgressBar from './ProgressBar'; // Import ProgressBar component
import './ConsortiumJoinForm.css';

const ConsortiumJoinForm = () => {
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [additionalAccounts, setAdditionalAccounts] = useState('');
    const [mailingList, setMailingList] = useState('');
    const [emailCopy, setEmailCopy] = useState('');
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();

    // Define the current step and total steps for progress tracking
    const currentStep = 5; // Assuming 'Consortium Registration' is step 3
    const totalSteps = 5;
    const stepNames = ['Registration', 'Personal Details', 'Consortium Registration', 'Contact Details', 'Agency Details'];

    const handleSubmit = async (e) => {
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

        const applicationData = {
            full_name: fullName,
            email_address: emailAddress,
            additional_accounts: additionalAccountsNum,
            mailing_list: mailingList,
            email_copy: emailCopy,
        };

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await axios.post('http://127.0.0.1:5000/consortium_application', applicationData, config);
            navigate('/feedback', { state: { message: response.data.message, isError: false } });
        } catch (error) {
            if (error.response) {
                navigate('/feedback', { state: { message: error.response.data.error || 'An error occurred while submitting the application.', isError: true } });
            } else {
                navigate('/feedback', { state: { message: 'Network error. Please try again later.', isError: true } });
            }
        }
    };
    
    return (
        <div className="formPage">
            {/* Progress Bar */}
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} stepNames={stepNames} />

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
                        <li>Passport Photo & ID Attached together</li>
                    </ul>
                    <p>All documents must be in PDF or Microsoft Word format.</p>
                </div>
                <button className="submitButton" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ConsortiumJoinForm;
