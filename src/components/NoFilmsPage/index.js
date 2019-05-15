import React, { Component } from "react";
import { connect } from "react-redux";
import "./NoFilmsPage.scss";

class NoFilmsPage extends Component {
    getClass = () => {
      const className = "noFilms";
      return this.props.setFilms.length ? `${className} hidden` : className;
    }

    render() {
      return (
        <>
            <div className={this.getClass()}>
                <h1> No films found </h1>
            </div>
        </>
      );
    }
}

function mapStateToProps(state) {
  return {
    setFilms: state.films.filmsSet,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoFilmsPage);
