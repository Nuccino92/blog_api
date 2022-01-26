import {
  fetchPostsRequest,
  createPostsRequest,
  deletePostRequest,
  updatePostRequest,
} from "../api/posts";
import { tokenConfig } from "../config/tokenConfig";
import { returnErrors } from "./error";
import { FETCH_ALL, CREATE_POST, DELETE_POST, UPDATE_POST } from "./types";

// action creators, return action w/ type & payload
// w/ thunk have to add => async (dispatch) =>, also dispatch instead of return

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await fetchPostsRequest();
    // dispatch instead of return with thunk
    dispatch({ type: FETCH_ALL, payload: response.data });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

export const createPosts = (postData) => async (dispatch, getState) => {
  try {
    const response = await createPostsRequest(postData, tokenConfig(getState));
    // dispatch instead of return with thunk
    dispatch({ type: CREATE_POST, payload: response.data });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    await deletePostRequest(id, tokenConfig(getState));
    dispatch({ type: DELETE_POST, payload: id });
  } catch (err) {
    console.log(err);
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

export const updatePost = (data) => async (dispatch) => {
  try {
    const response = await updatePostRequest(data);
    dispatch({ type: UPDATE_POST, payload: response.data });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};
