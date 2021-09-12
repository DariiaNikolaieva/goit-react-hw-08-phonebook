import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

function fetchContacts() {
  return axios.get("/contacts");
}

function addContact(contact) {
  return axios.post("/contacts", contact);
}

function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { fetchContacts, addContact, deleteContact };
