import React, { Component } from "react";

import { CURRENT_YEAR } from "../../js/constants";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

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
