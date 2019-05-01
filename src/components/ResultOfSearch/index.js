import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

class ResultsOfSearch extends Component {

    componentDidMount(){
        console.log('----- ResultsOfSearch ------componentDidMount----', this.props.match);
    // if (!this.props.setFilms.length) {
      // console.log('-----Main------componentDidMount----', this.props);
      // const urlToGetDescribedFilm = getUrlForRequestFilmById(this.props.match.params.id);
      // this.props.fetchFilmData(urlToGetDescribedFilm);
    // }
  }

//   showFilms = () => {
//     return this.props.setFilms.map(item => {
//       return (
//         <Link to={`/description/${item.id}`} key={item.id}>
//           <Tile film={item} />
//         </Link>
//       );
//     });
//   };

  render() {
    return (
      
        <>
       Blalalalalalalalala

       {/* {this.showFilms()} */}
        </>
      
 
    );
  }
}

function mapStateToProps(state) {
    return {
      setFilms: state.films.filmsSet,
      searchingWord: state.search.searchingWord,
      searchingType: state.search.searchingType,
      showEmptyParams: state.search.showEmptyParams
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      fetchData: url => dispatch(filmsFetchData(url))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResultsOfSearch);

