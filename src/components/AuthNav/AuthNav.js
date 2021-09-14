import { NavLink } from "react-router-dom";
import path from "../../routesPath";

import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to={path.registration}
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to={path.login}
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
