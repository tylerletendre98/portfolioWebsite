import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header className="header-container">
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
      </header>
    </div>
  );
}

export default Header;
