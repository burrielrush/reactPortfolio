import React from 'react';
import '../styles/Footer.css';


const styles = {
  footerStyle: {
    background: 'blue',
  },
  footingStyle: {
    fontSize: '100px',
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <h1 style={styles.footingStyle}>Welcome</h1>
    </footer>
  );
}

export default Footer;
