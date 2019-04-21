export function filter(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filteringType: action.payload
      };

    default:
      return state;
  }
}
