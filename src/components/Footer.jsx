import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
    style={{
      background: 'linear-gradient(to top, #FFFFFF, #FFFFFF)',
      color: '#333',
      padding: '2rem 0',
      fontSize: "0.85rem",
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
  
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <motion.div
          style={styles.container}
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Resources Section */}
          <motion.div
            style={styles.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 style={styles.title}>Resources</h4>
            <ul style={styles.gridList}>
              {[
                { name: 'Key documents', path: '/key-documents' },
                { name: 'Useful links', path: '/useful-links' },
                { name: 'Calendar', path: '/member-calendar' },
                { name: 'Skills Hub', path: '/skills-development-hub' },
                { name: 'All resources', path: '/all-resources' },
                { name: 'Contact form', path: '/contact-form' },
                { name: 'Feedback form', path: '/feedback-form' },
              ].map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <Link to={item.path} style={styles.link}>
                    <span style={styles.linkIcon}>🔗</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          style={styles.socialMediaSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialIcon}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaFacebook color="#3b5998" size={30} />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialIcon}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaTwitter color="#00acee" size={30} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialIcon}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin color="#0e76a8" size={30} />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialIcon}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaInstagram color="#e1306c" size={30} />
          </motion.a>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          style={styles.footerBottom}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p>
            &copy; {new Date().getFullYear()} MROs Consortium. All rights reserved. <br />
            <Link to="/privacy-policy" style={styles.footerLink}>Privacy policy</Link> |
            <Link to="/terms-and-conditions" style={styles.footerLink}> Terms and conditions</Link> |
            <Link to="/cookies-policy" style={styles.footerLink}> Cookies policy</Link> |
            <Link to="/copyright" style={styles.footerLink}> Copyright</Link>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  section: {
    flex: '1 1 45%',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  gridList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '0.5rem',
    padding: 0,
    margin: 0,
    listStyleType: 'none',
  },
  listItem: {
    marginBottom: '0.5rem',
  },
  link: {
    color: '#555',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s, color 0.3s',
    
  },
  linkIcon: {
    marginRight: '0.5rem',
  },
  linkHover: {
    color: '#333',
    backgroundColor: '#f5f5f5',
  },
  socialMediaSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
  socialIcon: {
    cursor: 'pointer',
  },
  footerBottom: {
    textAlign: 'center',
    marginTop: '1.5rem',
    borderTop: '1px solid #ddd',
    paddingTop: '1rem',
    fontSize: "0.75rem",
    
  },
  footerLink: {
    color: '#002D74',
    textDecoration: 'underline',
    margin: '0 0.25rem',
    fontSize: "0.75rem",
  },
};

export default Footer;
