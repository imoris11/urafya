import { put, call, takeEvery, takeLatest, select } from "redux-saga/effects";
import {
  FETCH_CONSULTATIONS_FAILURE,
  FETCH_CONSULTATIONS_SUCCESS,
  FETCH_CONSULTATION_FAILURE,
  FETCH_CONSULTATION_SUCCESS,
  FETCHING_CONSULTATIONS,
  FETCH_CONSULTATIONS,
  FETCH_CONSULTATION,
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

export function* fetchConsultations() {
  yield put({
    type: FETCHING_CONSULTATIONS,
  });
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token);
    const response = yield call(
      makeApiRequest,
      "/consultation/all-consultations",
      config
    );
    yield put({
      type: FETCH_CONSULTATIONS_SUCCESS,
      payload: response.consultations,
    });
  } catch (error) {
    yield put({
      type: FETCH_CONSULTATIONS_FAILURE,
    });
    toast.error(error.message);
  }
}

export function* fetchConsultation(action) {
  yield put({
    type: FETCHING_CONSULTATIONS,
  });
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token);
    const response = yield call(
      makeApiRequest,
      `/consultation/retrieve-consultation/${action.payload}`,
      config
    );
    yield put({
      type: FETCH_CONSULTATION_SUCCESS,
      payload: response.consultations,
    });
  } catch (error) {
    yield put({
      type: FETCH_CONSULTATION_FAILURE,
    });
    toast.error(error.message);
  }
}

function* consultationsSagas() {
  yield takeEvery(FETCH_CONSULTATIONS, fetchConsultations);
  yield takeLatest(FETCH_CONSULTATION, fetchConsultation);
}

export default consultationsSagas;
