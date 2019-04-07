import React, { Component } from "react";
import "./DescriptionFilm.scss";
import AverageCircle from "./AverageCircle.jsx";
import { getReleaseYear } from "./../js/helpers";

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
        // runtime
      } = this.props.film;
      let { runtime } = this.props.film;
      runtime = 145;

      return (
        <div className="description">
          <div className="description-wrapper">
            <div className="bgc-fill" />
            <img
              src="/assets/img/header.jpg"
              alt="header_title"
              className="image-bgc"
            />
            <div className="description-card">
              <img src={poster_path} alt="" />
              <div className="description-content">
                <div className="title-average">
                  <h1>{title}</h1>
                  <AverageCircle average={vote_average} />
                </div>

                <h4>{tagline}</h4>
                <div className="year-and-runtime">
                  <p>{getReleaseYear(release_date)} </p>
                  {runtime ? <p>{runtime} min</p> : ""}
                </div>
                <p>{overview} </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div className="description" />;
  }
}

export default DescriptionFilm;
