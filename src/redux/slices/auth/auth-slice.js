import { createSlice } from "@reduxjs/toolkit";
import authOperations from "redux/slices/auth/auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  loggedStatus: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loggedStatus = true;
    },
    [authOperations.register.rejected]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.loggedStatus = false;
    },

    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loggedStatus = true;
    },
    [authOperations.logIn.rejected]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.loggedStatus = false;
    },

    [authOperations.logOut.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.loggedStatus = false;
    },

    [authOperations.fetchCurrentUser.pending]: (state, _) => {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loggedStatus = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected]: (state, _) => {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
