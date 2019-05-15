// const cashFilms = [
//   {
//     page: 3,
//     word: "Away",
//     searchBy: "title",
//     films: [
//       {
//         id: 129,
//         title: "Spirited Away"
//       },
//       {
//         id: 3322,
//         title: "Godfather 4 Away"
//       }
//     ]
//   }
// ],

export function films(
  state = {
    filmsSet: [], total: 0, idForDP: null, filmToDesciption: {},
  },
  action,
) {
  switch (action.type) {
    case "FILMS_FETCH_DATA_SUCCESS":
      return {
        ...state,
        filmsSet: action.payload.data,
        total: action.payload.total,
      };
    case "FILM_BY_ID_FETCH_DATA_SUCCESS":
      return {
        ...state,
        filmToDesciption: action.payload,
      };
    case "SET_ID_FOR_DP":
      return {
        ...state,
        idForDP: action.payload.id,
      };
    default:
      return state;
  }
}
