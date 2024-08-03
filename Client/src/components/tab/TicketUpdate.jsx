import { useState } from "react";
import { useSelector } from "react-redux";
//import styles from "./EditTicketModal.module.css";
import Search from "../search/Search";
import People from "../form/People";
//import PropTypes from "prop-types";

const TicketUpdate = ({ onClose, ticket }) => {
  const [step, setStep] = useState(1); // Para gestionar el paso actual

  const searchResults = useSelector((state) => state.search.ticket);
  const handlePersonSelect = () => {
    setStep(3); // Avanzar al paso de confirmación
  };
  const handleNewPersonCreated = () => {
    setStep(3); // Avanzar al paso de confirmación
  };
  const handleConfirmChange = () => {
    // Lógica para confirmar el cambio de asociación de ticket
    onClose();
  };
  return (
    <div className="open">
      <div className="modal-content">
        <h2>Editar Ticket</h2>
        {step === 1 && (
          <div>
            <Search entity="people" />
            <ul>
              {searchResults.map((person) => (
                <li key={person.id}>
                  {person.name}
                  <button onClick={() => handlePersonSelect()}>
                    Seleccionar
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={() => setStep(2)}>Nueva Persona</button>
          </div>
        )}
        {step === 2 && (
          <People
            onClose={() => setStep(1)} // Vuelve al paso de búsqueda si se cancela
            onNewPersonCreated={handleNewPersonCreated}
          />
        )}
        {step === 3 && (
          <div>
            <h3>Confirmar Cambio de Asociación</h3>
            <p>No. de ticket {ticket.id_ticket}</p>
            <button onClick={handleConfirmChange}>Confirmar Cambio</button>
            <button onClick={() => setStep(1)}>Volver</button>
          </div>
        )}
        <button onClick={onClose} className="close-button">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default TicketUpdate;

/* function TicketUpdate() {
  return (
    <div>
      <Search entity={"tickets"} />
    </div>
  );
} 

export default TicketUpdate;*/
