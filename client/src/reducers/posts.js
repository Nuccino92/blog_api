import {
  FETCH_ALL,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
} from "../actions/types";

const initialState = {
  posts: [],
};

// make state's initial state an empty array
const postReducer = (state = initialState, action) => {
  // reducer looks at action type field to decide what happens
  switch (action.type) {
    // do something here based on different types of actions
    case FETCH_ALL:
      return action.payload;
    case CREATE_POST:
      // pushing payload(created post) to end of state
      return [...state.posts, action.payload];
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case UPDATE_POST:
      return state;
    default:
      return state;
  }
};

export default postReducer;
