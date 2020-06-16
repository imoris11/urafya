import { put, call, select, takeEvery, takeLatest } from "redux-saga/effects";
import makeApiRequest from "../../../utils";
import { toast } from "react-toastify";
import {
  FETCH_SUPPORT_GROUPS,
  FETCHING_SUPPORT_GROUPS_SUCCESS,
  FETCHING_SUPPORT_GROUPS,
  FETCHING_SUPPORT_GROUPS_FAILURE,
  DELETE_SUPPORT_GROUP,
  SUPPORT_GROUP_DELETED,
  CREATE_SUPPORT_GROUP,
  CREATING_SUPPORT_GROUP,
  CREATE_SUPPORT_GROUP_FAILURE,
} from "./actions";
import { getUserToken } from "../../../Authenication/redux/selectors";

function* fetchSupportGroups() {
  yield put({
    type: FETCHING_SUPPORT_GROUPS,
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
    const response = yield call(makeApiRequest, "/private-support-group/my-groups", config);
    yield put({
      type: FETCHING_SUPPORT_GROUPS_SUCCESS,
      payload: response.myGroups,
    });
  } catch (error) {
    yield put({
      type: FETCHING_SUPPORT_GROUPS_FAILURE,
    });
    toast.error("Error fetching forum posts, please try again later");
  }

}

function* deleteSupportGroup(action) {
  const config = {
    method: "SUPPORT_GROUP",
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
        type: SUPPORT_GROUP_DELETED,
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

export function* createSupportGroup(action) {
  yield put({
    type: CREATING_SUPPORT_GROUP,
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
      "/private-support-group/add-group",
      config
    );

    window.location.reload()
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: CREATE_SUPPORT_GROUP_FAILURE,
    });
    toast.error(error.message);
  }
}

function* supportGroupSagas() {
  yield takeEvery(FETCH_SUPPORT_GROUPS, fetchSupportGroups);
  yield takeEvery(DELETE_SUPPORT_GROUP, deleteSupportGroup);
  yield takeLatest(CREATE_SUPPORT_GROUP, createSupportGroup);
}

export default supportGroupSagas;
