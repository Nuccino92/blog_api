import { fetchPosts, createPosts } from "../api/posts";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: response.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const postPosts = (postData) => async (dispatch) => {
  try {
    const response = await createPosts(postData);

    dispatch({ type: "CREATE", payload: response.data });
  } catch (err) {
    console.log(err.message);
  }
};
