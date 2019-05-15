import React, { Component } from "react";
import { connect } from "react-redux";

import PageNumber from "../PageNumber";
import "./Pagination.scss";
import setPageAction from "../../actions/actionPage";
import { LIMIT_SEARCHING } from "../../js/constants";

class Pagination extends Component {
  showPages = (amount) => {
    let pages = 0;

    if (amount) {
      if (amount % LIMIT_SEARCHING === 0) {
        pages = amount / LIMIT_SEARCHING;
      } else {
        pages = Math.trunc(amount / LIMIT_SEARCHING) + 1;
      }
    }

    return new Array(pages).fill("").map((item, index) => (
        <PageNumber
          key={index + 1}
          content={index + 1}
          showFilmsByPage={this.props.showFilmsByPage}
          setCurrentPage={this.props.setCurrentPage}
        />
    ));
  };

  render() {
    // console.log("----------------= ", this.props.currentPage);
    return (
      <div className="pagination">{this.showPages(this.props.amount)}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // currentPage: state.filmsManager.currentPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentPage: (page) => {
      dispatch(setPageAction(page));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
