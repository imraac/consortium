import React from 'react';

const Contact = () => {
  const styles = {
    location: {
      width: '80%',
      margin: 'auto',
      padding: '80px 0',
      marginTop: '80px',
    },
    iframe: {
      width: '100%',
      border: '0',
    },
    contactUs: {
      width: '80%',
      margin: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
    },
    contactCol: {
      flex: '1 1 48%', 
      marginBottom: '30px',
    },
    contactDiv: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '40px',
    },
    icon: {
      fontSize: '28px',
      color: 'black',
      margin: '10px',
      marginRight: '30px',
    },
    heading: {
      fontSize: '20px',
      marginBottom: '5px',
      color: '#555',
      fontWeight: '400',
    },
    input: {
      width: '100%',
      padding: '15px',
      marginBottom: '17px',
      outline: 'none',
      border: '1px solid #ccc',
    },
    button: {
      display: 'inline-block',
      background: '#5BC678',
      color: 'white',
      padding: '10px 30px',
      border: 'none',
      cursor: 'pointer',
      transition: '0.3s',
    },
    buttonHover: {
      background: '#d32f2f',
    },
    '@media (max-width: 768px)': {
      contactUs: {
        width: '90%',
        flexDirection: 'column', 
      },
      contactCol: {
        flex: '1 1 100%', 
      },
      heading: {
        fontSize: '16px',
      },
      icon: {
        fontSize: '24px',
      },
    },
  };

  return (
    <>
      <section style={styles.location}>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317156.5707626824!2d45.30742499999999!3d2.0469349999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d5981298f43b917%3A0x7e8578b5c8da04c3!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2sus!4v1711460721169!5m2!1sen!2sus"
  width="600"
  height="450"
  style={styles.iframe}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </section>

      <section style={styles.contactUs}>
        <div style={styles.contactCol}>
          <div style={styles.contactDiv}>
            <i className="fa-solid fa-home" style={styles.icon}></i>
            <span>
              <h5 style={styles.heading}>Mogadishu</h5>
              <h5 style={styles.heading}>Visit us</h5>
            </span>
          </div>

          <div style={styles.contactDiv}>
            <i className="fa-solid fa-phone" style={styles.icon}></i>
            <span>
              <h5 style={styles.heading}>+252 619272783</h5>
              <h5 style={styles.heading}>Call us</h5>
            </span>
          </div>

          <div style={styles.contactDiv}>
            <i className="fa-solid fa-envelope" style={styles.icon}></i>
            <span>
              <h5 style={styles.heading}>info@mrosconsortium.org</h5>
              <h5 style={styles.heading}>Email us</h5>
            </span>
          </div>
        </div>

        <div style={styles.contactCol}>
          <form>
            <input type="text" placeholder="Enter your name" required style={styles.input} />
            <input type="email" placeholder="Enter email address" required style={styles.input} />
            <input type="text" placeholder="Enter your subject" required style={styles.input} />
            <textarea rows="8" placeholder="Message" required style={styles.input}></textarea>
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => (e.target.style.background = styles.buttonHover.background)}
              onMouseOut={(e) => (e.target.style.background = styles.button.background)}
            >
              Send Message
            </button>
          </form>
        </div>
        
      </section>
    </>
  );
};

export default Contact;
