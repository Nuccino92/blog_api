const { GET_ERRORS, CLEAR_ERRORS } = require("./types");

// return errors
export const returnErrors = (message, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: {
      message,
      status,
      id,
    },
  };
};

// clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
