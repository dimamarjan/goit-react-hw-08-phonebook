const loggedStatus = (state) => state.auth.loggedStatus;

// const getUsername = state => state.auth.user.name;

// const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  loggedStatus,
  // getUsername,
  // getIsFetchingCurrent,
};
export default authSelectors;
