import React from "react";
import "./Footer.scss";

const Footer = ({ year }) => (
    <footer>
      <div className="footer-wrapper ">
        <div className="logo-line">logo</div>
        <p>Aliaksandr Filitaryn, Epam, {year}</p>
      </div>
    </footer>
);

export default Footer;
