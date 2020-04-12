import { createSelector, createStructuredSelector } from "reselect";
const allUsers = (obj = {}) => obj.allUsers;
const users = (obj = {}) => obj.users;

const getUsers = createSelector(allUsers, users);

const fetchingUsers = createSelector(allUsers, (obj) => obj.fetchingUsers);

const errorFetchingUsers = createSelector(
  allUsers,
  (obj) => obj.errorFetchingUsers
);

const hasFetchedUsers = createSelector(allUsers, (obj) => obj.fetchedUsers);

const selectors = createStructuredSelector({
  users: getUsers,
  fetchingUsers,
  errorFetchingUsers,
  fetchedUsers: hasFetchedUsers,
});

export default selectors;
