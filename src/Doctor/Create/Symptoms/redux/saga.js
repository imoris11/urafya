import { put, call, takeEvery, takeLatest, select } from "redux-saga/effects";
import {
  FETCH_SYMPTOMS,
  DELETE_SYMPTOMS,
  CREATING_SYMPTOM,
  FETCHING_SYMPTOMS,
  FETCH_SYMPTOMS_SUCCESS,
  FETCH_SYMPTOMS_FAILURE,
  DELETE_SYMPTOMS_SUCCESS,
  CREATE_SYMPTOM_SUCCESS,
  CREATE_SYMPTOM_FAILURE,
  CREATE_SYMPTOM,
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

export function* fetchSymptoms() {
  yield put({
    type: FETCHING_SYMPTOMS,
  });
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token);
    const response = yield call(
      makeApiRequest,
      "/symptoms/all-symptoms/",
      config
    );
    yield put({
      type: FETCH_SYMPTOMS_SUCCESS,
      payload: response.symptoms,
    });
  } catch (error) {
    yield put({
      type: FETCH_SYMPTOMS_FAILURE,
    });
    toast.error(error.message);
  }
}

export function* deleteSymptom(action) {
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token, "DELETE");
    const response = yield call(
      makeApiRequest,
      `/symptoms/delete-symptoms/${action.payload}`,
      config
    );
    yield put({
      type: DELETE_SYMPTOMS_SUCCESS,
      payload: action.payload,
    });
    toast.success(response.message);
  } catch (error) {
    toast.error(error.message);
  }
}

export function* createSymptom(action) {
  yield put({
    type: CREATING_SYMPTOM,
  });

  try {
    const token = yield select(getUserToken);
    const config = getConfig(token, "POST");
    config["body"] = JSON.stringify(action.payload);
    const response = yield call(
      makeApiRequest,
      "/symptoms/add-symptom",
      config
    );
    yield put({
      type: CREATE_SYMPTOM_SUCCESS,
      payload: [...response.symptoms],
    });
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: CREATE_SYMPTOM_FAILURE,
    });
    toast.error(error.message);
  }
}

function* symptomsSagas() {
  yield takeEvery(FETCH_SYMPTOMS, fetchSymptoms);
  yield takeEvery(DELETE_SYMPTOMS, deleteSymptom);
  yield takeLatest(CREATE_SYMPTOM, createSymptom);
}

export default symptomsSagas;
