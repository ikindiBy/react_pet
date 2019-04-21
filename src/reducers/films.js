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

export function films(state = { filmsSet: [], total: 0 }, action) {
  switch (action.type) {
    case "FILMS_FETCH_DATA_SUCCESS":
      return { filmsSet: action.payload.data, total: action.payload.total };
    default:
      return state;
  }
}
