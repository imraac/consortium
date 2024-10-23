import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import './ResetPassword.css';

const ResetPassword = () => {
    const { token } = useParams(); // Capture token from URL
    const navigate = useNavigate(); // Initialize useNavigate
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/reset-password/${token}`);
                if (res.status === 200) {
                    setMessage(res.data.message); // Token is valid
                } else {
                    setError("Invalid token.");
                }
            } catch (err) {
                setError(err.response.data.message || "Error verifying token.");
            }
        };

        verifyToken();
    }, [token]);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
    
        try {
            const res = await axios.post(`http://localhost:5000/reset-password/${token}`, { password: newPassword });
            console.log("Reset Password Response:", res.data); // Log the response
            if (res.status === 200) {
                setMessage("Password has been reset successfully.");
                setError(""); // Clear any previous error
            } else {
                setError("Failed to reset password.");
            }
        } catch (err) {
            console.error(err); // Log the error
            setError(err.response?.data.message || "Error resetting password.");
        }
    };
    

    return (
        <div className="reset-password-overlay">
            <div className="reset-password-container">
                <h2>Reset Password</h2>
                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleResetPassword}>
                    <div className="mb-4">
                        <label htmlFor="new-password" className="block">New Password:</label>
                        <input
                            type="password"
                            id="new-password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirm-password" className="block">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
