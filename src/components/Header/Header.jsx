import React from "react";
import { Link } from "react-router-dom";
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
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <h3>Home</h3>
            </Link>
          </div>
          <div className="header-link">
            <Link to={"/aboutMe"}>
              <h3>About me</h3>
            </Link>
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
