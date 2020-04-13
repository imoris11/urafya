import { takeEvery, put, call, select, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCHING_USERS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  CREATE_USER,
  CREATING_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
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
export function* fetchUsers() {
  yield put({
    type: FETCHING_USERS,
  });
  //call API
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token);
    const response = yield makeApiRequest(
      "/admin-profile/get-all-users",
      config
    );
    yield put({
      type: FETCH_USERS_SUCCESS,
      payload: response.users,
    });
  } catch (error) {
    yield put({
      type: FETCH_USERS_FAILURE,
    });
    toast.error(error.message);
  }
}

export function* deleteUser(action) {
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token, "POST");
    const response = yield call(
      makeApiRequest,
      `/admin-profile/delete/${action.payload}`,
      config
    );
    yield put({
      type: DELETE_USER_SUCCESS,
      payload: action.payload,
    });
    toast.success("User deleted successfully");
  } catch (error) {
    toast.error(error);
  }
}

export function* createNewUser(action) {
  yield put({
    type: CREATING_USER,
  });
  try {
    const token = yield select(getUserToken);
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: action.payload,
    };
    const response = yield call(
      makeApiRequest,
      "/admin-profile/add-user",
      config
    );

    yield put({
      type: CREATE_USER_SUCCESS,
      payload: action.payload,
    });
    toast.success("Successfully created user");
  } catch (error) {
    yield put({
      type: CREATE_USER_FAILURE,
    });
    toast.error(error.message);
  }
}

function* usersSaga() {
  yield takeEvery(FETCH_USERS, fetchUsers);
  yield takeEvery(DELETE_USER, deleteUser);
  yield takeLatest(CREATE_USER, createNewUser);
}

export default usersSaga;
