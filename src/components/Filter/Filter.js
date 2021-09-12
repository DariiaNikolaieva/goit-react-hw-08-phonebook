import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";

import styles from "./Filter.module.css";

const Filter = ({ filterValue, onFilter }) => {
  return (
    <form className={styles.form}>
      <label>
        Find contacts by name
        <input
          type="text"
          className={styles.input}
          value={filterValue}
          onChange={onFilter}
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  onFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filterValue: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilter: (ev) => dispatch(changeFilter(ev.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
