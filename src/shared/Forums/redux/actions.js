export const FETCHING_FORUMS = "FETCHING_FORUMS";
export const FETCHING_FORUMS_SUCCESS =
  "FETCHING_FORUMS_SUCCESS";
export const FETCHING_FORUMS_FAILURE =
  "FETCHING_FORUMS_FAILURE";
export const FETCH_FORUMS = "FETCH_FORUMS";
export const DELETE_FORUM = "DELETE_FORUM";
export const FORUM_DELETED = "FORUM_DELETED";
export const DELETE_FAILED = "DELETE_FAILED";
export const CREATE_POST = "CREATE_POST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";
export const CREATING_POST = "CREATING_POST";

export const fetchForums = () => ({
  type: FETCH_FORUMS,
});

export const deletePost = (id) => ({
  type: DELETE_FORUM,
  payload: id,
});

export const createPost = (payload) => ({
  type: CREATE_POST,
  payload,
});
