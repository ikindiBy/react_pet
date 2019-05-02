import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";

import "./Main.scss";

import Pagination from "../Pagination";
import ResultsOfSearch from "../ResultOfSearch";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      isLoading: false,
      hasErrored: false
    };
  }

  render() {
    return (
      <main>
        <div className="main-wrapper">
        <Switch>
            <Route exact path="/" component={ResultsOfSearch}/>
            <Route path="/search/:searchingWord/:searchingType" component={ResultsOfSearch} />
          </Switch>
        </div>
        <Pagination
          amount={this.props.quantity}
          showFilmsByPage={this.props.showFilmsByPage}
        />
      </main>
    );
  }
}


export default Main;
