import { fetchPostsRequest, createPostsRequest } from "../api/posts";

// action creators, return action w/ type & payload
// w/ thunk have to add => async (dispatch) =>, also dispatch instead of return

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await fetchPostsRequest();
    // dispatch instead of return with thunk
    dispatch({ type: "FETCH_ALL", payload: response.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPosts = (postData) => async (dispatch) => {
  try {
    const response = await createPostsRequest(postData);
    console.log(response.data);
    // dispatch instead of return with thunk
    dispatch({ type: "CREATE_POST", payload: response.data });
  } catch (err) {
    console.log(err.message);
  }
};
