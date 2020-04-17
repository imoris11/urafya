export const FETCH_ABOUT = "FETCH_ABOUT";
export const FETCHING_ABOUT = "FETCHING_ABOUT";
export const FETCH_ABOUT_SUCCESS = "FETCH_ABOUT_SUCCESS";
export const FETCH_ABOUT_FAILURE = "FETCH_ABOUT_FAILURE";
export const CREATE_ABOUT = "CREATE_ABOUT";
export const CREATE_ABOUT_SUCCESS = "CREATE_ABOUT_SUCCESS";
export const CREATE_ABOUT_FAILURE = "CREATE_ABOUT_FAILURE";
export const CREATING_ABOUT = "CREATING_ABOUT";
export const UPDATE_ABOUT = "UPDATE_ABOUT";
export const UPDATING_ABOUT = "UPDATING_ABOUT";
export const UPDATE_ABOUT_SUCCESS = "UPDATE_ABOUT_SUCCESS";
export const UPDATE_ABOUT_FAILURE = "UPDATE_ABOUT_FAILURE";

export function fetchAbout() {
  return {
    type: FETCH_ABOUT,
  };
}

export const createAbout = (payload) => ({
  type: CREATE_ABOUT,
  payload,
});

export const updateAbout = (payload) => ({
  type: UPDATE_ABOUT,
  payload,
});
