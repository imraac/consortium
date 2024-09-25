
// import 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   const socialLinks = ['Facebook', 'Twitter', 'Instagram'];

//   return (
//     <footer style={{ backgroundColor: '#ACD36F', color: 'white', padding: '2rem 0' }}>
//       <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
//         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1.5rem' }}>

//           <div style={{ flex: '1 1 30%', marginBottom: '1rem' }}>
//             <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}> CONSORTIUM</h3>
//             <p style={{ color: '#FFFFFF' }}>SOM-NGO is a national non-governmental, non-profitable, non-partial, non-political, and non-religious organization founded in Somalia in 1997.</p>
//           </div>

//           <div style={{ flex: '1 1 30%', marginBottom: '1rem' }}>
//             <h4 style={{ fontSize: '1.2rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>Follow Us</h4>
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
//               {socialLinks.map(platform => (
//                 <Link
//                   key={platform}
//                   to={`/${platform.toLowerCase()}`}
//                   style={{
//                     color: '#a9a9a9',
//                     transition: 'color 0.2s ease',
//                     textDecoration: 'none'
//                   }}
//                   onMouseEnter={e => e.currentTarget.style.color = '#f8b400'}
//                   onMouseLeave={e => e.currentTarget.style.color = '#a9a9a9'}
//                 >
//                   {platform}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div style={{ flex: '1 1 30%', marginBottom: '1rem' }}>
//             <h4 style={{ fontSize: '1.2rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>Contact Us</h4>
//             <p style={{ color: '#a9a9a9' }}>
//               If you have any questions, feel free to{' '}
//               <a
//                 href="mailto:info@skillquest.com"
//                 style={{
//                   color: '#f8b400',
//                   textDecoration: 'underline'
//                 }}
//               >
//                 email us
//               </a>.
//             </p>
//           </div>
//         </div>

//         <div style={{ textAlign: 'center', marginTop: '1.5rem', borderTop: '1px solid #555', paddingTop: '1rem' }}>
//           <p style={{ fontSize: '0.875rem', color: '#a9a9a9' }}>
//             &copy; {new Date().getFullYear()} SOM-NGO. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = ['Facebook', 'Twitter', 'Instagram'];

  return (
    <footer style={{ backgroundColor: '#EEEEEE', color: 'white', padding: '2rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1.5rem' }}>

          <div style={{ flex: '1 1 30%', marginBottom: '1rem', color: '#007BFF' }}> {/* Change color to blue */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {socialLinks.map(platform => (
                <Link
                  key={platform}
                  to={`/${platform.toLowerCase()}`}
                  style={{
                    color: '#a9a9a9',
                    transition: 'color 0.2s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f8b400'}
                  onMouseLeave={e => e.currentTarget.style.color = '#a9a9a9'}
                >
                  {platform}
                </Link>
              ))}
            </div>
          </div>

          <div style={{ flex: '1 1 30%', marginBottom: '1rem', color: '#007BFF' }}> {/* Change color to blue */}
            <p style={{ color: '#a9a9a9' }}>
              If you have any questions, feel free to{' '}
              <a
                href="mailto:comms@somaliangoconsortium.org"
                style={{
                  color: '#f8b400',
                  textDecoration: 'underline'
                }}
              >
                email us
              </a>.
            </p>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', borderTop: '1px solid #555', paddingTop: '1rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#a9a9a9' }}>
            &copy; {new Date().getFullYear()} MROs Consortium. All rights reserved. <br />
            <Link to="/privacy-policy" style={{ color: '#f8b400', textDecoration: 'underline' }}>Privacy policy</Link> | 
            <Link to="/terms-and-conditions" style={{ color: '#f8b400', textDecoration: 'underline' }}> Terms and conditions</Link> | 
            <Link to="/cookies-policy" style={{ color: '#f8b400', textDecoration: 'underline' }}> Cookies policy</Link> | 
            <Link to="/copyright" style={{ color: '#f8b400', textDecoration: 'underline' }}> Copyright © 2024 MROs Consortium</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
