import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'http://connections-api.herokuapp.com';

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     },
//     unset() {
//         axios.defaults.headers.common.Authorization = '';
//     },
// };

const getContacts = createAsyncThunk("contacts/get", async (credentials) => {
  try {
    const { data } = await axios.get("/contacts", credentials);
    // token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const addContact = createAsyncThunk("contacts/add", async (credentials) => {
  try {
    const { data } = await axios.post("/contacts", credentials);
    // token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const delContact = createAsyncThunk("contacts/add", async (credentials, id) => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`, credentials);
    // token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const operations = {
  getContacts,
  addContact,
  delContact,
};
export default operations;
