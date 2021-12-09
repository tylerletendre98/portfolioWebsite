import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header className="header-container">
        <div className="header-logo">
          <h1> TRL Dev</h1>
        </div>
        <div className="links-container">
          <div className="header-link">
            <h3>Home</h3>
          </div>
          <div className="header-link">
            <h3>About me</h3>
          </div>
          <div className="header-link">
            <h3>Experience and Projects</h3>
          </div>
          <div className="header-link">
            <h3>Contact me</h3>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
