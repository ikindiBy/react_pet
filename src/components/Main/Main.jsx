import React, { Component } from "react";
import "./Main.scss";

import Tile from "../Tile/Tile.jsx";
import Pagination from "../Pagination/Pagination";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  hideElement = () => {
    return this.props.setFilms ? true : false;
  };

  showFilms = setFilms => {
    return setFilms.map(item => {
      return (
        <Tile
          key={item.id}
          film={item}
          setFilmForDescription={this.props.setFilmForDescription}
        />
      );
    });
  };

  render() {
    return (
      <main>
        <div className="main-wrapper">
          <h1 hidden={this.hideElement()}>No films found</h1>
          {this.showFilms(this.props.setFilms)}
        </div>
        <Pagination
          amount={this.props.quantity}
          showFilmsByPage={this.props.showFilmsByPage}
        />
      </main>
    );
  }
}

export default Main;
