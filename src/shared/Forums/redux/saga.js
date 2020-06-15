import { put, call, select, takeEvery, takeLatest } from "redux-saga/effects";
import makeApiRequest from "../../../utils";
import { toast } from "react-toastify";
import {
  FETCH_FORUMS,
  FETCHING_FORUMS_SUCCESS,
  FETCHING_FORUMS,
  FETCHING_FORUMS_FAILURE,
  DELETE_FORUM,
  FORUM_DELETED,
  CREATE_POST,
  CREATING_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "./actions";
import { getUserToken } from "../../../Authenication/redux/selectors";

function* fetchForums() {
  yield put({
    type: FETCHING_FORUMS,
  });
  try {
    const token = yield select(getUserToken);
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ token }`,
      },
    }
    const response = yield call(makeApiRequest, "/forum/all-posts", config);
    yield put({
      type: FETCHING_FORUMS_SUCCESS,
      payload: response.post,
    });
  } catch (error) {
    yield put({
      type: FETCHING_FORUMS_FAILURE,
    });
    toast.error("Error fetching forum posts, please try again later");
  }

}

function* deletePost(action) {
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
        type: FORUM_DELETED,
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

export function* createPost(action) {
  yield put({
    type: CREATING_POST,
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
      "/forum/add-post",
      config
    );
    const payload = {
      ...action.payload,
      _id: Math.round(Math.random() * 100000),
    };
    // yield put({
    //   type: CREATE_POST_SUCCESS,
    //   payload,
    // });
    window.location.reload()
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: CREATE_POST_FAILURE,
    });
    toast.error(error.message);
  }
}

function* forumsSagas() {
  yield takeEvery(FETCH_FORUMS, fetchForums);
  yield takeEvery(DELETE_FORUM, deletePost);
  yield takeLatest(CREATE_POST, createPost);
}

export default forumsSagas;
