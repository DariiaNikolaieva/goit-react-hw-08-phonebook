import { Component } from "react";
import { connect } from "react-redux";
import { registration } from "../../redux/auth/auth-operations";
import { Button } from "@material-ui/core";

import styles from "./Registration.module.css";

class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Registration</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter the name"
              onChange={this.handleChange}
            />
          </label>

          <label>
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter the email"
              onChange={this.handleChange}
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter the password"
              onChange={this.handleChange}
            />
          </label>
          <Button variant="contained" type="submit" color="primary">
            Registration
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: registration,
};

export default connect(null, mapDispatchToProps)(Registration);
