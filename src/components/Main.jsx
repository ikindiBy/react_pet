import React, { Component } from "react";
import "./Main.scss";

import Tile from "./Tile.jsx";

class Main extends Component {
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <h1>No films found</h1>
          <Tile />
        </div>
      </main>
    );
  }
}

export default Main;
