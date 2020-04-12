import { takeEvery, put, call, select } from "redux-saga/effects";
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
  header: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
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
  }
}

function* usersSaga() {
  yield takeEvery(FETCH_USERS, fetchUsers);
}

export default usersSaga;
