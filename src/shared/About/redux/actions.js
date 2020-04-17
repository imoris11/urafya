export const FETCH_ABOUT = "FETCH_ABOUT";
export const FETCHING_ABOUT = "FETCHING_ABOUT";
export const FETCH_ABOUT_SUCCESS = "FETCH_ABOUT_SUCCESS";
export const FETCH_ABOUT_FAILURE = "FETCH_ABOUT_FAILURE";
export const UPDATE_ABOUT = "UPDATE_ABOUT";
export const UPDATING_ABOUT = "UPDATING_ABOUT";
export const UPDATE_ABOUT_SUCCESS = "UPDATE_ABOUT_SUCCESS";
export const UPDATE_ABOUT_FAILURE = "UPDATE_ABOUT_FAILURE";

export function fetchAbout() {
  return {
    type: FETCH_ABOUT,
  };
}
export const updateAbout = (payload) => ({
  type: UPDATE_ABOUT,
  payload,
});
