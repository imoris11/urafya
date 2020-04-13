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
  CREATE_HELPLINE,
  CREATING_HELPLINE,
  CREATE_HELPLINE_SUCCESS,
  CREATE_HELPLINE_FAILURE,
} from "./actions";
import { getUserToken } from "../../../../Authenication/redux/selectors";

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

export function* createHelpline(action) {
  yield put({
    type: CREATING_HELPLINE,
  });

  try {
    const token = yield select(getUserToken);
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(action.payload),
    };
    const response = yield call(
      makeApiRequest,
      "/emergencies/add-emergency",
      config
    );
    const payload = {
      ...action.payload,
      _id: Math.round(Math.random() * 100000),
    };
    yield put({
      type: CREATE_HELPLINE_SUCCESS,
      payload,
    });
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: CREATE_HELPLINE_FAILURE,
    });
    toast.error(error.message);
  }
}

function* emergencySagas() {
  yield takeEvery(FETCH_EMERGENCY_LINES, fetchEmergencyLines);
  yield takeLatest(DELETE_EMERGENCY_LINE, deleteEmergencyLine);
  yield takeLatest(CREATE_HELPLINE, createHelpline);
}

export default emergencySagas;
