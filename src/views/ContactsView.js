import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";

const ContactsView = () => {
  return (
    <>
      <h1>My phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;
