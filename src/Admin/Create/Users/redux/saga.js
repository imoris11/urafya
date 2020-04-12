import { takeEvery, put, call, select } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCHING_USERS,
} from "./actions";
import { getUserToken } from "../../../../Authenication/redux/selectors";
import makeApiRequest from "../../../../utils";
const getConfig = (token) => ({
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJhYm9sdXdhZGUub2x1d2FzZWd1bkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1ZGE0ZTY0NjMxM2U5NjAwMTc4YTE0N2EiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaW1hZ2VVcmkiOiJodHRwczovL3BpY3N1bS5waG90b3MxMDAvaWQvMjAwLzEwMC8iLCJpYXQiOjE1ODY3MDM4NTcsImV4cCI6MTU4NjcwNzQ1N30.FDpHS1kZW8OIxXS1KAAr-2uZeWA-PjPFMwuiU989XH4",
  },
});
export function* fetchUsers() {
  yield put({
    type: FETCHING_USERS,
  });
  //call API
  const token = yield select(getUserToken);
  const config = getConfig(token);
  const response = yield makeApiRequest("/admin-profile/get-all-users", config);
  if (response.statusCode === 200) {
    yield put({
      type: FETCH_USERS_SUCCESS,
      payload: response.users,
    });
  } else {
    yield put({
      type: FETCH_USERS_FAILURE,
    });
    toast.error("Error fetching users, please try again.");
  }
}

function* usersSaga() {
  yield takeEvery(FETCH_USERS, fetchUsers);
}

export default usersSaga;
