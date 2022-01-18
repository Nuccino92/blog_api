// make state's initial state an empty array
const postReducer = (state = [], action) => {
  // reducer looks at action type field to decide what happens
  switch (action.type) {
    // do something here based on different types of actions
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return state;
    default:
      return state;
  }
};

export default postReducer;
