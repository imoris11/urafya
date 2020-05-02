import { put, call, takeEvery, takeLatest, select } from "redux-saga/effects";
import {
  FETCH_APPOINTMENTS_FAILURE,
  FETCH_APPOINTMENTS_SUCCESS,
  FETCHING_APPOINTMENTS,
  FETCH_APPOINTMENTS,
  FETCH_APPOINTMENT,
  FETCH_APPOINTMENT_SUCCESS,
  FETCH_APPOINTMENT_FAILURE,
  CREATING_APPOINTMENT,
  CREATE_APPOINTMENT,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAILURE,
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

const postConfig = (token, data) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(data),
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

export function* fetchAppointment(action) {
  yield put({
    type: FETCHING_APPOINTMENTS,
  });
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token);
    const response = yield call(
      makeApiRequest,
      `/appointment/retrieve-appointment/${action.payload}`,
      config
    );
    yield put({
      type: FETCH_APPOINTMENT_SUCCESS,
      payload: response.appointment,
    });
  } catch (error) {
    yield put({
      type: FETCH_APPOINTMENT_FAILURE,
    });
    toast.error(error.message);
  }
}

export function* createNewAppointment(action) {
  yield put({
    type: CREATING_APPOINTMENT,
  });
  try {
    const token = yield select(getUserToken);
    const config = postConfig(token, action.payload.appointment);
    const response = yield call(
      makeApiRequest,
      `/appointment/proceed-to-consultation/${action.payload.id}`,
      config
    );
    yield put({
      type: CREATE_APPOINTMENT_SUCCESS,
    });
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: CREATE_APPOINTMENT_FAILURE,
    });
    toast.error(error.message);
  }
}

function* appointmentsSagas() {
  yield takeEvery(FETCH_APPOINTMENTS, fetchAppointments);
  yield takeLatest(FETCH_APPOINTMENT, fetchAppointment);
  yield takeLatest(CREATE_APPOINTMENT, createNewAppointment);
}

export default appointmentsSagas;
