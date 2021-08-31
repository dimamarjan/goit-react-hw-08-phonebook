import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "redux/slices/contacts/contacts-operations";

const initialState = {
  contacts: { name: null, number: null },
  status: "idle",
  err: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    clearContacts(state) {
      state.contacts.name = null;
      state.contacts.number = null;
    },
  },
  extraReducers: {
    [contactsOperations.getContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
      state.status = "fulfilled";
      state.err = null;
    },
    [contactsOperations.getContacts.pending]: (state) => {
      state.status = "pending";
    },
    [contactsOperations.getContacts.rejected]: (state) => {
      state.status = null;
      state.err = "ERROR";
    },

    [contactsOperations.addContact.fulfilled]: (state) => {
      state.status = "changed";
      state.err = null;
    },
    [contactsOperations.addContact.pending]: (state) => {
      state.status = "pending";
    },
    [contactsOperations.addContact.rejected]: (state) => {
      state.status = null;
      state.err = "ERROR";
    },

    [contactsOperations.delContact.fulfilled]: (state) => {
      state.status = "changed";
      state.err = null;
    },
    [contactsOperations.delContact.pending]: (state) => {
      state.status = "pending";
    },
    [contactsOperations.delContact.rejected]: (state) => {
      state.status = null;
      state.err = "ERROR";
    },
  },
});

export default contactsSlice.reducer;
