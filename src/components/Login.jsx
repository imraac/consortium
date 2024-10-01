import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css'; 
import Footer from './Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); 
  const [role, setRole] = useState('member'); 
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize navigate

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('access_token', data.access_token);
        console.log('Login successful', data);
        navigate('/consortium'); // Redirect to Consortium page
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Error logging in. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, role }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('access_token', data.access_token);
        console.log('Signup successful', data);
        navigate('/consortium'); // Redirect to Consortium page
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Error signing up. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="text-section">
          <h2>{isSignup ? 'Sign Up' : 'Member Login'}</h2>
          
          {/* Display error message */}
          {error && <p className="error-message">{error}</p>}
          <button onClick={() => setIsSignup(!isSignup)} className="toggle-button">
            {isSignup ? 'Already have an account? Login' : 'Need an account? Sign Up'}
          </button>
        </div>
        <div className="form-container">
          <form onSubmit={isSignup ? handleSignupSubmit : handleLoginSubmit} className="login-form">
            {isSignup && (
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {isSignup && (
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            )}
            <button type="submit" className="login-button" disabled={loading}>
              {isSignup ? 'Sign Up' : 'Login'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
