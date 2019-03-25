import React, { Component } from "react";
import "./Tile.scss";

class Tile extends Component {
  render() {
    // console.log("=====", this.props);
    const {
      title,
      poster_path,
      genres,
      vote_average,
      release_date
    } = this.props.film;
    return (
      <div className="poster-wrapper">
        <img src={poster_path} alt="" />
        <div className="poster-info">
          <div className="poster-description">
            <h4>{title}</h4>
            <p>{genres[0]}</p>
          </div>
          <div className="poster-date">
            <span>{release_date.slice(0, 4)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;
