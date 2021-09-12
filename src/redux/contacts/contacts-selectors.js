import { createSelector } from "reselect";

export const getIsLoading = (state) => state.contacts.loading;
export const getAllContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normFilter)
    );
  }
);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
// export default { getIsLoading, getAllContacts, getFilter, getFilteredContacts };
