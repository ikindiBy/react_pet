import React, { Component } from "react";
import "./Header.scss";

import SearchForm from "./SearchForm.jsx";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <div className="bgc-fill" />
          <img src="/assets/img/header2.jpg" alt="header_title" />
          <div className="logo-line">
            <span>logo</span>
          </div>
          <SearchForm />
        </div>
        <div className="resul-line">
          <div className="resul-line-wrapper">searcing result</div>
        </div>
      </header>
    );
  }
}

export default Header;
