export const tokenConfig = (getState) => {
  // gets token from userReducer intial state
  const token = getState().userReducer.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // if token add to headers
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
};
