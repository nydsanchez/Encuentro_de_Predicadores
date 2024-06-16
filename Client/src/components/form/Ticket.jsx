import { useState } from "react";

import Persona from "./People";
import styles from "./form.module.css";
import SelectPeople from "../select/selectPeople";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addData } from "../../redux/actions";

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

  const [newData, setNewData] = useState({
    id_ticket: 0,
    state_ticket: "",
    personId: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.loading);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleSelectPersonChange = (id) => {
    setNewData({ ...newData, personId: id });
  };

  function delete_formData() {
    setNewData({
      id_ticket: 0,
      state_ticket: "",
      personId: "",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData("tickets", newData));
    delete_formData();
  };
  function handleClearData() {
    // showConfirmation();
    if (window.confirm("¿Estás seguro de que quieres cerrar el registro?")) {
      navigate("/home");
    }
  }

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
              <input
                type="text"
                name="id_ticket"
                id="id_ticket"
                value={newData.id_ticket}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="state_ticket">Estado del Ticket:</label>
              <select
                name="state_ticket"
                id="state_ticket"
                value={newData.state_ticket}
                onChange={handleChange}
              >
                <option value="">Seleccione una opción</option>
                <option value="reservado">Reservado</option>
                <option value="pagado">Pagado</option>
                <option value="utilizado">Utilizado</option>
              </select>
            </div>

            <div>
              <label htmlFor="personId">Asignada a:</label>
              <SelectPeople
                selectedPersonId={newData.personId}
                onChange={handleSelectPersonChange}
              />
            </div>
            <div>
              <button className={styles.modal_btn} onClick={openPersonaModal}>
                Agregar persona
              </button>
            </div>
            <div className={styles.formButton}>
              <button
                type="submit"
                className={styles.btn_form}
                disabled={loading}
              >
                <i className="bi bi-floppy"></i>Guardar
              </button>
              <button
                type="button"
                className={`${styles.btn_form} ${styles.btn_x}`}
                onClick={() => {
                  handleClearData();
                }}
                disabled={loading}
              >
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
