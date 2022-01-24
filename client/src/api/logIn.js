import axios from "axios";

const url = "http://localhost:8000/log-in";

export const logInRequest = (data) => axios.post(url, data);
