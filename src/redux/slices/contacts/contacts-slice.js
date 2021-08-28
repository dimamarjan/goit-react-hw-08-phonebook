import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "redux/slices/contacts/contacts-poperations";

const initialState = {
  contacts: { name: null, number: null },
  status: null,
  err: null,
  // token: null,
  // isLoggedIn: false,
  // isFetchingCurrentUser: false,
};

const contactsSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [contactsOperations.getContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = null;
      state.err = null;
    },
    [contactsOperations.getContacts.pending]: (state, _) => {
      state.status = "pending";
    },
    [contactsOperations.getContacts.rejected]: (state, _) => {
      state.status = null;
      state.err = "ERROR";
    },

    [contactsOperations.addContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.status = null;
      state.err = null;
    },
    [contactsOperations.addContact.pending]: (state, _) => {
      state.status = "pending";
    },
    [contactsOperations.addContact.rejected]: (state, _) => {
      state.status = null;
      state.err = "ERROR";
    },

    [contactsOperations.delContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
      state.status = null;
      state.err = null;
    },
    [contactsOperations.delContact.pending]: (state, _) => {
      state.status = "pending";
    },
    [contactsOperations.delContact.rejected]: (state, _) => {
      state.status = null;
      state.err = "ERROR";
    },
  },
});

export default contactsSlice.reducer;
