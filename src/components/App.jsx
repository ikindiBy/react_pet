import React, { Component } from "react";
import "./App.scss";

import { SEARCH_BY } from "./../js/constants";
import { getRequestToAPI } from "./../js/helpers";

import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import DescriptionFilm from "./DescriptionFilm.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        data: []
      },
      searchingWord: "",
      searchBy: SEARCH_BY.TITLE
    };
  }

  // state = {
  //   films: [],
  //   // searchingWord: "",
  //   searchBy: SEARCH_BY.TITLE
  // };

  setSearchingWord = (searchBy, word) => {
    const requestToAPI = getRequestToAPI(searchBy, word);

    fetch(requestToAPI)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ data: data });
      })
      .catch(e => {});
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
        <DescriptionFilm film={this.state.data.data[8]} />
        <Main setFilms={this.state.data.data} />
        <Footer />
      </ErrorBoundary>
    );
  }
}

export default App;
