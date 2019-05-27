import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import Tile from "../Tile";

import { filmsFetchData } from "../../actions/filmsAction";
import { getUrlForRequest } from "../../js/helpers";
import NoFilmsPage from "../NoFilmsPage";

class ResultsOfSearch extends Component {
  componentDidMount() {
    if (this.props.match && this.props.match.params) {
      const { searchingType, searchingWord } = this.props.match.params;
      const urlForRequest = getUrlForRequest(searchingType, searchingWord);

      this.props.fetchData(urlForRequest);
    }
  }

  showFilms = () =>
    this.props.setFilms.map(item => (
      <Link to={`/description/${item.id}`} key={item.id}>
        <Tile film={item} />
      </Link>
    ));

  render() {
    return (
      <>
        <NoFilmsPage />
        {this.showFilms()}
      </>
    );
  }
}

const filmsSelector = createSelector(
  [state => state.films.filmsSet],
  filmsSet => filmsSet
);

function mapStateToProps(state) {
  return {
    setFilms: filmsSelector(state)
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
)(ResultsOfSearch);
