import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContactsData = createAsyncThunk(
  "contacts/getContactList",
  async () => {
    const resp = await axios.get("http://localhost:3001/contacts");
    return resp.data;
  }
);

export const addContactData = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const resp = await axios.post("http://localhost:3001/contacts", contact);
    return resp.data;
  }
);

export const delContactData = createAsyncThunk(
  "contacts/delContact",
  async (id) => {
    await axios.delete(`http://localhost:3001/contacts/${id}`);
    return id;
  }
);

const itemsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    status: null,
    err: null,
  },
  extraReducers: {
    [getContactsData.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = null;
      state.err = null;
    },
    [getContactsData.pending]: (state, _) => {
      state.status = "pending";
    },
    [getContactsData.rejected]: (state, _) => {
      state.status = null;
      state.err = "ERROR";
    },

    [addContactData.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.status = null;
      state.err = null;
    },
    [addContactData.pending]: (state, _) => {
      state.status = "pending";
    },
    [addContactData.rejected]: (state, _) => {
      state.status = null;
      state.err = "ERROR";
    },

    [delContactData.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
      state.status = null;
      state.err = null;
    },
    [delContactData.pending]: (state, _) => {
      state.status = "pending";
    },
    [delContactData.rejected]: (state, _) => {
      state.status = null;
      state.err = "ERROR";
    },
  },
});

export default itemsSlice.reducer;
