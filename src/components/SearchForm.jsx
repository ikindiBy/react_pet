import React, { Component } from "react";
import "./Header.scss";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("A ===>> " + this.state.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Find your movie</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="managing-of-search">
            <div className="filtering-of-search">
              <h4>Search by</h4>
              <button>Title</button>
              <button>Genre</button>
            </div>
            <button type="submit">Search</button>
          </div>
        </form>
      </>
    );
  }
}

export default SearchForm;
