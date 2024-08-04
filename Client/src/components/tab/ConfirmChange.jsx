import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateData } from "../../redux/actions";
import styles from "./tab.module.css";

const ConfirmChange = ({ selectedPerson, ticket, onBack }) => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    if (selectedPerson && ticket && ticket.id_ticket) {
      // Prepara los nuevos datos para la actualización
      const newData = {
        person_id: selectedPerson.person_id,
        name: selectedPerson.name,
        state: selectedPerson.state,
        address: selectedPerson.address,
        phone: selectedPerson.phone,
        genre: selectedPerson.genre,
        ChurchId: selectedPerson.ChurchId,
        id_ticket: ticket.id_ticket,
        status_ticket: "utilizado", // Ajusta el estado según sea necesario
      };

      // Despacha la acción de actualización
      dispatch(updateData("ticketes", ticket.id_ticket, newData));
    }
  };

  return (
    <div className={styles.confirm_change}>
      <h3>Confirmar Cambio de Asociación</h3>
      {selectedPerson && ticket ? (
        <div>
          <p>Nombre: {selectedPerson.name}</p>
          <p>Cédula: {selectedPerson.person_id}</p>
          <p>Número de Ticket: {ticket.id_ticket}</p>
          <p>Estado del Ticket: {ticket.state_ticket}</p>
        </div>
      ) : (
        <p>No se ha seleccionado ninguna persona o ticket</p>
      )}
      <button onClick={handleConfirm}>Confirmar</button>
      <button onClick={onBack}>Volver</button>
    </div>
  );
};

ConfirmChange.propTypes = {
  selectedPerson: PropTypes.object.isRequired,
  ticket: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ConfirmChange;
