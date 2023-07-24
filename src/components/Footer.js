import React from 'react'
import Instagram from '@mui/icons-material/Instagram';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"



function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <a href="https://www.linkedin.com/in/rush-burriel-26a448263/" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
            <a href="https://www.instagram.com/rushburriel/" target="_blank" rel="noopener noreferrer">
              <Instagram /> 
            </a>
            <a href="https://github.com/burrielrush" target="_blank" rel="noopener noreferrer">
              <GitHub />
            </a>
        </div>
        <p> &copy; 2023</p>
    </div>
  )
}

export default Footer;