import React from "react";
import './header.css';
const scriptLogo = require('../../assets/script-logo.png');


const Header = () => {
  return (
    <header>
      <div className="script-logo">
      <img src= {scriptLogo} alt="script logo" className="script-logo" />
      </div>
    </header>
  )
}

export default Header;