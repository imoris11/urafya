export const FETCH_TAXIS = "FETCH_TAXIS";
export const FETCH_TAXIS_SUCCESS = "FETCH_TAXIS_SUCCESS";
export const FETCH_TAXIS_FAILURE = "FETCH_TAXIS_FAILURE";
export const DELETE_TAXIS = "DELETTAXIS";
export const DELETE_TAXIS_SUCCESS = "DELETTAXIS_SUCCESS";
export const FETCHING_TAXIS = "FETCHING_TAXIS";

export const fetchTaxis = () => ({
  type: FETCH_TAXIS,
});

export const deleteTaxis = (id) => ({
  type: DELETE_TAXIS,
  payload: id,
});
