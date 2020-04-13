import { put, call, takeEvery, takeLatest } from "redux-saga/effects";
import {
  FETCH_TAXIS,
  FETCHING_TAXIS,
  FETCH_TAXIS_SUCCESS,
  FETCH_TAXIS_FAILURE,
  DELETE_TAXIS,
  DELETE_TAXIS_SUCCESS,
  CREATE_TAXI,
  CREATING_TAXI,
  CREATE_TAXI_SUCCESS,
  CREATE_TAXI_FAILURE,
} from "./actions";
import { toast } from "react-toastify";
import makeApiRequest from "../../../../utils";
const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export function* fetchTaxis() {
  yield put({
    type: FETCHING_TAXIS,
  });
  try {
    const response = yield call(makeApiRequest, "/taxi/all-taxis");
    yield put({
      type: FETCH_TAXIS_SUCCESS,
      payload: response.taxi,
    });
  } catch (error) {
    yield put({
      type: FETCH_TAXIS_FAILURE,
    });
    toast.error(error.message);
  }
}

export function* deleteTaxi(action) {
  try {
    const response = yield call(
      makeApiRequest,
      `/taxi/delete-taxi/${action.payload}`,
      config
    );
    yield put({
      type: DELETE_TAXIS_SUCCESS,
      payload: action.payload,
    });
    toast.success("Taxi deleted successfully");
  } catch (error) {
    toast.error(error.message);
  }
}

export function* createTaxi(action) {
  yield put({
    type: CREATING_TAXI,
  });
  const config = {
    method: "post",

    body: action.payload,
  };
  try {
    const response = yield call(makeApiRequest, "/taxi/add-taxi", config);
    yield put({
      type: CREATE_TAXI_SUCCESS,
    });
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: CREATE_TAXI_FAILURE,
    });
    toast.error(error.message);
  }
}

function* taxiSagas() {
  yield takeEvery(FETCH_TAXIS, fetchTaxis);
  yield takeEvery(DELETE_TAXIS, deleteTaxi);
  yield takeLatest(CREATE_TAXI, createTaxi);
}

export default taxiSagas;
