import { getRequestToAPI, getReleaseYear, getGenres } from "./helpers";
import { STUB_DATA } from "./../js/constants";

describe("ReleaseYear ", () => {
  it("should have correct format date", () => {
    const dateFromAPI = "2019-01-21";
    const year = "2019";
    const formatDate = getReleaseYear(dateFromAPI);
    expect(formatDate).toBe(year);
  });
});

describe("Genres ", () => {
  it("should have correct string of genres as result", () => {
    const genresFromAPI = ["Aa", "Vee"];
    const strGenres = "Aa, Vee";
    const stringGenres = getGenres(genresFromAPI);
    expect(stringGenres).toBe(strGenres);
  });

  it("should have stub value if empty results from API", () => {
    const genresFromAPI = [];
    const stringGenres = getGenres(genresFromAPI);
    expect(stringGenres).toBe(STUB_DATA);
  });

  it("should have stub value if undefined results from API", () => {
    const genresFromAPI = undefined;
    const stringGenres = getGenres(genresFromAPI);
    expect(stringGenres).toBe(STUB_DATA);
  });
});
