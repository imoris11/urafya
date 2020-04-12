import { put, call, select, takeEvery, takeLatest } from "redux-saga/effects";
import makeApiRequest from "../../../../utils";
import { toast } from "react-toastify";
import {
  FETCH_EMERGENCY_LINES,
  FETCHING_EMERGENCY_LINES_SUCCESS,
  FETCHING_EMERGENCY_LINES,
  FETCHING_EMERGENCY_LINES_FAILURE,
  DELETE_EMERGENCY_LINE,
  EMERGENCY_LINE_DELETED,
} from "./actions";

function* fetchEmergencyLines() {
  yield put({
    type: FETCHING_EMERGENCY_LINES,
  });
  const response = yield call(makeApiRequest, "/emergencies/view-emergencies");
  if (response.statusCode === 200) {
    yield put({
      type: FETCHING_EMERGENCY_LINES_SUCCESS,
      payload: response.emergencies,
    });
  } else {
    yield put({
      type: FETCHING_EMERGENCY_LINES_FAILURE,
    });
    toast.error("Error fetching emergency lines, please try again");
  }
}

function* deleteEmergencyLine(action) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = yield call(
      makeApiRequest,
      `/emergencies/delete-emergency/${action.payload}`,
      config
    );
    if (response.statusCode === 200) {
      yield put({
        type: EMERGENCY_LINE_DELETED,
        payload: action.payload,
      });
      toast.success("Emergency line was successfully deleted");
    } else {
      toast.error("Error deleting, please try again later.");
    }
  } catch (error) {
    toast.error("Error deleting, please try again later.");
  }
}

function* emergencySagas() {
  yield takeEvery(FETCH_EMERGENCY_LINES, fetchEmergencyLines);
  yield takeLatest(DELETE_EMERGENCY_LINE, deleteEmergencyLine);
}

export default emergencySagas;
