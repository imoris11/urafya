export const FETCH_GROCERIES = "FETCH_GROCERIES";
export const FETCH_GROCERIES_SUCCESS = "FETCH_GROCERIES_SUCCESS";
export const FETCH_GROCERIES_FAILURE = "FETCH_GROCERIES_FAILURE";
export const DELETE_GROCERY = "DELETE_GROCERY";
export const DELETE_GROCERY_SUCCESS = "DELETE_GROCERY_SUCCESS";
export const FETCHING_GROCERIES = "FETCHING_GROCERIES";
export const BAN_GROCERY = "BAN_GROCERY";
export const BAN_GROCERY_SUCCESS = "BAN_GROCERY_SUCCESS";
export const BAN_GROCERY_FAILURE = "BAN_GROCERY_FAILURE";

export const fetchGroceries = () => ({
  type: FETCH_GROCERIES,
});

export const deleteGrocery = (id) => ({
  type: DELETE_GROCERY,
  payload: id,
});

export const toggleBanGrocery = (id) => ({
  type: BAN_GROCERY,
  payload: id,
});
