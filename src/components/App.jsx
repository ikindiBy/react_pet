import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import createBrowserHistory from "history/createBrowserHistory";

import "./App.scss";

import { CURRENT_YEAR } from "./../js/constants";

import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import NotFound from "./NotFound/NotFound";

// const history = createBrowserHistory();

const Home = () => (
  <>
    <Header />
    <Main />
    {/* <Main showFilmsByPage={this.showFilmsByPage} /> rewrite for pagination */}
    <Footer year={CURRENT_YEAR} />
  </>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

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
        <BrowserRouter>
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch> */}
          <Header />
          <Main />
          {/* <Main showFilmsByPage={this.showFilmsByPage} /> rewrite for pagination */}
          <Footer year={CURRENT_YEAR} />
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}

export default App;
