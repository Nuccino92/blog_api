import { combineReducers } from "redux";

import postReducer from "./posts";
import userReducer from "./user";
import errorReducer from "./error";

// calls every child reducer and gathers their results into a single state object
export default combineReducers({
  postReducer,
  userReducer,
  errorReducer,
});
