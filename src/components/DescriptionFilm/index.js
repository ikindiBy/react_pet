import React, { Component } from "react";
import { connect } from "react-redux";

import "./DescriptionFilm.scss";
import AverageCircle from "../AverageCircle";
import { getReleaseYear, normalizeId, getUrlForRequestFilmById } from "../../js/helpers";
import { filmByIdFetchData } from "../../actions/filmsAction";

class DescriptionFilm extends Component {
  writeGenres = (genres = []) => {
    let genresString = "";
    if (genres.length > 0) {
      genres.forEach((genre, i) => {
        if (i !== genres.length - 1) {
          genresString += `${genre} / `;
        } else {
          genresString += genre;
        }
      });
    }

    return genresString;
  };

  componentDidMount() {
    if (!this.props.setFilms.length) {
      const urlToGetDescribedFilm = getUrlForRequestFilmById(this.props.match.params.id);
      this.props.fetchFilmData(urlToGetDescribedFilm);
    }
  }

  getFilmForDP = () => {
    if (this.props.filmToDesciption.id) {
      return this.props.filmToDesciption;
    }
    return this.props.setFilms.find(
      film => normalizeId(film.id) === normalizeId(this.props.match.params.id),
    );
  };

  render() {
    const filmForDP = this.getFilmForDP();
    if (filmForDP) {
      const {
        title,
        poster_path,
        genres,
        vote_average,
        tagline,
        overview,
        release_date,
        runtime,
      } = filmForDP;

      return (
        <div className="description">
          <div className="description-wrapper">
            <div className="bgc-fill" />
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
    setFilms: state.films.filmsSet,
    filmToDesciption: state.films.filmToDesciption,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFilmData: url => dispatch(filmByIdFetchData(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionFilm);
