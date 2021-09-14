import { NavLink } from "react-router-dom";
import path from "../../routesPath";

import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to={path.registration}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to={path.login}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
