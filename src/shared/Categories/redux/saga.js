import { put, call, select, takeEvery, takeLatest } from "redux-saga/effects";
import makeApiRequest from "../../../utils";
import { toast } from "react-toastify";
import {
  FETCH_CATEGORIES,
  FETCHING_CATEGORIES_SUCCESS,
  FETCHING_CATEGORIES,
  FETCHING_CATEGORIES_FAILURE,
  DELETE_CATEGORY,
  CATEGORY_DELETED,
  CREATE_CATEGORY,
  CREATING_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
} from "./actions";
import { getUserToken } from "../../../Authenication/redux/selectors";

function* fetchCategories() {
  yield put({
    type: FETCHING_CATEGORIES,
  });
  const response = yield call(makeApiRequest, "/forum/get-forum-categories");
  if (response.statusCode === 200) {
    yield put({
      type: FETCHING_CATEGORIES_SUCCESS,
      payload: response.categories,
    });
  } else {
    yield put({
      type: FETCHING_CATEGORIES_FAILURE,
    });
    toast.error("Error fetching emergency lines, please try again");
  }
}

function* deleteCategory(action) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = yield call(
      makeApiRequest,
      `/emergencies/delete-emergency/${ action.payload }`,
      config
    );
    if (response.statusCode === 200) {
      yield put({
        type: CATEGORY_DELETED,
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

export function* createCategory(action) {
  yield put({
    type: CREATING_CATEGORY,
  });

  try {
    const token = yield select(getUserToken);
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ token }`,
      },
      body: JSON.stringify(action.payload),
    };
    const response = yield call(
      makeApiRequest,
      "/forum/add-category",
      config
    );
    const payload = {
      ...action.payload,
      _id: Math.round(Math.random() * 100000),
    };
    yield put({
      type: CREATE_CATEGORY_SUCCESS,
      payload,
    });
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: CREATE_CATEGORY_FAILURE,
    });
    toast.error(error.message);
  }
}

function* categoriesSagas() {
  yield takeEvery(FETCH_CATEGORIES, fetchCategories);
  yield takeEvery(DELETE_CATEGORY, deleteCategory);
  yield takeLatest(CREATE_CATEGORY, createCategory);
}

export default categoriesSagas;
