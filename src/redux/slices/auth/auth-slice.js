import { createSlice } from "@reduxjs/toolkit";
import authOperations from "redux/slices/auth/auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  loggedStatus: "idle",
  cuurrentUserStatus: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loggedStatus = "loaded";
      state.cuurrentUserStatus = "loaded";
    },
    [authOperations.register.pending]: (state, _) => {
      state.loggedStatus = "pending";
    },
    [authOperations.register.rejected]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.loggedStatus = "rejected";
      state.cuurrentUserStatus = "rejected";
    },

    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loggedStatus = "loaded";
      state.cuurrentUserStatus = "loaded";
    },
    [authOperations.logIn.pending]: (state, _) => {
      state.loggedStatus = "pending";
    },
    [authOperations.logIn.rejected]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.loggedStatus = "rejected";
    },

    [authOperations.logOut.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.loggedStatus = "idle";
      state.cuurrentUserStatus = "loggedOut";
    },

    [authOperations.getCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loggedStatus = "loaded";
      state.cuurrentUserStatus = "loaded";
    },
    [authOperations.getCurrentUser.pending]: (state, _) => {
      state.cuurrentUserStatus = "pending";
    },
    [authOperations.getCurrentUser.rejected]: (state, _) => {
      state.cuurrentUserStatus = "rejected";
    },
  },
});

export default authSlice.reducer;
