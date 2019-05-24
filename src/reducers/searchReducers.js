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
