export const FETCHING_CATEGORIES = "FETCHING_CATEGORIES";
export const FETCHING_CATEGORIES_SUCCESS =
  "FETCHING_CATEGORIES_SUCCESS";
export const FETCHING_CATEGORIES_FAILURE =
  "FETCHING_CATEGORIES_FAILURE";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const CATEGORY_DELETED = "CATEGORY_DELETED";
export const DELETE_FAILED = "DELETE_FAILED";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const CREATE_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS";
export const CREATE_CATEGORY_FAILURE = "CREATE_CATEGORY_FAILURE";
export const CREATING_CATEGORY = "CREATING_CATEGORY";

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const deleteCategory = (id) => ({
  type: DELETE_CATEGORY,
  payload: id,
});

export const createCategory = (payload) => ({
  type: CREATE_CATEGORY,
  payload,
});
