import React, { Component } from "react";
import "./Tile.scss";

class Tile extends Component {
  render() {
    return (
      <div className="poster-wrapper">
        <img
          src="https://image.tmdb.org/t/p/w500/veDMW7eX6tat86EapsvGEICJ8Tq.jpg"
          alt=""
        />
        <div className="poster-info">
          <div className="poster-description">
            <h4>Kill bill</h4>
            <p>Action</p>
          </div>
          <div className="poster-date">
            <span>1988</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;
