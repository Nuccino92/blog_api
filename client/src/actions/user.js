import { returnErrors } from "./error";
import { createUserRequest } from "../api/user";
import { logInRequest } from "../api/logIn";
import { authRequest } from "../api/auth";
import { tokenConfig } from "../config/tokenConfig";

import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERR,
  CLEAR_ERRORS,
} from "./types";

// check token and load user
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  try {
    const res = await authRequest(tokenConfig(getState));
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    // send to error action creator
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: AUTH_ERR,
    });
  }
};

export const createUser = (userData) => async (dispatch) => {
  try {
    const res = await createUserRequest(userData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(returnErrors({}, null, "REGISTER_SUCCESS"));
  } catch (err) {
    // send to error action creator
    dispatch(
      // message, status, id --> error actions
      returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
    );
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const logInUser = (userData) => async (dispatch) => {
  try {
    const res = await logInRequest(userData);
    console.log(res);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch(
      returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
    );
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
