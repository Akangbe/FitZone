import React from "react";
import "./footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedln from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt={Github} />
          <img src={Instagram} alt="instagram" />
          <img src={Linkedln} alt="linkdln" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2" ></div>
    </div>
  );
};
export default Footer;
