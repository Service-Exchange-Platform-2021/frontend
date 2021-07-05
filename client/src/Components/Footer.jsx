import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
      <li className="btn btnFooter">
          <a href="#homeHome">Home</a>
        </li>
        <li className="btn btnFooter">
          <a href="#aboutUs">About Us</a>
        </li>
        <li className="btn btnFooter">
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
