export const FETCH_USERS = "FETCH_USERS";
export const FETCHING_USERS = "FETCHING_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export function fetchUsers() {
  return {
    type: FETCH_USERS,
  };
}
