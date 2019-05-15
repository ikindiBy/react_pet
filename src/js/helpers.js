// @flow

import {
  SEARCH_BY,
  URL_API,
  STUB_DATA,
  LIMIT_SEARCHING,
} from "./constants";

const getUrlForRequest = (
  searchBy: string = SEARCH_BY.TITLE,
  searchingWord: string | number,
  sortBy: string,
  page: number = 1,
): string | void => {
  if (!searchingWord) {
    return undefined;
  }

  if (sortBy) {
    return `${URL_API}/movies?
    sortBy=${sortBy}
    &sortOrder=desc
    &limit=${LIMIT_SEARCHING}
    &search=${searchingWord}
    &searchBy=${searchBy}
    &offset=${page}`;
  }

  return `${URL_API}/movies?limit=${LIMIT_SEARCHING}&search=${searchingWord}&searchBy=${searchBy}&offset=${page}`;
};

const getUrlForRequestFilmById = (id: string | number): string => `${URL_API}/movies/${id}`;

const getReleaseYear = (dateFromAPI: string): string => {
  if (dateFromAPI) {
    return dateFromAPI.slice(0, 4);
  }
  return STUB_DATA;
};

const getGenres = (genresFromAPI: Array<string>): string => {
  let allGenres = "";
  if (genresFromAPI && genresFromAPI.length > 0) {
    genresFromAPI.forEach((genre, i) => {
      allGenres = i === 0 ? genre : `${allGenres}, ${genre}`;
    });
    return allGenres;
  }
  return STUB_DATA;
};

const normalizeId = (id: string | number): number => +id;

export {
  getUrlForRequest,
  getUrlForRequestFilmById,
  getReleaseYear,
  getGenres,
  normalizeId,
};
