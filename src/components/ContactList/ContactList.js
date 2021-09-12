import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchContacts,
  deleteContact,
} from "../../redux/contacts/contacts-operations";
import {
  getFilteredContacts,
  getIsLoading,
} from "../../redux/contacts/contacts-selectors";

import styles from "./ContactList.module.css";

class ContactList extends Component {
  static propTypes = {
    contactList: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contactList, onDeleteContact, isLoadingContacts } = this.props;
    return (
      <>
        {isLoadingContacts && <h1>Loading..</h1>}
        <ul className={styles.list}>
          {contactList.map(({ id, name, number }) => (
            <li key={id} className={styles.item}>
              <p>{name}: </p>
              <p>{number}</p>
              <button
                type="button"
                className={styles.button}
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLaodingContacts: getIsLoading(state),
  contactList: getFilteredContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
