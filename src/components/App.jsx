import React, { Component } from "react";
import "./App.scss";

import { CURRENT_YEAR } from "./../js/constants";

import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import DescriptionFilm from "./DescriptionFilm/DescriptionFilm.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      describedFilm: {},
      page: 1
    };
  }

  setDescribedFilm = describedFilm => {
    this.setState({ describedFilm });
  };

  showFilmsByPage = page => {
    const requestToAPI = getRequestToAPI(
      this.state.searchBy,
      this.state.word,
      page
    );
    fetch(requestToAPI)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ data: data });
      })
      .catch(e => {});
  };

  render() {
    return (
      <ErrorBoundary>
        <Header />
        <DescriptionFilm film={this.state.describedFilm} />
        <Main
          setFilmForDescription={this.setDescribedFilm}
          showFilmsByPage={this.showFilmsByPage}
        />
        <Footer year={CURRENT_YEAR} />
      </ErrorBoundary>
    );
  }
}

export default App;
