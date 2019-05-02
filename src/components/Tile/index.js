import React, { Component } from "react";
import "./Tile.scss";

import { getReleaseYear, getGenres } from "../../js/helpers";

class Tile extends Component {
  render() {
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
            <p>{getGenres(genres)}</p>
          </div>
          <div className="poster-date">
            <span>{getReleaseYear(release_date)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;
