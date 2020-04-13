export const FETCH_TAXIS = "FETCH_TAXIS";
export const FETCH_TAXIS_SUCCESS = "FETCH_TAXIS_SUCCESS";
export const FETCH_TAXIS_FAILURE = "FETCH_TAXIS_FAILURE";
export const DELETE_TAXIS = "DELETE_TAXIS";
export const DELETE_TAXIS_SUCCESS = "DELETE_TAXIS_SUCCESS";
export const FETCHING_TAXIS = "FETCHING_TAXIS";
export const CREATE_TAXI = "CREATE_TAXI";
export const CREATE_TAXI_SUCCESS = "CREATE_TAXI_SUCCESS";
export const CREATE_TAXI_FAILURE = "CREATE_TAXI_FAILURE";
export const CREATING_TAXI = "CREATING_TAXI";

export const fetchTaxis = () => ({
  type: FETCH_TAXIS,
});

export const deleteTaxis = (id) => ({
  type: DELETE_TAXIS,
  payload: id,
});

export const createTaxi = (payload) => ({
  type: CREATE_TAXI,
  payload,
});
