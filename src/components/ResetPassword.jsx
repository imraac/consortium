


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate(); 
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const res = await axios.get(`https://mro-consortium-backend-production.up.railway.app/reset-password/${token}`);
                if (res.status === 200) {
                    setMessage(res.data.message); 
                } else {
                    setError("Invalid token.");
                }
            } catch (err) {
                setError(err.response?.data.message || "Error verifying token.");
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
            const res = await axios.post(`https://mro-consortium-backend-production.up.railway.app/reset-password/${token}`, { password: newPassword });
            if (res.status === 200) {
                setMessage("Password has been reset successfully.");
                setError(""); 
                navigate('/login');
            } else {
                setError("Failed to reset password.");
            }
        } catch (err) {
            setError(err.response?.data.message || "Error resetting password.");
        }
    };

    return (
        <div className="reset-password-overlay">
            <div className="reset-password-container">
                <h2 className="reset-password-title">Reset Password</h2>
                {message && <p className="reset-password-success-message">{message}</p>}
                {error && <p className="reset-password-error-message">{error}</p>}

                <form onSubmit={handleResetPassword}>
                    <div className="reset-password-input-group">
                        <label htmlFor="new-password" className="reset-password-label">New Password:</label>
                        <input
                            type="password"
                            id="new-password"
                            className="reset-password-input"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="reset-password-input-group">
                        <label htmlFor="confirm-password" className="reset-password-label">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="reset-password-input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="reset-password-button">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
