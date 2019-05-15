import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./SearchForm.scss";

import history from "../../js/history";

import { SEARCH_BY } from "../../js/constants";

import {
  setSearchingParams,
  showMessageEmptyParams,
} from "../../actions/searchingAction";
import { filmsFetchData } from "../../actions/filmsAction";

import { getUrlForRequest } from "../../js/helpers";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      selectedOption: SEARCH_BY.TITLE,
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleOptionChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.value.trim()) {
      const urlForRequest = getUrlForRequest(
        this.state.selectedOption,
        this.state.value,
      );

      this.props.fetchData(urlForRequest);

      this.props.setSearchingWord(this.state.selectedOption, this.state.value);

      history.push(`/search/${this.state.value}/${this.state.selectedOption}`);

      this.setState({ value: "" });
    } else {
      this.props.showMessageEmptyParams();
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Find your movie</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="search..."
        />
        <div className="managing-of-search">
          <div className="filtering-of-search">
            <h4>Search by</h4>
            <label className="radio">
              <input
                type="radio"
                name="searchBy"
                value={SEARCH_BY.TITLE}
                checked={this.state.selectedOption === SEARCH_BY.TITLE}
                onChange={this.handleOptionChange}
              />
              Title
            </label>
            <label className="radio">
              <input
                type="radio"
                name="searchBy"
                value={SEARCH_BY.GENRE}
                checked={this.state.selectedOption === SEARCH_BY.GENRE}
                onChange={this.handleOptionChange}
              />
              Genre
            </label>
          </div>
            <button type="submit">Search</button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchingWord: state.searchingWord,
    searchingType: state.searchingType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: url => dispatch(filmsFetchData(url)),
    setSearchingWord: (word, type) => dispatch(setSearchingParams(word, type)),
    showMessageEmptyParams: () => dispatch(showMessageEmptyParams()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);
