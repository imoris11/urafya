import { createStructuredSelector, createSelector } from "reselect";
const forums = (obj = {}) => obj.forums;
const forumData = (obj = {}) => obj.data;

const getForumData = createSelector(forums, forumData);

const isLoading = createSelector(forums, (obj) => obj.isLoading);

const errorLoading = createSelector(forums, (obj) => obj.errorLoading);

const selectors = createStructuredSelector({
  forums: getForumData,
  isLoading,
  errorLoading,
});

export default selectors;
