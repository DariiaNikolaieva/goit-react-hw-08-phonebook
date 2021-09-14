import { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../redux/auth/auth-operations";
import { Button } from "@material-ui/core";

import styles from "./LogIn.module.css";

class LogInView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Enter your login</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <Button variant="contained" type="submit" color="primary">
            Log in
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LogInView);
