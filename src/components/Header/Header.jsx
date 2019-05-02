import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./Header.scss";

import SearchForm from "../SearchForm/SearchForm.jsx";
import ResultLine from "../ResultLine/ResultLine.jsx";
import DescriptionFilm from "../DescriptionFilm/DescriptionFilm.jsx";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <div className="bgc-fill" />
          <img className="bgc-img"  src="/assets/img/header2.jpg" alt="header_title" />
          <div className="logo-line">
            <span>logo</span>
            <Link to="/">Home</Link>
          </div>
          <Switch>
            <Route exact path="/" component={SearchForm} />
            <Route path="/search" component={SearchForm} />
            <Route path="/description/:id" component={DescriptionFilm} />
          </Switch>
        </div>
        <ResultLine />
      </header>
    );
  }
}

export default Header;
