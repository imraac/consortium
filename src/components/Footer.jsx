import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      style={{ backgroundColor: '#FFFFFF', color: '#333', padding: '2rem 0' }}
      initial={{ opacity: 0 }} // Start invisible
      animate={{ opacity: 1 }} // Fade in
      transition={{ duration: 0.5 }} // Fade-in duration
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <motion.div
          style={styles.container}
          initial={{ x: -200 }} // Start from left
          animate={{ x: 0 }} // Slide in to normal position
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Resources Section */}
          <motion.div
            style={styles.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }} // Delay to make it appear after the container
          >
            <h4 style={styles.title}>Resources</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <Link to="/key-documents" style={styles.link}>
                  Key documents
                </Link>
              </li>
              <li style={styles.listItem}>
                <Link to="/useful-links" style={styles.link}>
                  Useful links
                </Link>
              </li>
              <li style={styles.listItem}>
                <Link to="/member-calendar" style={styles.link}>
                  Calendar
                </Link>
              </li>
              <li style={styles.listItem}>
                <Link to="/skills-development-hub" style={styles.link}>
                  Skills Hub
                </Link>
              </li>
              <li style={styles.listItem}>
                <Link to="/all-resources" style={styles.link}>
                  All resources
                </Link>
              </li>
              <li style={styles.listItem}>
                <Link to="/contact-form" style={styles.link}>Contact form</Link>
              </li>
              <li style={styles.listItem}>
                <Link to="/feedback-form" style={styles.link}>Feedback form</Link>
              </li>
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
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '0.5rem',
  },
  link: {
    color: '#555',
    textDecoration: 'none',
    display: 'block',
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
  },
  footerLink: {
    color: '#002D74',
    textDecoration: 'underline',
    margin: '0 0.25rem',
  },
};

export default Footer;
