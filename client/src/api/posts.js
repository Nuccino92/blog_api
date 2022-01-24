import axios from "axios";

const url = "http://localhost:8000/posts";

export const fetchPostsRequest = () => axios.get(url);
export const createPostsRequest = (postData) => axios.post(url, postData);

