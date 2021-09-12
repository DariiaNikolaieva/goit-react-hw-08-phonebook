import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

function signUp(credentials) {
  return axios.post("/users/signup", credentials);
}

function logIn(credentials) {
  return axios.post("/users/login", credentials);
}

function logOut() {
  return axios.post("/users/logout");
}

function getCurrentUser() {
  return axios.get("/users/current");
}

function getContacts() {
  return axios.get("/contacts");
}

function addContact(contact) {
  return axios.post("/contacts", contact);
}

function deleteContact(contactId) {
  return axios.delete(`/contacts/${contactId}`);
}

function editContact(contactId) {
  return axios.patch(`/contacts/${contactId}`);
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  token,
  signUp,
  logIn,
  logOut,
  getCurrentUser,
  getContacts,
  addContact,
  deleteContact,
  editContact,
};
