import { createAction } from "@reduxjs/toolkit";

export const registrationRequest = createAction("auth/registrationRequest");
export const registrationSuccess = createAction("auth/registrationSuccess");
export const registrationError = createAction("auth/registrationError");

export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginError = createAction("auth/loginError");

export const logoutRequest = createAction("auth/logoutRequest");
export const logoutSuccess = createAction("auth/logoutSuccess");
export const logoutError = createAction("auth/logoutError");

export const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
export const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
export const getCurrentUserError = createAction("auth/getCurrentUserError");

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
// export default {
//   registrationRequest,
//   registrationSuccess,
//   registrationError,
//   loginRequest,
//   loginSuccess,
//   loginError,
//   logoutRequest,
//   logoutSuccess,
//   logoutError,
//   getCurrentUserRequest,
//   getCurrentUserSuccess,
//   getCurrentUserError,
// };
