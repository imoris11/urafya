import { takeEvery, call, put } from "redux-saga/effects";
import {
  LOG_IN_SUCCESS,
  LOG_IN,
  LOG_IN_FAILURE,
  LOGING_IN,
  FORGOT_PASSWORD,
  RESET_EMAIL_SENT_SUCCESSFULLY,
  SENDING_RESET_EMAIL,
} from "./actions";
import makeApiRequest from "../../utils";
const postConfig = (data) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify(data),
});
export function* login(action) {
  try {
    const config = postConfig(action.payload);

    yield put({
      type: LOGING_IN,
    });

    const response = yield call(makeApiRequest, "/auth/login", config);
    if (response.statusCode === 400) {
      yield put({
        type: LOG_IN_FAILURE,
      });
    } else {
      localStorage.setItem("user", JSON.stringify(response));
      yield put({
        type: LOG_IN_SUCCESS,
        payload: response,
      });
    }
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

export function* forgotPassword(action) {
  const config = postConfig(action.payload);
  yield put({
    type: SENDING_RESET_EMAIL,
  });
  try {
    yield call(makeApiRequest, "/auth/forgotpassword", config);
    yield put({
      type: RESET_EMAIL_SENT_SUCCESSFULLY,
    });
  } catch (error) { }
}

function* authSagas() {
  yield takeEvery(LOG_IN, login);
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

export default authSagas;
