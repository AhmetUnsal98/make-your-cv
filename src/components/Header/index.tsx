import React from "react";
import "./header.scss";
const Header = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <p>LOGO.</p>
      </div>
      <div className="auth-container">
        <a href="#">Sign In</a>
        <a href="#">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
