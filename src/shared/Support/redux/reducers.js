import {
  FETCHING_SUPPORT_GROUPS,
  FETCHING_SUPPORT_GROUPS_SUCCESS,
  FETCHING_SUPPORT_GROUPS_FAILURE,
  SUPPORT_GROUP_DELETED,
  CREATING_SUPPORT_GROUP,
  CREATE_SUPPORT_GROUP_SUCCESS,
  CREATE_SUPPORT_GROUP_FAILURE,
  FETCHING_SUPPORT_GROUP_SUCCESS,
  FETCHING_SUPPORT_GROUP,
  FETCHING_SUPPORT_GROUP_FAILURE,
  FETCHING_MESSAGES_FAILURE,
  FETCHING_MESSAGES_SUCCESS,
  FETCHING_MESSAGES,
  ADD_MESSAGE
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
  group: {},
  errorLoading: false,
  messages: [],
  fetchingMessages: false
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
    case FETCHING_SUPPORT_GROUP:
      return {
        ...state,
        isLoading: true
      }
    case FETCHING_SUPPORT_GROUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        group: { ...action.payload }
      }
    case FETCHING_SUPPORT_GROUP_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case FETCHING_MESSAGES:
      return {
        ...state,
        fetchingMessages: true
      }
    case FETCHING_MESSAGES_SUCCESS:
      return {
        ...state,
        fetchingMessages: false,
        messages: [...action.payload]
      }
    case ADD_MESSAGE:
      return {
        ...state,
        fetchingMessages: false,
        messages: [...state.messages, action.payload]
      }
    case FETCHING_MESSAGES_FAILURE:
      return {
        ...state,
        fetchingMessages: false
      }
    default:
      return state;
  }
};
