import React, { Component } from "react";

import PageNumber from "../PageNumber/PageNumber";
import "./Pagination.scss";

import { LIMIT_SEARCHING } from "./../../js/constants";

class Pagination extends Component {
  showPages = amount => {
    let pages = 0;

    if (amount) {
      if (amount % LIMIT_SEARCHING === 0) {
        pages = amount / LIMIT_SEARCHING;
      } else {
        pages = Math.trunc(amount / LIMIT_SEARCHING) + 1;
      }
    }

    return new Array(pages).fill("").map((item, index) => {
      return (
        <PageNumber
          key={index + 1}
          content={index + 1}
          showFilmsByPage={this.props.showFilmsByPage}
        />
      );
    });
  };

  render() {
    return (
      <div className="pagination">{this.showPages(this.props.amount)}</div>
    );
  }
}

export default Pagination;
