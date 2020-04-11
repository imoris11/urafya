import { createStructuredSelector, createSelector } from "reselect";

const getAuth = (obj = {}) => obj.auth;
const User = (obj = {}) => obj.user;

export const getUser = createSelector(getAuth, User);

export const isLoggedIn = createSelector(getAuth, (auth) => auth.loggedIn);

export const loggedInError = createSelector(
  getAuth,
  (auth) => auth.loggedInError
);

export const loggingIn = createSelector(getAuth, (auth) => auth.loggingIn);

export const sendingResetEmail = createSelector(
  getAuth,
  (auth) => auth.sendingResetEmail
);

export const resetEmailSent = createSelector(
  getAuth,
  (auth) => auth.resetEmailSent
);

const selectors = () =>
  createStructuredSelector({
    isLoggedIn,
    loggedInError,
    loggingIn,
  });

export default selectors;
