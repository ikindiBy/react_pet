import { search } from "./searchReducers";
import { filter } from "./filterReducer";
import { FILTERS } from "../js/constants";

describe("Filter reducers ", () => {
  it("SET_FILTER should set new filter param", () => {
    const action = {
      type: "SET_FILTER",
      payload: FILTERS.RATING
    };

    const initialState = {
      filteringType: FILTERS.RELEASE,
      testField: "testData"
    };

    expect(filter(initialState, action)).toEqual({
      ...initialState,
      filteringType: FILTERS.RATING
    });
  });
});

describe("Search reducers ", () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      searchingWord: "",
      searchingType: "",
      showEmptyParams: true
    };
  });

  it("SET_SEARCHING_PARAMS should set new search params", () => {
    const testData = { word: "q", type: "t" };
    const action = {
      type: "SET_SEARCHING_PARAMS",
      payload: testData
    };

    expect(search(initialState, action)).toEqual({
      ...initialState,
      searchingWord: testData.word,
      searchingType: testData.type,
      showEmptyParams: false
    });
  });

  it("SHOW_EMPTY_PARAMS should set true in field showEmptyParams", () => {
    const action = {
      type: "SHOW_EMPTY_PARAMS"
    };

    initialState = {
      searchingWord: "tw",
      searchingType: "tt",
      showEmptyParams: false
    };

    expect(search(initialState, action)).toEqual({
      ...initialState,
      showEmptyParams: true
    });
  });
});
