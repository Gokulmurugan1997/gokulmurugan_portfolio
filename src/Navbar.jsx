import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();


  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar drop-text">
      <div className="head">
        <p
          className={`navbar-link ${isActive('/home') ? 'active' : ''}`} 
          onClick={() => navigate('/home')} 
          role="link" 
          tabIndex={0} 
          aria-label="Navigate to Home"
        >
          Home
        </p>
        <p
          className={`navbar-link ${isActive('/about') ? 'active' : ''}`} 
          onClick={() => navigate('/about')} 
          role="link" 
          tabIndex={0} 
          aria-label="Navigate to About"
        >
          About
        </p>
        <p
          className={`navbar-link ${isActive('/skills') ? 'active' : ''}`} 
          onClick={() => navigate('/skills')} 
          role="link" 
          tabIndex={0} 
          aria-label="Navigate to Skills"
        >
          Skills
        </p>
        <p
          className={`navbar-link ${isActive('/projects') ? 'active' : ''}`} 
          onClick={() => navigate('/projects')} 
          role="link" 
          tabIndex={0} 
          aria-label="Navigate to Projects"
        >
          Projects
        </p>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Navbar;
