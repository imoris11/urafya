import { takeEvery, put, call, select } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCHING_USERS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
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

export function* deleteUser(action) {
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token, "POST");
    const response = yield call(
      makeApiRequest,
      `/admin-profile/delete/${action.payload}`,
      config
    );
    if (response.statusCode === 200) {
      yield put({
        type: DELETE_USER_SUCCESS,
        payload: action.payload,
      });
      toast.success("User deleted successfully");
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error("Encountered an error, please try again.");
  }
}
function* usersSaga() {
  yield takeEvery(FETCH_USERS, fetchUsers);
  yield takeEvery(DELETE_USER, deleteUser);
}

export default usersSaga;
