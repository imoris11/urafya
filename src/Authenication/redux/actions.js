export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN = "LOG_IN";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOGING_IN = "LOGING_IN";
export const LOG_OUT = "LOG_OUT";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const RESET_EMAIL_SENT_SUCCESSFULLY = "RESET_EMAIL_SENT_SUCCESSFULLY";
export const SENDING_RESET_EMAIL = "SENDING_RESET_EMAIL";

export const login = (payload) => {
  return {
    type: LOG_IN,
    payload,
  };
};

export const forgotPassword = (payload) => {
  return {
    type: FORGOT_PASSWORD,
    payload,
  };
};
