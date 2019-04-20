import React, { Component } from "react";
import "./Header.scss";

import SearchForm from "../SearchForm/SearchForm.jsx";
import ResultLine from "../ResultLine/ResultLine.jsx";

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
          <SearchForm setSearchingWord={this.props.setSearchingWord} />
        </div>
        <ResultLine quantity={this.props.quantity} />
      </header>
    );
  }
}

export default Header;
