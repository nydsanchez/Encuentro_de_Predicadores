import PropTypes from "prop-types";

import styles from "./Buttons.module.css";
const Btn = ({ onClick, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={disabled ? styles.btn__disabled : styles.btn}
    >
      {children}
    </button>
  );
};

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Btn;
