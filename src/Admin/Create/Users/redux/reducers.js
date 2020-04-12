import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCHING_USERS,
  DELETE_USER_SUCCESS,
} from "./actions";

const initialState = {
  users: [],
  fetchingUsers: false,
  fetchedUsers: false,
  errorFetchingUsers: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_USERS:
      return {
        ...state,
        fetchingUsers: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetchingUsers: false,
        fetchedUsers: true,
        users: [...action.payload],
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        errorFetchingUsers: true,
        fetchingUsers: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
