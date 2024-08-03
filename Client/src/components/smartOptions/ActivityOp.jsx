import PropTypes from "prop-types";

import styles from "./Smart.module.css";
import Btn from "../button/Buttons";

function ActivityOp({
  // onPeopleClick,onTicketClick,
  onChurchClick,

  onPeopleTicketClick,

  isChurchDisabled,
  // isPeopleDisabled,
  // isTicketDisabled,
  isPeopleTicketDisabled,
}) {
  return (
    <div className={styles.band}>
      <div className={styles.crud}>
        {" "}
        <Btn onClick={onChurchClick} disabled={isChurchDisabled}>
          Registro de Congregación
        </Btn>
        <Btn onClick={onPeopleTicketClick} disabled={isPeopleTicketDisabled}>
          Alta de Persona y ticket
        </Btn>
        {/* <Btn onClick={onTicketClick} disabled={isTicketDisabled}>
          Registro de Ticket
        </Btn>
        
        <Btn onClick={onPeopleClick} disabled={isPeopleDisabled}>
          Registro de Persona
        </Btn> */}
      </div>
    </div>
  );
}

ActivityOp.propTypes = {
  onPeopleClick: PropTypes.func.isRequired,
  onChurchClick: PropTypes.func.isRequired,
  onTicketClick: PropTypes.func.isRequired,
  onPeopleTicketClick: PropTypes.func.isRequired,

  isPeopleDisabled: PropTypes.bool.isRequired,
  isChurchDisabled: PropTypes.bool.isRequired,
  isTicketDisabled: PropTypes.bool.isRequired,
  isPeopleTicketDisabled: PropTypes.bool.isRequired,
};
export default ActivityOp;
