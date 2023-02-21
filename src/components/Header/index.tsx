import React, { useState } from "react";
import "./header.scss";

const Header = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <div className={fix ? "header fixed" : "header"}>
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
