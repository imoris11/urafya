import {
  FETCHING_FORUMS,
  FETCHING_FORUMS_SUCCESS,
  FETCHING_FORUMS_FAILURE,
  FORUM_DELETED,
  CREATING_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
  errorLoading: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_FORUMS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_FORUMS_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        isLoading: false,
        errorLoading: false,
      };
    case FETCHING_FORUMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorLoading: true,
      };
    case FORUM_DELETED:
      return {
        ...state,
        data: state.data.filter((e) => e._id !== action.payload),
        deleteSuccessful: true,
      };
    case CREATING_POST:
      return {
        ...state,
        creatingPost: true,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        creatingPost: false,
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        creatingPost: false,
      };
    default:
      return state;
  }
};
