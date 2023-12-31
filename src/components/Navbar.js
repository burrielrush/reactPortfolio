import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

// Function for navbar funcitonality, routes to various pages 
function Navbar() {

  return (
    <div className="navbar">
        <div className="toggleButton">
            <button> </button>
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
            <Link to="/contactForm"> Contact Form </Link>
            </div>
    </div>
  )
}

export default Navbar