// gets token and puts in headers
export const tokenConfig = (getState) => {
  // gets token from userReducer intial state
  const token = getState().userReducer.token;
  const config = {
    headers: {},
  };
  // if token add to headers
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};
