const getIsAuthenticated = (state) => state.auth.isAuthenticated;

const getUserName = (state) => state.auth.user.name;

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getIsAuthenticated,
  getUserName,
};
