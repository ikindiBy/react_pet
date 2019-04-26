import { SEARCH_BY, URL_API, STUB_DATA, LIMIT_SEARCHING } from "./constants";

const getUrlForRequest = (
  searchBy = SEARCH_BY.TITLE,
  searchingWord,
  sortBy,
  page = 1
) => {
  if (!searchingWord) {
    return undefined;
  }

  if (sortBy) {
    return `${URL_API}/movies?sortBy=${sortBy}&sortOrder=desc&limit=${LIMIT_SEARCHING}&search=${searchingWord}&searchBy=${searchBy}&offset=${page}`;
  }

  return `${URL_API}/movies?limit=${LIMIT_SEARCHING}&search=${searchingWord}&searchBy=${searchBy}&offset=${page}`;
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

const normalizeId = id => {
  return +id;
};

export { getUrlForRequest, getReleaseYear, getGenres, normalizeId };
