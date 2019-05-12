import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.scss";

import ErrorBoundary from "./ErrorBoundary";
import NotFound from "./NotFound";
import HomePage from "./HomePage";
// import history from "../js/history";

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
    const { Router, location, context, store } = this.props;
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <Router
            // history={history}
            location={location}
            context={context}
          >
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/search" component={HomePage} />
              <Route path="/description" component={HomePage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default App;
