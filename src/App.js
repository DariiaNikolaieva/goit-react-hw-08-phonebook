import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";

import { getCurrentUser } from "./redux/auth/auth-operations";
import path from "./routesPath";

import Container from "./components/Container/Container";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AppBar from "./components/AppBar/AppBar";

import "./styles.css";

const HomePage = lazy(() =>
  import("./views/HomeView.js" /*webpackChunkName: 'home' */)
);
const Registration = lazy(() =>
  import("./views/RegistrationView.js" /*webpackChunkName: 'registration' */)
);
const LogIn = lazy(() =>
  import("./views/LogInView.js" /*webpackChunkName: 'logIn' */)
);

const Contacts = lazy(() =>
  import("./views/ContactsView.js" /*webpackChunkName: 'contacts' */)
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <div>
          <AppBar />
          <Container>
            <Suspense fallback={<h1>Loading..</h1>}>
              <Switch>
                <PublicRoute exact path={path.home} component={HomePage} />
                <PrivateRoute
                  path={path.contacts}
                  redirectTo={path.login}
                  component={Contacts}
                />
                <PublicRoute
                  path={path.login}
                  restricted
                  redirectTo={path.contacts}
                  component={LogIn}
                />
                <PublicRoute
                  path={path.registration}
                  restricted
                  redirectTo={path.contacts}
                  component={Registration}
                />
              </Switch>
            </Suspense>
          </Container>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
