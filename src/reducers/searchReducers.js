// const initialState = {
//   searchingWord: "ocean",
//   searchingType: SEARCH_BY.TITLE,
//   showNoResult: false,
//   showEmptyParams: false
// };

export function search(state = {}, action) {
  switch (action.type) {
    case "SET_SEARCHING_PARAMS":
      return {
        ...state,
        searchingWord: action.payload.word,
        searchingType: action.payload.type,
        showEmptyParams: false,
      };

    case "SHOW_EMPTY_PARAMS":
      return {
        ...state,
        showEmptyParams: true,
      };
    default:
      return state;
  }
}
