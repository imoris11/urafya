import { put, call, takeEvery } from "redux-saga/effects";
import {
  FETCH_TAXIS,
  FETCHING_TAXIS,
  FETCH_TAXIS_SUCCESS,
  FETCH_TAXIS_FAILURE,
  DELETE_TAXIS,
  DELETE_TAXIS_SUCCESS,
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
    if (response.statusCode === 200) {
      yield put({
        type: FETCH_TAXIS_SUCCESS,
        payload: response.taxi,
      });
    } else {
      yield put({
        type: FETCH_TAXIS_FAILURE,
      });
      toast.error("Encountered an error, please try again.");
    }
  } catch (error) {
    toast.error("Encountered an error, please try again");
  }
}

export function* deleteTaxi(action) {
  try {
    const response = yield call(
      makeApiRequest,
      `/taxi/delete-taxi/${action.payload}`,
      config
    );
    if (response.statusCode === 200) {
      yield put({
        type: DELETE_TAXIS_SUCCESS,
        payload: action.payload,
      });
      toast.success("Taxi deleted successfully");
    } else {
      toast.error("An error occurred while deleting, please try again.");
    }
  } catch (error) {
    toast.error("Unexpected error, please try again.");
  }
}

function* taxiSagas() {
  yield takeEvery(FETCH_TAXIS, fetchTaxis);
  yield takeEvery(DELETE_TAXIS, deleteTaxi);
}

export default taxiSagas;
