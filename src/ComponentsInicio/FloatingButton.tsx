import React from 'react';
import './Styles/Inicio.css'

const FloatingButton = () => {
  return (
    <div className="floating-button" id="floatingButton">
      <div className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="social-icons" id="socialIcons">
        <a href="https://wa.me/XXXXXXXXXX" target="_blank"><img src="./Images/whats.png" alt="WhatsApp" /></a>
        <a href="https://facebook.com" target="_blank"><img src="./Images/facebook.png" alt="Facebook" /></a>
        <a href="https://www.instagram.com/carpasupdown/" target="_blank"><img src="./Images/instagram.png" alt="Instagram" /></a>
      </div>
    </div>
  );
};

export default FloatingButton;