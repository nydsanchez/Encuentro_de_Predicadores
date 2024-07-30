import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecord } from "../../redux/actions";

import SelectPeople from "../select/selectPeople";
import Persona from "./People";
import styles from "./form.module.css";

export default function Ticket() {
  const dispatch = useDispatch();
  const ERROR = useSelector((state) => state.error);

  const [newData, setNewData] = useState({
    id_ticket: 0,
    personId: "",
  });

  const [showPersonaModal, setShowPersonaModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      alert(
        ERROR ? `Error: ${ERROR}` : "Congregación registrada exitosamente!"
      );
      setIsSubmitted(false);
    }
  }, [ERROR, isSubmitted]);

  // Función para abrir la modal de Persona
  const openPersonaModal = () => {
    setShowPersonaModal(true);
  };

  // Función para cerrar la modal de Persona
  const closePersonaModal = () => {
    setShowPersonaModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value.toUppercase() });
  };

  const handleSelectPersonChange = (id) => {
    setNewData({ ...newData, personId: id });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createRecord("tickets", newData));
    setIsSubmitted(true);
    handleClean();
  };

  function handleClean() {
    setNewData({
      id_ticket: 0,
      personId: "",
    });
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
              <button type="submit" className={styles.btn_form}>
                <i className="bi bi-floppy"></i>Guardar
              </button>
              <button
                type="button"
                className={`${styles.btn_form} ${styles.btn_x}`}
                onClick={() => {
                  handleClean();
                }}
              >
                <i className="bi bi-x-lg"></i>borrar datos
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
