export const FETCH_USERS = "FETCH_USERS";
export const FETCHING_USERS = "FETCHING_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";
export const CREATING_USER = "CREATING_USER";

export function fetchUsers() {
  return {
    type: FETCH_USERS,
  };
}

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const createUser = (payload) => ({
  type: CREATE_USER,
  payload,
});
