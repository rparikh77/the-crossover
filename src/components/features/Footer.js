import React from "react";
import './Footer.css';
import logo from "../assets/crossover-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <img  className="footer-logo" src={logo} alt="The Crossover Logo" />
      {`© ${year} The Crossover. All Rights Reserved.`}
    </footer>
  );
};

export default Footer;
