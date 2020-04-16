import { createSelector, createStructuredSelector } from "reselect";
const glossary = (obj = {}) => obj.glossary;
const words = (obj = {}) => obj.data;

export const getWords = createSelector(glossary, words);

const isLoading = createSelector(glossary, (obj) => obj.isLoading);

const errorLoading = createSelector(glossary, (obj) => obj.errorLoading);

const selectors = createStructuredSelector({
  words: getWords,
  isLoading,
  errorLoading,
});

export default selectors;
