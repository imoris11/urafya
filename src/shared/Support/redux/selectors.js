import { createStructuredSelector, createSelector } from "reselect";
import { getUser } from "../../../Authenication/redux/selectors";
const supportGroups = (obj = {}) => obj.supportGroups;
const supportGroupsData = (obj = {}) => obj.data;

const getSupportGroupData = createSelector(supportGroups, supportGroupsData);

const isLoading = createSelector(supportGroups, (obj) => obj.isLoading);

const errorLoading = createSelector(supportGroups, (obj) => obj.errorLoading);

const group = createSelector(supportGroups, (obj) => obj.group)

const messages = createSelector(supportGroups, (obj) => obj.messages)

const fetchingMessages = createSelector(supportGroups, (obj) => obj.fetchingMessages)

const allGroups = createSelector(supportGroups, (obj) => obj.allGroups)

const selectors = createStructuredSelector({
  supportGroups: getSupportGroupData,
  isLoading,
  group,
  errorLoading,
  user: getUser,
  messages,
  fetchingMessages,
  allGroups
});

export default selectors;
