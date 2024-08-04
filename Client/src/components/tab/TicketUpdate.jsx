import styles from "../../css/consulta.module.css";
import Steps from "./Steps";
import PropTypes from "prop-types";

function TicketUpdate({ onClose, ticket }) {
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_container}>
        <h2>Editar Ticket</h2>
        <Steps onClose={onClose} ticket={ticket} />
      </div>
    </div>
  );
}

TicketUpdate.propTypes = {
  onClose: PropTypes.func.isRequired,
  ticket: PropTypes.array.isRequired, // Asegúrate de que el tipo sea correcto
};

export default TicketUpdate;
