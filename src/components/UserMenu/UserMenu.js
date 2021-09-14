import { connect } from "react-redux";
import { logOut } from "../../redux/auth/auth-operations";
import { getUserName } from "../../redux/auth/auth-selectors";
import { Button } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

import styles from "./UserMenu.module.css";

const UserMenu = ({ name, onLogOut }) => {
  return (
    <div>
      <Avatar alt={name} src="/broken-image.jpg" variant="rounded" />
      <span>Hello, {name}</span>
      <Button
        variant="contained"
        type="submit"
        color="primary"
        onClick={onLogOut}
      >
        Log Out
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: getUserName(state),
});

const mapDispatchToProps = {
  onLogOut: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
