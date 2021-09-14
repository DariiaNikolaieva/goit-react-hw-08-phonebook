import {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

import backendApi from "../../services/backend-api";

export const registration = (credentials) => async (dispatch) => {
  dispatch(registrationRequest());

  try {
    const { data } = await backendApi.signUp(credentials);

    backendApi.token.set(data.token);
    dispatch(registrationSuccess(data));
  } catch (error) {
    dispatch(registrationError(error));
  }
};

export const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const { data } = await backendApi.logIn(credentials);

    backendApi.token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    await backendApi.logOut();

    backendApi.token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  backendApi.token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const { data } = await backendApi.getCurrentUser();

    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
// export { registration, logIn, logOut, getCurrentUser };
