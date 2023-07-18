import React from 'react';
import '../styles/Navigation.css';


const styles = {
  navbarStyle: {
    background: 'yellow',
    justifyContent: 'flex-end',
  },
};


function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
