import React, { Component } from "react";
import "./SearchForm.scss";
import SEARCH_BY from "./../js/constants";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      selectedOption: SEARCH_BY.TITLE
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleOptionChange = event => {
    this.setState({ selectedOption: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setSearchingWord(this.state.selectedOption, this.state.value);
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
              />{" "}
              Title
            </label>
            <label className="radio">
              <input
                type="radio"
                name="searchBy"
                value={SEARCH_BY.GENRE}
                checked={this.state.selectedOption === SEARCH_BY.GENRE}
                onChange={this.handleOptionChange}
              />{" "}
              Genre
            </label>
          </div>
          <button type="submit">Search</button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
