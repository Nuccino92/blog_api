// make state's initial state an empty array
const postReducer = (state = [], action) => {
  // reducer looks at action type field to decide what happens
  switch (action.type) {
    // do something here based on different types of actions
    case "FETCH_ALL":
      return action.payload;
    case "CREATE_POST":
      // pushing payload(created post) to end of state
      return [...state, action.payload];
    default:
      return state;
  }
};

export default postReducer;
