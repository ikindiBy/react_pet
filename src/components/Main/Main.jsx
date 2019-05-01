import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Main.scss";

import { getUrlForRequest } from "../../js/helpers";
import Tile from "../Tile/Tile.jsx";
import Pagination from "../Pagination/Pagination";
import ResultsOfSearch from "../ResultOfSearch";

import { filmsFetchData } from "../../actions/filmsAction";

const EmptyParams = () => (
  <div>
    <h1> Type more specific parameters of searching. </h1>
  </div>
);

const NoFilms = () => (
  <div>
    <h1> No films found </h1>
  </div>
);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      isLoading: false,
      hasErrored: false
    };
  }

  showFilms = () => {
    return this.props.setFilms.map(item => {
      return (
        <Link to={`/description/${item.id}`} key={item.id}>
          <Tile film={item} />
        </Link>
      );
    });
  };

  render() {
    return (
      <main>
        <div className="main-wrapper">
        <Switch>
            <Route exact path="/" render = {() => (
              <>
                <h1
                hidden={!!this.props.setFilms.length || this.props.showEmptyParams}
                >
                  No films found
                </h1>
                <h1 hidden={!this.props.showEmptyParams}>
                  Type more specific parameters of searching.
                </h1>
                {this.showFilms()}
              </>
            )}/>
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

function mapStateToProps(state) {
  console.log("-- MAIN --state---", state);
  return {
    setFilms: state.films.filmsSet,
    searchingWord: state.search.searchingWord,
    searchingType: state.search.searchingType,
    showEmptyParams: state.search.showEmptyParams
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: url => dispatch(filmsFetchData(url))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
