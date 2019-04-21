export function setSearchingParams(type, word) {
  return {
    type: "SET_SEARCHING_PARAMS",
    payload: { word, type }
  };
}

export function showMessageEmptyParams() {
  return {
    type: "SHOW_EMPTY_PARAMS"
  };
}
