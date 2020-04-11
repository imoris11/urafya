import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOGING_IN,
  LOG_OUT,
  RESET_EMAIL_SENT_SUCCESSFULLY,
  SENDING_RESET_EMAIL,
} from "./actions";

let initialState = {
  loggedIn: false,
  loggedIn: false,
  loggingIn: false,
  loggedInError: false,
  resetEmailSent: false,
  sendingResetEmail: false,
  user: {},
};
const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  initialState = {
    ...initialState,
    loggedIn: true,
    user,
  };
}

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        user: action.payload,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        loggedInError: true,
        loggingIn: false,
      };
    case LOGING_IN:
      return {
        ...state,
        loggingIn: true,
      };
    case LOG_OUT:
      return {
        ...state,
        loggedIn: false,
        user: {},
      };
    case RESET_EMAIL_SENT_SUCCESSFULLY:
      return {
        ...state,
        resetEmailSent: true,
        sendingResetEmail: false,
      };
    case SENDING_RESET_EMAIL:
      return {
        ...state,
        sendingResetEmail: true,
      };
    default:
      return state;
  }
};
