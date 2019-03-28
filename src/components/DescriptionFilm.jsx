import React, { Component } from "react";
import "./DescriptionFilm.scss";

class DescriptionFilm extends Component {
  render() {
    if (this.props.film) {
      const {
        title,
        poster_path,
        genres,
        vote_average,
        tagline,
        overview,
        release_date
      } = this.props.film;

      return (
        <div className="description">
          <div className="description-wrapper">
            <div className="bgc-fill" />
            <img
              src="/assets/img/header.jpg"
              alt="header_title"
              className="image-bgc"
            />
            <img src={poster_path} alt="" className="image-tile" />
            <div className="description-content">
              <h1>{title}</h1>
              <h4>{tagline}</h4>
              <p>{release_date} </p>
              <p>{overview} </p>
            </div>
          </div>
        </div>
      );
    }

    return <div className="description" />;
  }
}

export default DescriptionFilm;
