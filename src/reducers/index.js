import { combineReducers } from "redux";

import { films } from "./films";
import { search } from "./searchReducers";
import { filter } from "./filterReducer";

export default combineReducers({
  films,
  search,
  filter,
});
