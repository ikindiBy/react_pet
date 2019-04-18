import React, { Component } from "react";
import "./App.scss";

import { SEARCH_BY, CURRENT_YEAR } from "./../js/constants";
import { getRequestToAPI } from "./../js/helpers";

import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer/Footer.jsx";
import DescriptionFilm from "./DescriptionFilm.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      data: {
        data: []
      },
      searchingWord: "",
      searchBy: SEARCH_BY.TITLE,
      describedFilm: {},
      page: 1
    };
  }

  setSearchingWord = (searchBy, word) => {
    this.setState({ word });
    const requestToAPI = getRequestToAPI(searchBy, word);

    fetch(requestToAPI)
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ data: data });
      })
      .catch(e => {});
  };

  setDescribedFilm = describedFilm => {
    this.setState({ describedFilm });
  };

  showFilmsByPage = page => {
    console.log("-----page = ", page);
    // if (this.state.data.total / 10 > page) {
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
        console.log(data);
        this.setState({ data: data });
      })
      .catch(e => {});
    // }
  };

  componentDidMount() {
    const requestToAPI = getRequestToAPI(
      this.state.searchBy,
      this.state.searchingWord
    );

    fetch(requestToAPI)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ data: data });
      })
      .catch(e => {});
  }

  render() {
    return (
      <ErrorBoundary>
        <Header
          setSearchingWord={this.setSearchingWord}
          quantity={this.state.data.total}
          filmForDesciption={this.state.data.data[0]}
        />
        <DescriptionFilm film={this.state.describedFilm} />
        <Main
          quantity={this.state.data.total}
          setFilmForDescription={this.setDescribedFilm}
          setFilms={this.state.data.data}
          showFilmsByPage={this.showFilmsByPage}
        />
        <Footer year={CURRENT_YEAR} />
      </ErrorBoundary>
    );
  }
}

export default App;
