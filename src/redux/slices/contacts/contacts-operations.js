import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getContacts = createAsyncThunk("contacts/get", async () => {
  const { data } = await axios.get("/contacts");
  return data;
});

const addContact = createAsyncThunk("contacts/add", async (credentials) => {
  const { data } = await axios.post("/contacts", credentials);
  return data;
});

const delContact = createAsyncThunk("contacts/del", async (id) => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
});

const operations = {
  getContacts,
  addContact,
  delContact,
};
export default operations;
