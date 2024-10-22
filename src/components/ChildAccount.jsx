import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChildAccount.css"; // Import your CSS file for styling

const ChildAccount = () => {
    // Static data for child accounts
    const navigate = useNavigate();
    const childAccounts = [
        { id: 1, name: "Iqra Mahamed", email: "ikky@gmail.com" },
        { id: 2, name: "Ali Shakur", email: "shakur@gmail.com" },
       
    ];
    const handleBack = () => {
        navigate("/member-account-administrator"); // Change this to the route you want to navigate to
    };


    return (
        <div className="child-accounts-page">
             <button className="back-button-child" onClick={handleBack}>
                Back
            </button>
            <h2 className="child-accounts-header">Child Accounts</h2>
           
            <p>Child accounts are members of your organization that you have requested have access to this website.</p>
            <table className="child-accounts-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {childAccounts.length > 0 ? (
                        childAccounts.map((account) => (
                            <tr key={account.id}>
                                <td>{account.name}</td>
                                <td>{account.email}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No child accounts found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ChildAccount;
