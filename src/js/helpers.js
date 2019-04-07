import { STUB_DATA } from "./constants";

const getRequestToAPI = (searchBy, searchingWord) => {
  return `https://reactjs-cdp.herokuapp.com/movies?search=${searchingWord}&searchBy=${searchBy}`;
};

const getReleaseYear = deteFromAPI => {
  if (deteFromAPI) {
    return deteFromAPI.slice(0, 4);
  }
  return STUB_DATA;
};

const getGenres = genresFromAPI => {
  let allGenres = "";
  if (genresFromAPI && genresFromAPI.length > 0) {
    genresFromAPI.forEach((genre, i) => {
      allGenres = i === 0 ? genre : allGenres + ", " + genre;
    });
    return allGenres;
  }
  return STUB_DATA;
};

export { getRequestToAPI, getReleaseYear, getGenres };
