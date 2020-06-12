import {
  FETCHING_CATEGORIES,
  FETCHING_CATEGORIES_SUCCESS,
  FETCHING_CATEGORIES_FAILURE,
  CATEGORY_DELETED,
  CREATING_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
  errorLoading: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_CATEGORIES_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        isLoading: false,
        errorLoading: false,
      };
    case FETCHING_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorLoading: true,
      };
    case CATEGORY_DELETED:
      return {
        ...state,
        data: state.data.filter((e) => e._id !== action.payload),
        deleteSuccessful: true,
      };
    case CREATING_CATEGORY:
      return {
        ...state,
        creatingCategory: true,
      };
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        creatingCategory: false,
      };
    case CREATE_CATEGORY_FAILURE:
      return {
        ...state,
        creatingCategory: false,
      };
    default:
      return state;
  }
};
