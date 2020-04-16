export const FETCH_GLOSSARY = "FETCH_GLOSSARY";
export const FETCHING_GLOSSARY = "FETCHING_GLOSSARY";
export const FETCH_GLOSSARY_SUCCESS = "FETCH_GLOSSARY_SUCCESS";
export const FETCH_GLOSSARY_FAILURE = "FETCH_GLOSSARY_FAILURE";
export const DELETE_WORD = "DELETE_WORD";
export const DELETE_WORD_SUCCESS = "DELETE_WORD_SUCCESS";
export const CREATE_WORD = "CREATE_WORD";
export const CREATE_WORD_SUCCESS = "CREATE_WORD_SUCCESS";
export const CREATE_WORD_FAILURE = "CREATE_WORD_FAILURE";
export const CREATING_WORD = "CREATING_WORD";
export const UPDATE_WORD = "UPDATE_WORD";
export const UPDATING_WORD = "UPDATING_WORD";
export const UPDATE_WORD_SUCCESS = "UPDATE_WORD_SUCCESS";
export const UPDATE_WORD_FAILURE = "UPDATE_WORD_FAILURE";

export function fetchGlossary() {
  return {
    type: FETCH_GLOSSARY,
  };
}

export const deleteWord = (id) => ({
  type: DELETE_WORD,
  payload: id,
});

export const createWord = (payload) => ({
  type: CREATE_WORD,
  payload,
});

export const updateWord = (payload) => ({
  type: UPDATE_WORD,
  payload,
});
