import PropTypes from "prop-types";

import styles from "./Smart.module.css";
import Btn from "../button/Buttons";

function ActivityOp({
  onNewClick,
  onViewClick,
  onPeopleTicketClick,
  isViewDisabled,
  isNewDisabled,
  isPeopleTicketDisabled,
}) {
  return (
    <div className={styles.band}>
      <div className={styles.crud}>
        <Btn onClick={onNewClick} disabled={isNewDisabled}>
          Registro de Persona
        </Btn>
        <Btn onClick={onViewClick} disabled={isViewDisabled}>
          Registro de Congregación
        </Btn>
        <Btn onClick={onViewClick} disabled={isViewDisabled}>
          Registro de Ticket
        </Btn>
        <Btn onClick={onPeopleTicketClick} disabled={isPeopleTicketDisabled}>
          Alta de Persona y ticket
        </Btn>
      </div>
    </div>
  );
}

ActivityOp.propTypes = {
  onNewClick: PropTypes.func.isRequired,
  onViewClick: PropTypes.func.isRequired,
  onPeopleTicketClick: PropTypes.func.isRequired,
  isNewDisabled: PropTypes.bool.isRequired,
  isViewDisabled: PropTypes.bool.isRequired,
  isPeopleTicketDisabled: PropTypes.bool.isRequired,
};
export default ActivityOp;
