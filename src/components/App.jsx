import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import createBrowserHistory from "history/createBrowserHistory";

import "./App.scss";

import ErrorBoundary from "./ErrorBoundary.jsx";
import NotFound from "./NotFound/NotFound";
import HomePage from "./HomePage";
// const history = createBrowserHistory();

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
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/description" component={HomePage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}

export default App;
