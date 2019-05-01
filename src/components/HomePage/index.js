import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { CURRENT_YEAR } from "../../js/constants";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";

class HomePage extends Component {
  render() {
    return (
        <>
            <Header/>
            <Main />
            <Footer year={CURRENT_YEAR} />
        </>
    );
  }
}

export default HomePage;
