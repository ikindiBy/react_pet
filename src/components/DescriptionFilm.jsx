import React, { Component } from "react";
import { connect } from "react-redux";
import "./DescriptionFilm.scss";
import AverageCircle from "./AverageCircle.jsx";
import { getReleaseYear } from "./../js/helpers";
import { stringTypeAnnotation } from "@babel/types";

class DescriptionFilm extends Component {
  writeGenres = (genres = []) => {
    let genresString = "";
    if (genres.length > 0) {
      genres.forEach((genre, i) => {
        if (i !== genres.length - 1) {
          genresString += genre + " / ";
        } else {
          genresString += genre;
        }
      });
    }

    return genresString;
  };

  render() {
    if (this.props.film) {
      let {
        title,
        poster_path,
        genres,
        vote_average,
        tagline,
        overview,
        release_date,
        runtime
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
            <div className="description-card">
              <img src={poster_path} alt="" />
              <div className="description-content">
                <div className="title-average">
                  <h1>
                    {title} {this.props.user}
                  </h1>
                  <AverageCircle average={vote_average} />
                </div>

                <h4>{tagline}</h4>
                <div className="year-and-runtime">
                  <p>{getReleaseYear(release_date)} </p>
                  {runtime ? <p>{runtime} min</p> : ""}
                </div>
                <p>{overview} </p>
                <p>{this.writeGenres(genres)} </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div className="description" />;
  }
}

function mapStateToProps(state) {
  return {
    user: state.filmsManager.user
  };
}

// export default DescriptionFilm;
export default connect(mapStateToProps)(DescriptionFilm);
