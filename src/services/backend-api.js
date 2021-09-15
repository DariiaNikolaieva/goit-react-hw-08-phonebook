import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export function signUp(credentials) {
  return axios.post("/users/signup", credentials);
}

export function logIn(credentials) {
  return axios.post("/users/login", credentials);
}

export function logOut() {
  return axios.post("/users/logout");
}

export function getCurrentUser() {
  return axios.get("/users/current");
}

export function getContacts() {
  return axios.get("/contacts");
}

export function addContact(contact) {
  return axios.post("/contacts", contact);
}

export function deleteContact(contactId) {
  return axios.delete(`/contacts/${contactId}`);
}

export function editContact(contactId) {
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
