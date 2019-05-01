import React, { Component } from "react";
import { connect } from "react-redux";
import "./ResultLine.scss";

import { FILTERS } from "../../js/constants";
import { getUrlForRequest } from "../../js/helpers";

import { setFilter } from "../../actions/filterAction";
import { filmsFetchData } from "../../actions/filmsAction";

class ResultLine extends Component {
  handleClick = e => {
    const filterType = e.target.dataset.name;

    this.props.setFilter(filterType);

    const urlForRequest = getUrlForRequest(
      this.props.searchingType,
      this.props.searchingWord,
      filterType
    );

    this.props.fetchData(urlForRequest);
  };

  showRL = () => {
    const className = "result-line";
    return this.props.total ? className : className + ' hideLine';
  }

  render() {
    return (
      <div className={this.showRL()}>
        <div className="result-line-wrapper">
          <div className="result-line-quantity">
            {this.props.total} movies found
          </div>
          <div className="result-line-filter">
            <p>
              Sort by:
              <span
                onClick={this.handleClick}
                data-name={FILTERS.RELEASE}
                className={
                  this.props.filteringType === FILTERS.RELEASE
                    ? "actual"
                    : "not-actual"
                }
              >
                release date
              </span>
              <span
                onClick={this.handleClick}
                data-name={FILTERS.RATING}
                className={
                  this.props.filteringType === FILTERS.RATING
                    ? "actual"
                    : "not-actual"
                }
              >
                rating
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteringType: state.filter.filteringType,
    total: state.films.total,
    searchingWord: state.search.searchingWord,
    searchingType: state.search.searchingType
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: type => dispatch(setFilter(type)),
    fetchData: url => dispatch(filmsFetchData(url))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultLine);
