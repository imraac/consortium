// // import { useState } from 'react';
// // import './Login.css'; // Optional: Add your CSS styles here
// // import Footer from './Footer';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [username, setUsername] = useState(''); // New state for username
// //   const [role, setRole] = useState('admin'); // New state for role
// //   const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup

// //   const handleLoginSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle login logic here
// //     console.log('Logging in with:', { email, password });
// //   };

// //   const handleSignupSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle signup logic here
// //     console.log('Signing up with:', { username, email, password, role });
// //     // Here, you would typically send this data to your backend for processing
// //   };

// //   return (
// //     <div className="login-page">
// //       <div className="login-container">
// //         <div className="text-section">
// //           <h2>{isSignup ? 'Sign Up' : 'Member Login'}</h2>
// //           <p>
// //             {isSignup
// //               ? 'Create an account to gain access to member content (Blogs, Forums), edit preferences, and manage subscriptions.'
// //               : 'Site members can log in to view member content, edit preferences, password, and email subscriptions.'}
// //           </p>
// //           <p>
// //             {isSignup
// //               ? 'If you already have an account, please log in using the form below.'
// //               : 'If you would like to be a member of this site, please complete the Contact Us form using the link at the top of the page and choose Become a Member in the Contact About selection.'}
// //           </p>
// //           <button onClick={() => setIsSignup(!isSignup)} className="toggle-button">
// //             {isSignup ? 'Already have an account? Login' : 'Need an account? Sign Up'}
// //           </button>
// //         </div>
// //         <div className="form-container">
// //           <form onSubmit={isSignup ? handleSignupSubmit : handleLoginSubmit} className="login-form">
// //             {isSignup && (
// //               <div className="form-group">
// //                 <label htmlFor="username">Username</label>
// //                 <input
// //                   type="text"
// //                   id="username"
// //                   value={username}
// //                   onChange={(e) => setUsername(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //             )}
// //             <div className="form-group">
// //               <label htmlFor="email">Email</label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="password">Password</label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //               />
// //             </div>
// //             {isSignup && (
// //               <div className="form-group">
// //                 <label htmlFor="role">Role</label>
// //                 <select
// //                   id="role"
// //                   value={role}
// //                   onChange={(e) => setRole(e.target.value)}
// //                   required
// //                 >
                  
// //                   <option value="member">Member</option>
// //                   {/* Add more roles as needed */}
// //                 </select>
// //               </div>
// //             )}
// //             <button type="submit" className="login-button">{isSignup ? 'Sign Up' : 'Login'}</button>
// //           </form>
// //         </div>
// //       </div>
// //       <Footer /> {/* Add the Footer component here */}
// //     </div>
// //   );
// // };

// // export default Login;



// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios'; // Import Axios for HTTP requests
// import './Login.css';
// import Footer from './Footer';

// const Login = ({ setIsAuthenticated }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState(''); // New state for username
//   const [role, setRole] = useState('member'); // New state for role
//   const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup
//   const [errorMessage, setErrorMessage] = useState(''); // State for error handling
//   const history = useHistory(); // To redirect user after login/signup

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
//       const { access_token, user } = response.data;
      
//       // Save token to localStorage
//       localStorage.setItem('token', access_token);
      
//       setIsAuthenticated(true); // Set user as authenticated
//       history.push('/consortium'); // Redirect to the Consortium page
//     } catch (error) {
//       console.error('Login failed:', error.response.data.message);
//       setErrorMessage(error.response.data.message);
//     }
//   };

//   const handleSignupSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/users', {
//         username,
//         email,
//         password,
//         role,
//       });

//       const { access_token, user } = response.data;

//       // Save token to localStorage
//       localStorage.setItem('token', access_token);

//       setIsAuthenticated(true); // Set user as authenticated
//       history.push('/consortium'); // Redirect to the Consortium page
//     } catch (error) {
//       console.error('Signup failed:', error.response.data.message);
//       setErrorMessage(error.response.data.message);
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <div className="text-section">
//           <h2>{isSignup ? 'Sign Up' : 'Member Login'}</h2>
//           <p>
//             {isSignup
//               ? 'Create an account to gain access to member content (Blogs, Forums), edit preferences, and manage subscriptions.'
//               : 'Site members can log in to view member content, edit preferences, password, and email subscriptions.'}
//           </p>
//           <button onClick={() => setIsSignup(!isSignup)} className="toggle-button">
//             {isSignup ? 'Already have an account? Login' : 'Need an account? Sign Up'}
//           </button>
//         </div>
//         <div className="form-container">
//           <form onSubmit={isSignup ? handleSignupSubmit : handleLoginSubmit} className="login-form">
//             {isSignup && (
//               <div className="form-group">
//                 <label htmlFor="username">Username</label>
//                 <input
//                   type="text"
//                   id="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                 />
//               </div>
//             )}
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             {isSignup && (
//               <div className="form-group">
//                 <label htmlFor="role">Role</label>
//                 <select
//                   id="role"
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                   required
//                 >
//                   <option value="member">Member</option>
//                   <option value="admin">Admin</option>
//                   {/* Add more roles as needed */}
//                 </select>
//               </div>
//             )}
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             <button type="submit" className="login-button">{isSignup ? 'Sign Up' : 'Login'}</button>
//           </form>
//         </div>
//       </div>
//       <Footer /> {/* Add the Footer component here */}
//     </div>
//   );
// };

// export default Login;



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests
import './Login.css';
import Footer from './Footer';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // New state for username
  const [role, setRole] = useState('member'); // New state for role
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup
  const [errorMessage, setErrorMessage] = useState(''); // State for error handling
  const navigate = useNavigate(); // To redirect user after login/signup

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
      const { access_token, user } = response.data;
      
      // Save token to localStorage
      localStorage.setItem('token', access_token);
      
      setIsAuthenticated(true); // Set user as authenticated
      navigate('/consortium'); // Redirect to the Consortium page
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      setErrorMessage(error.response.data.message);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/users', {
        username,
        email,
        password,
        role,
      });

      const { access_token, user } = response.data;

      // Save token to localStorage
      localStorage.setItem('token', access_token);

      setIsAuthenticated(true); // Set user as authenticated
      navigate('/consortium'); // Redirect to the Consortium page
    } catch (error) {
      console.error('Signup failed:', error.response.data.message);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="text-section">
          <h2>{isSignup ? 'Sign Up' : 'Member Login'}</h2>
          <p>
            {isSignup
              ? 'Create an account to gain access to member content (Blogs, Forums), edit preferences, and manage subscriptions.'
              : 'Site members can log in to view member content, edit preferences, password, and email subscriptions.'}
          </p>
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
                  {/* Add more roles as needed */}
                </select>
              </div>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="login-button">{isSignup ? 'Sign Up' : 'Login'}</button>
          </form>
        </div>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default Login;
