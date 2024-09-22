// import { useState } from 'react';
// import './Login.css'; // Optional: Add your CSS styles here
// import Footer from './Footer';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Logging in with:', { email, password });
//   };

//   return (
//     <div className="login-container">
//       <div className="text-section">
//         <h2>Member Login</h2>
//         <p>
//           Site members can log in to view member content (Blogs, Forums), edit preferences, password, and email subscriptions. Please enter your email address and password in the form on the right-hand side of this page to access this area.
//         </p>
//         <p>
//           If you would like to be a member of this site, please complete the Contact Us form using the link at the top of the page and choose "Become a Member" in the Contact About selection.
//         </p>
//       </div>
//       <div className="form-container">
//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
      
//     </div>
//   );
// };

// export default Login;

import { useState } from 'react';
import './Login.css'; // Optional: Add your CSS styles here
import Footer from './Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="text-section">
          <h2>Member Login</h2>
          <p>
            Site members can log in to view member content (Blogs, Forums), edit preferences, password, and email subscriptions. Please enter your email address and password in the form on the right-hand side of this page to access this area.
          </p>
          <p>
            If you would like to be a member of this site, please complete the Contact Us form using the link at the top of the page and choose Become a Member in the Contact About selection.
          </p>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="login-form">
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
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default Login;
