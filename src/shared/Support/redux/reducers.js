import {
  FETCHING_SUPPORT_GROUPS,
  FETCHING_SUPPORT_GROUPS_SUCCESS,
  FETCHING_SUPPORT_GROUPS_FAILURE,
  SUPPORT_GROUP_DELETED,
  CREATING_SUPPORT_GROUP,
  CREATE_SUPPORT_GROUP_SUCCESS,
  CREATE_SUPPORT_GROUP_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
  errorLoading: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_SUPPORT_GROUPS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_SUPPORT_GROUPS_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        isLoading: false,
        errorLoading: false,
      };
    case FETCHING_SUPPORT_GROUPS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorLoading: true,
      };
    case SUPPORT_GROUP_DELETED:
      return {
        ...state,
        data: state.data.filter((e) => e._id !== action.payload),
        deleteSuccessful: true,
      };
    case CREATING_SUPPORT_GROUP:
      return {
        ...state,
        creatingPost: true,
      };
    case CREATE_SUPPORT_GROUP_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        creatingGroup: false,
      };
    case CREATE_SUPPORT_GROUP_FAILURE:
      return {
        ...state,
        creatingGroup: false,
      };
    default:
      return state;
  }
};
