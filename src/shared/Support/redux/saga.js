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
  FETCHING_SUPPORT_GROUP_SUCCESS,
  FETCHING_SUPPORT_GROUP,
  FETCHING_SUPPORT_GROUP_FAILURE,
  FETCH_SUPPORT_GROUP,
  FETCHING_MESSAGES,
  FETCHING_MESSAGES_SUCCESS,
  FETCHING_MESSAGES_FAILURE,
  FETCHING_ALL_GROUPS_SUCCESS,
  SUBSCRIBE_TO_GROUP
} from "./actions";
import { getUserToken } from "../../../Authenication/redux/selectors";

function* fetchSupportGroups() {
  yield put({
    type: FETCHING_SUPPORT_GROUPS,
  });

  yield call(fetchAllSupportGroups)

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
    toast.error("Error fetching support groups, please try again later");
  }

}

function* fetchAllSupportGroups() {
  try {
    const token = yield select(getUserToken);
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ token }`,
      },
    }
    const response = yield call(makeApiRequest, "/private-support-group/all-groups", config);
    yield put({
      type: FETCHING_ALL_GROUPS_SUCCESS,
      payload: response.allGroups,
    });
  } catch (error) {
    yield put({
      type: FETCHING_SUPPORT_GROUPS_FAILURE,
    });
    toast.error("Error fetching support groups, please try again later");
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

function* fetchSupportGroup(action) {
  yield put({
    type: FETCHING_SUPPORT_GROUP,
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
    const response = yield call(makeApiRequest, `/private-support-group/group-info/${ action.payload }`, config);
    yield put({
      type: FETCHING_SUPPORT_GROUP_SUCCESS,
      payload: response.group,
    });
  } catch (error) {
    yield put({
      type: FETCHING_SUPPORT_GROUP_FAILURE,
    });
    toast.error("Error fetching group info, please try again later");
  }
}

function* fetchMessages(action) {
  yield put({
    type: FETCHING_MESSAGES
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
    const response = yield call(makeApiRequest, `/private-support-group/chat-messages/${ action.payload }`, config);
    yield put({
      type: FETCHING_MESSAGES_SUCCESS,
      payload: response.chatMessages,
    });
  } catch (error) {
    yield put({
      type: FETCHING_MESSAGES_FAILURE,
    });
    toast.error("Error fetching messages");
  }
}

function* subscribeToGroup(action) {
  try {
    const token = yield select(getUserToken);
    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ token }`,
      },
    };

    const response = yield call(
      makeApiRequest,
      `/private-support-group/subscribe-to-group/${ action.payload }`,
      config
    );

    window.location.reload()
    toast.success(response.message);
  } catch (error) {
    toast.error(error.message);
  }
}

function* supportGroupSagas() {
  yield takeEvery(FETCH_SUPPORT_GROUPS, fetchSupportGroups);
  yield takeEvery(FETCH_SUPPORT_GROUP, fetchSupportGroup)
  yield takeEvery(DELETE_SUPPORT_GROUP, deleteSupportGroup);
  yield takeLatest(CREATE_SUPPORT_GROUP, createSupportGroup);
  yield takeEvery(FETCH_SUPPORT_GROUP, fetchMessages)
  yield takeEvery(SUBSCRIBE_TO_GROUP, subscribeToGroup)
}

export default supportGroupSagas;
