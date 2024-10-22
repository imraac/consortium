

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   const socialLinks = ['Facebook', 'Twitter', 'Instagram'];

//   return (
//     <footer style={{ backgroundColor: '#FAF7F0', color: 'white', padding: '2rem 0' }}>
//       <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
//         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1.5rem' }}>

//           <div style={{ flex: '1 1 30%', marginBottom: '1rem', color: '#007BFF' }}> {/* Change color to blue */}
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

//           <div style={{ flex: '1 1 30%', marginBottom: '1rem', color: '#007BFF' }}> {/* Change color to blue */}
//             <p style={{ color: '#a9a9a9' }}>
//               If you have any questions, feel free to{' '}
//               <a
//                 href="mailto:comms@somaliangoconsortium.org"
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
//             &copy; {new Date().getFullYear()} MROs Consortium. All rights reserved. <br />
//             <Link to="/privacy-policy" style={{ color: '#f8b400', textDecoration: 'underline' }}>Privacy policy</Link> | 
//             <Link to="/terms-and-conditions" style={{ color: '#f8b400', textDecoration: 'underline' }}> Terms and conditions</Link> | 
//             <Link to="/cookies-policy" style={{ color: '#f8b400', textDecoration: 'underline' }}> Cookies policy</Link> | 
//             <Link to="/copyright" style={{ color: '#f8b400', textDecoration: 'underline' }}> Copyright © 2024 MROs Consortium</Link>
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
    <footer style={{ backgroundColor: '#FFFFFF', color: '#333', padding: '2rem 0' }}> {/* Changed background to white */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1.5rem' }}>

          <div style={{ flex: '1 1 30%', marginBottom: '1rem', color: '#007BFF' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {socialLinks.map(platform => (
                <Link
                  key={platform}
                  to={`/${platform.toLowerCase()}`}
                  style={{
                    color: '#555',  // Darker color for better contrast on white
                    transition: 'color 0.2s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f8b400'}
                  onMouseLeave={e => e.currentTarget.style.color = '#555'}
                >
                  {platform}
                </Link>
              ))}
            </div>
          </div>

          <div style={{ flex: '1 1 30%', marginBottom: '1rem', color: '#007BFF' }}>
            <p style={{ color: '#555' }}>  {/* Changed text color to darker shade */}
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

          {/* Social icons */}
          <div style={{ flex: '1 1 30%', marginBottom: '1rem', display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
            <a
              href="https://wa.me/0704390612"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/372010_linkedin_stamp_social_icon.png"
                alt="WhatsApp"
                style={{ width: "35px", height: "35px", marginLeft: "7px" }}
              />
            </a>
            <a
              href="https://wa.me/0704390612"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/3184113_media_social_whatsapp_icon.svg"
                alt="WhatsApp"
                style={{ width: "35px", height: "35px", marginLeft: "7px" }}
              />
            </a>
            <a
              href="https://wa.me/0704390612"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/11244080_x_twitter_elon musk_twitter new logo_icon.svg"
                alt="Twitter"
                style={{ width: "24px", height: "24px", marginLeft: "7px" }}
              />
            </a>
            <a
              href="https://wa.me/0704390612"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/5365678_fb_facebook_facebook logo_icon.svg"
                alt="Facebook"
                style={{ width: "24px", height: "24px", marginLeft: "7px" }}
              />
            </a>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', borderTop: '1px solid #ddd', paddingTop: '1rem' }}> {/* Light border for separation */}
          <p style={{ fontSize: '0.875rem', color: '#555' }}> {/* Changed color to darker shade */}
            &copy; {new Date().getFullYear()} MROs Consortium. All rights reserved. <br />
            <Link to="/privacy-policy" style={{ color: '#002D74', textDecoration: 'underline' }}>Privacy policy</Link> | 
            <Link to="/terms-and-conditions" style={{ color: '#002D74', textDecoration: 'underline' }}> Terms and conditions</Link> | 
            <Link to="/cookies-policy" style={{ color: '#002D74', textDecoration: 'underline' }}> Cookies policy</Link> | 
            <Link to="/copyright" style={{ color: '#002D74', textDecoration: 'underline' }}> Copyright © 2024 MROs Consortium</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
