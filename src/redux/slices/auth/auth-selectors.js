const loggedStatus = (state) => state.auth.loggedStatus;

const getUsername = (state) => state.auth.user.name;

const isCurrentUser = (state) => state.auth.cuurrentUserStatus;

const authSelectors = {
  loggedStatus,
  getUsername,
  isCurrentUser,
};
export default authSelectors;
