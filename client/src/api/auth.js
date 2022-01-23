import axios from "axios";

const url = "http://localhost/auth";

export const authRequest = (data) => axios.get(url, data);
