import React, { Component } from "react";
import "./Header.scss";

class ResultLine extends Component {
  render() {
    return (
      <div className="result-line">
        <div className="result-line-wrapper">
          <div className="result-line-quantity">
            {this.props.quantity} movies found
          </div>
          <div className="result-line-filter">
            <p>
              Sort by:
              <span>release date</span>
              <span>rating</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultLine;
