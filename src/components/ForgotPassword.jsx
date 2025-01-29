

import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css'; 

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const res = await axios.post('http://localhost:5000/reset-password', { email });
            setMessage(res.data.message);
            
           

        } catch (err) {
            setError(err.response?.data.message || "Error sending reset email.");
        }
    };

    return (
        <div className="reset-password-form">
            <h2 className="form-title">Reset Password</h2>
            <form className="email-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Enter your email:</label>
                    <input
                        className="email-input"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button className="reset-button" type="submit">Reset Password</button>
            </form>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default ForgotPassword;
