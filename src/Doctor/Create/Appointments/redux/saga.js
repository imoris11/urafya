import { put, call, takeEvery, takeLatest, select } from "redux-saga/effects";
import {
  FETCH_APPOINTMENTS_FAILURE,
  FETCH_APPOINTMENTS_SUCCESS,
  FETCHING_APPOINTMENTS,
  FETCH_APPOINTMENTS,
} from "./actions";
import { toast } from "react-toastify";
import makeApiRequest from "../../../../utils";
import { getUserToken } from "../../../../Authenication/redux/selectors";

const getConfig = (token, method = "GET") => ({
  method,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export function* fetchAppointments() {
  yield put({
    type: FETCHING_APPOINTMENTS,
  });
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token);
    const response = yield call(
      makeApiRequest,
      "/appointment/all-appointments",
      config
    );
    yield put({
      type: FETCH_APPOINTMENTS_SUCCESS,
      payload: response.appointments,
    });
  } catch (error) {
    yield put({
      type: FETCH_APPOINTMENTS_FAILURE,
    });
    toast.error(error.message);
  }
}

function* appointmentsSagas() {
  yield takeEvery(FETCH_APPOINTMENTS, fetchAppointments);
}

export default appointmentsSagas;
