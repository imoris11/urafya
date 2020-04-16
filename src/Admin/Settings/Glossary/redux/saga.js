import { takeEvery, put, call, select, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  FETCHING_GLOSSARY,
  FETCH_GLOSSARY_FAILURE,
  FETCH_GLOSSARY_SUCCESS,
  CREATE_WORD_FAILURE,
  CREATE_WORD_SUCCESS,
  CREATING_WORD,
  UPDATING_WORD,
  UPDATE_WORD_FAILURE,
  UPDATE_WORD_SUCCESS,
  DELETE_WORD_SUCCESS,
  FETCH_GLOSSARY,
  CREATE_WORD,
  UPDATE_WORD,
  DELETE_WORD,
} from "./actions";
import { getUserToken } from "../../../../Authenication/redux/selectors";
import makeApiRequest from "../../../../utils";
const getConfig = (token, method = "GET") => ({
  method,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
export function* fetchGlossary() {
  yield put({
    type: FETCHING_GLOSSARY,
  });
  //call API
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token);
    const response = yield makeApiRequest("/glossary/all-terms", config);
    yield put({
      type: FETCH_GLOSSARY_SUCCESS,
      payload: response.terms,
    });
  } catch (error) {
    yield put({
      type: FETCH_GLOSSARY_FAILURE,
    });
    toast.error(error.message);
  }
}

export function* deleteWord(action) {
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token, "DELETE");
    const response = yield call(
      makeApiRequest,
      `/glossary/delete-term/${action.payload}`,
      config
    );
    yield put({
      type: DELETE_WORD_SUCCESS,
      payload: action.payload,
    });
    toast.success(response.message);
  } catch (error) {
    toast.error(error.message);
  }
}

export function* createNewWord(action) {
  yield put({
    type: CREATING_WORD,
  });
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token, "POST");
    const response = yield call(makeApiRequest, "/glossary/add-term", config);
    const payload = {
      ...action.payload,
      _id: Math.round(Math.random() * 100000),
    };
    yield put({
      type: CREATE_WORD_SUCCESS,
      payload,
    });
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: CREATE_WORD_FAILURE,
    });
    toast.error(error.message);
  }
}

function* glossarySagas() {
  yield takeEvery(FETCH_GLOSSARY, fetchGlossary);
  yield takeEvery(DELETE_WORD, deleteWord);
  yield takeLatest(CREATE_WORD, createNewWord);
}

export default glossarySagas;
