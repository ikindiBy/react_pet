import React, { Component } from "react";
import "./Main.scss";

import Tile from "./Tile.jsx";

class Main extends Component {
  constructor(props) {
    super(props);

    this.showFilms = this.showFilms.bind(this);
    this.hideElement = this.hideElement.bind(this);
  }

  hideElement() {
    return this.props.setFilms ? true : false;
  }

  showFilms(setFilms) {
    return setFilms.map(item => {
      return <Tile key={item.id} film={item} />;
    });
  }

  render() {
    return (
      <main>
        <div className="main-wrapper">
          <h1 hidden={this.hideElement()}>No films found</h1>
          {this.showFilms(this.props.setFilms)}
        </div>
      </main>
    );
  }
}

export default Main;
