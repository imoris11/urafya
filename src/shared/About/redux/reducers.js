import {
  FETCHING_ABOUT,
  FETCH_ABOUT_SUCCESS,
  FETCH_ABOUT_FAILURE,
  CREATE_ABOUT_SUCCESS,
  CREATING_ABOUT,
  CREATE_ABOUT_FAILURE,
  UPDATING_ABOUT,
  UPDATE_ABOUT_FAILURE,
  UPDATE_ABOUT_SUCCESS,
} from "./actions";

const initialState = {
  about: {},
  isLoading: false,
  errorLoading: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_ABOUT:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ABOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        about: { ...action.payload },
      };
    case FETCH_ABOUT_FAILURE:
      return {
        ...state,
        errorLoading: true,
        isLoading: false,
      };
    case CREATE_ABOUT_SUCCESS:
      return {
        ...state,
        creatingAbout: false,
        data: { ...action.payload },
      };
    case CREATING_ABOUT:
      return {
        ...state,
        creatingAbout: true,
      };
    case CREATE_ABOUT_FAILURE:
      return {
        ...state,
        creatingAbout: false,
      };
    case UPDATING_ABOUT:
      return {
        ...state,
        updatingAbout: true,
      };
    case UPDATE_ABOUT_FAILURE:
      return {
        ...state,
        updatingAbout: false,
      };
    case UPDATE_ABOUT_SUCCESS:
      return {
        ...state,
        updatingAbout: false,
        about: { ...action.payload },
      };
    default:
      return state;
  }
};
