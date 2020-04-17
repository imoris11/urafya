import { takeEvery, put, call, select, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  FETCH_ABOUT,
  FETCHING_ABOUT,
  FETCH_ABOUT_SUCCESS,
  FETCH_ABOUT_FAILURE,
  UPDATE_ABOUT,
  CREATE_ABOUT,
  CREATE_ABOUT_SUCCESS,
  CREATE_ABOUT_FAILURE,
  CREATING_ABOUT,
  UPDATING_ABOUT,
  UPDATE_ABOUT_SUCCESS,
  UPDATE_ABOUT_FAILURE,
} from "./actions";
import makeApiRequest from "../../../utils";
import { getUserToken } from "../../../Authenication/redux/selectors";
const getConfig = (token, method = "GET") => ({
  method,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
export function* fetchAbout() {
  yield put({
    type: FETCHING_ABOUT,
  });
  //call API
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token);
    const response = yield makeApiRequest("/about/retrieve-about", config);
    yield put({
      type: FETCH_ABOUT_SUCCESS,
      payload: response.about,
    });
  } catch (error) {
    yield put({
      type: FETCH_ABOUT_FAILURE,
    });
    toast.error(error.message);
  }
}

export function* updateAbout(action) {
  yield put({
    type: UPDATING_ABOUT,
  });
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token, "PUT");
    config["body"] = JSON.stringify(action.payload);
    const response = yield call(makeApiRequest, `/about/edit-about`, config);
    yield put({
      type: UPDATE_ABOUT_SUCCESS,
      payload: action.payload,
    });
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: UPDATE_ABOUT_FAILURE,
    });
    toast.error(error.message);
  }
}

function* aboutSagas() {
  yield takeEvery(FETCH_ABOUT, fetchAbout);
  yield takeLatest(UPDATE_ABOUT, updateAbout);
}

export default aboutSagas;
