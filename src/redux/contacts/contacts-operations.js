import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contacts-actions";

import contactsApi from "../../services/contacts-api";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await contactsApi.fetchContacts();
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContact =
  ({ name, number }) =>
  async (dispatch) => {
    const contact = { name, number };
    dispatch(addContactRequest());

    try {
      const { data } = await contactsApi.addContact(contact);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error));
    }
  };

export const deleteContact = (contactId) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    await contactsApi.deleteContact(contactId);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
