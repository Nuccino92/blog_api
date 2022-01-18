import { combineReducers } from "redux";

import postReducer from "./posts";

// calls every child reducer and gathers their results into a single state object
export default combineReducers({
  postReducer,
});
