import { Component } from "react";
import { connect } from "react-redux";

import { addContact } from "../../redux/contacts/contacts-operations";
import { getAllContacts } from "../../redux/contacts/contacts-selectors";

import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { contacts } = this.props;

    if (!this.state.name || !this.state.number) {
      alert("Enter the name!");
      return;
    }

    if (
      contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} already exists. Try another name`);
      return;
    }

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.labelTitle}>
          Name:
          <input
            type="text"
            name="name"
            className={styles.input}
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <label className={styles.labelTitle}>
          Phone:
          <input
            type="text"
            name="number"
            className={styles.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="The telephone number must contain numbers and may contain spaces, dashes, parentheses and may start with +"
            required
            value={number}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getAllContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
