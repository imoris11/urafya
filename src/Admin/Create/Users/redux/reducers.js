import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCHING_USERS,
  DELETE_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  CREATING_USER,
  CREATE_USER_FAILURE,
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
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        creatingUser: false,
        userHasBeenCreated: true,
      };
    case CREATING_USER:
      return {
        ...state,
        creatingUser: true,
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        creatingUser: false,
      };
    default:
      return state;
  }
};
