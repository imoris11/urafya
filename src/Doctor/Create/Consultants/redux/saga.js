import { put, call, takeEvery, takeLatest, select } from "redux-saga/effects";
import {
  FETCH_CONSULTATIONS_FAILURE,
  FETCH_CONSULTATIONS_SUCCESS,
  FETCH_CONSULTATION_FAILURE,
  FETCH_CONSULTATION_SUCCESS,
  FETCHING_CONSULTATIONS,
  FETCH_CONSULTATIONS,
  FETCH_CONSULTATION,
  CREATE_EVALUATION,
  CREATING_EVALUATION,
  CREATE_EVALUATION_SUCCESS,
  CREATE_EVALUATION_FAILURE,
  CREATE_DIAGNOSIS,
  CREATING_DIAGNOSIS,
  CREATE_DIAGNOSIS_SUCCESS,
  CREATE_DIAGNOSIS_FAILURE,
  CREATE_PRESCRIPTION,
  CREATING_PRESCRIPTION,
  CREATE_PRESCRIPTION_SUCCESS,
  CREATE_PRESCRIPTION_FAILURE,
  CREATE_RECOMMENDATION,
  CREATING_RECOMMENDATION,
  CREATE_RECOMMENDATION_SUCCESS,
  CREATE_RECOMMENDATION_FAILURE,
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
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(data),
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

export function* createEvaluation(action) {
  yield put({
    type: CREATING_EVALUATION,
  });
  try {
    const token = yield select(getUserToken);
    const config = postConfig(token, action.payload.evaluation);
    const response = yield call(
      makeApiRequest,
      `/consultation/evaluation/${action.payload.id}`,
      config
    );
    yield put({
      type: CREATE_EVALUATION_SUCCESS,
      payload: action.payload.evaluation,
    });
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: CREATE_EVALUATION_FAILURE,
    });
    toast.error(error.message);
  }
}

export function* createDiagnosis(action) {
  yield put({
    type: CREATING_DIAGNOSIS,
  });
  try {
    const token = yield select(getUserToken);
    const config = postConfig(token, action.payload.diagnosis);
    const response = yield call(
      makeApiRequest,
      `/consultation/diagnosis/${action.payload.id}`,
      config
    );
    yield put({
      type: CREATE_DIAGNOSIS_SUCCESS,
      payload: action.payload.diagnosis,
    });
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: CREATE_DIAGNOSIS_FAILURE,
    });
    toast.error(error.message);
  }
}

export function* createPrescription(action) {
  yield put({
    type: CREATING_PRESCRIPTION,
  });
  try {
    const token = yield select(getUserToken);
    const config = postConfig(token, action.payload.prescription);
    const response = yield call(
      makeApiRequest,
      `/consultation/prescription/${action.payload.id}`,
      config
    );
    yield put({
      type: CREATE_PRESCRIPTION_SUCCESS,
      payload: action.payload.prescription,
    });
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: CREATE_PRESCRIPTION_FAILURE,
    });
    toast.error(error.message);
  }
}

export function* createRecommendation(action) {
  yield put({
    type: CREATING_RECOMMENDATION,
  });
  try {
    const token = yield select(getUserToken);
    const config = postConfig(token, action.payload.recommendation);
    const response = yield call(
      makeApiRequest,
      `/consultation/recommendation/${action.payload.id}`,
      config
    );
    yield put({
      type: CREATE_RECOMMENDATION_SUCCESS,
      payload: action.payload.recommendation,
    });
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: CREATE_RECOMMENDATION_FAILURE,
    });
    toast.error(error.message);
  }
}

function* consultationsSagas() {
  yield takeEvery(FETCH_CONSULTATIONS, fetchConsultations);
  yield takeLatest(FETCH_CONSULTATION, fetchConsultation);
  yield takeEvery(CREATE_EVALUATION, createEvaluation);
  yield takeLatest(CREATE_DIAGNOSIS, createDiagnosis);
  yield takeLatest(CREATE_PRESCRIPTION, createPrescription);
  yield takeLatest(CREATE_RECOMMENDATION, createRecommendation);
}

export default consultationsSagas;
