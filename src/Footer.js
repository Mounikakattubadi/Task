import React from "react";
import "./Footer.css";
import footerLogo from "./images/footerLogo.svg"; // adjust path

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={footerLogo} alt="BestWeightLossMeds Logo" />
        </div>

        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Knowledge</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Advertiser Disclosure</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© 2025 BestWeightLossMeds. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
