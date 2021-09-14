import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import path from "../../routesPath";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";

import styles from "./Navigation.module.css";

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink
        to={path.home}
        exact
        // className={styles.link}
        // activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to={path.contacts}
          exact
          // className={styles.link}
          // activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(Navigation);
