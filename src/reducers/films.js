import { List } from "immutable";

const defaultState = {
  filmsSet: List(),
  total: 0,
  idForDP: null,
  filmToDesciption: {}
};

export function films(state = defaultState, action) {
  switch (action.type) {
    case "FILMS_FETCH_DATA_SUCCESS":
      return {
        ...state,
        filmsSet: List(action.payload.data),
        total: action.payload.total
      };
    case "FILM_BY_ID_FETCH_DATA_SUCCESS":
      return {
        ...state,
        filmToDesciption: action.payload
      };
    case "SET_ID_FOR_DP":
      return {
        ...state,
        idForDP: action.payload.id
      };
    default:
      return state;
  }
}
