import React, { Component } from "react";
import "./App.scss";

import SEARCH_BY from "./../js/constants";

import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import DescriptionFilm from "./DescriptionFilm.jsx";

const getRequestToAPI = (searchBy, searchingWord) => {
  return `https://reactjs-cdp.herokuapp.com/movies?search=${searchingWord}&searchBy=${searchBy}`;
};

// let templateAnswer = {
//   data: [
//     {
//       id: 0,
//       title: "string",
//       tagline: "string",
//       vote_average: 0,
//       vote_count: 0,
//       release_date: "string",
//       poster_path: "string",
//       overview: "string",
//       budget: 0,
//       revenue: 0,
//       runtime: 0,
//       genres: ["string"]
//     }
//   ],
//   total: 0,
//   offset: 0,
//   limit: 0
// };

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
      <>
        <Header
          setSearchingWord={this.setSearchingWord}
          quantity={this.state.data.total}
          filmForDesciption={this.state.data.data[0]}
        />
        <DescriptionFilm film={this.state.data.data[0]} />
        <Main setFilms={this.state.data.data} />
        <Footer />
      </>
    );
  }
}

export default App;
