import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Main.scss";

import { getUrlForRequest } from "../../js/helpers";
import Tile from "../Tile/Tile.jsx";
import Pagination from "../Pagination/Pagination";

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

  showFilms = props => {
    return props.setFilms.map(item => {
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
          <h1 hidden={!this.props.showEmptyParams}>
            Type more specific parameters of searching.
          </h1>
          <h1
            hidden={!!this.props.setFilms.length || this.props.showEmptyParams}
          >
            No films found
          </h1>
          {this.showFilms(this.props)}
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
  console.log("----state---", state);
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
