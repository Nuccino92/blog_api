import { fetchPostsRequest, createPostsRequest } from "../api/posts";
import { tokenConfig } from "../config/tokenConfig";
import { returnErrors } from "./error";

// action creators, return action w/ type & payload
// w/ thunk have to add => async (dispatch) =>, also dispatch instead of return

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await fetchPostsRequest();
    // dispatch instead of return with thunk
    dispatch({ type: "FETCH_ALL", payload: response.data });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

export const createPosts = (postData) => async (dispatch, getState) => {
  try {
    const response = await createPostsRequest(postData, tokenConfig(getState));
    console.log(response.data);
    // dispatch instead of return with thunk
    dispatch({ type: "CREATE_POST", payload: response.data });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};
