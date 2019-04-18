import React, { Component } from "react";
import "./PageNumber.scss";

class PageNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: false
    };
  }

  handleClick = event => {
    this.setState({ chosen: !this.state.chosen });
    // there could be used  "event.target.textContent" but it is a string and simpler solve below
    this.props.showFilmsByPage(this.props.content);
  };

  render() {
    return (
      <div className="pageNumber" onClick={this.handleClick}>
        {this.props.content}
      </div>
    );
  }
}

export default PageNumber;
