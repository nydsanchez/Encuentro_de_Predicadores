import { useState } from "react";

import Persona from "./People";
import styles from "./form.module.css";

export default function Ticket() {
  const [showPersonaModal, setShowPersonaModal] = useState(false);

  // Función para abrir la modal de Persona
  const openPersonaModal = () => {
    setShowPersonaModal(true);
  };

  // Función para cerrar la modal de Persona
  const closePersonaModal = () => {
    setShowPersonaModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className={styles.grid_container}>
        <div className={styles.grid_container_text}>
          <h3>Registro de Tickets</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            placeat sequi recusandae est ducimus, adipisci nisi eveniet quo modi
            officia delectus debitis odit nostrum laudantium!
          </p>

          <form className={styles.formChurch} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="id_ticket">Número de ticket:</label>
              <input type="text" name="id_ticket" id="id_ticket" />
            </div>

            <div>
              <label htmlFor="state_ticket">Estado del Ticket:</label>
              <select name="state_ticket" id="state_ticket">
                <option value="">Seleccione una opción</option>
                <option value="reservado">Reservado</option>
                <option value="comprado">Comprado</option>
                <option value="utilizado">Utilizado</option>
              </select>
            </div>

            <div>
              <label htmlFor="person_id">Asignada a:</label>
              <select name="person_id" id="person_id">
                <option value="">Seleccione una opción</option>
                <option value="01">Reservado</option>
                <option value="02">Comprado</option>
                <option value="03">Utilizado</option>
              </select>
            </div>
            <div>
              <button onClick={openPersonaModal}>
                Agregar datos de una persona
              </button>
            </div>
            <div>
              <button className={styles.btn_form}>
                {" "}
                <i className="bi bi-floppy"></i>Guardar
              </button>
              <button className={styles.btn_form}>
                {" "}
                <i className="bi bi-x-lg"></i>cerrar
              </button>
            </div>
          </form>
          {showPersonaModal && (
            <div className={styles.modalMain}>
              <div className={styles.modalContent}>
                <Persona onClose={closePersonaModal} isModal={true} />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
