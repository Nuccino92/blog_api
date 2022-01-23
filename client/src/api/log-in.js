import axios from "axios";

const url = "http://localhost8000/log-in";

export const logInRequest = (data) => axios.post(url, data);
