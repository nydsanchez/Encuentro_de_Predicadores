import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecord } from "../../redux/actions";

import SelectPeople from "../select/selectPeople";
import styles from "./form.module.css";

export default function Ticket({ onClose }) {
  const dispatch = useDispatch();
  const ERROR = useSelector((state) => state.error);

  const [newData, setNewData] = useState({
    id_ticket: 0,
    personId: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      alert(ERROR ? `Error: ${ERROR}` : "Ticket registrado exitosamente!");
      setIsSubmitted(false);
    }
  }, [ERROR, isSubmitted]);

  // Función para abrir la modal de Persona

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleSelectPersonChange = (id) => {
    setNewData({ ...newData, personId: id });
    setErrors(validation({ ...newData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(newData);
    setErrors(validationErrors);
    dispatch(createRecord("ticket", newData));
    setIsSubmitted(true);
    handleClean();
  };

  function handleClean() {
    setNewData({
      id_ticket: 0,
      personId: "",
    });
    setErrors({});
  }

  return (
    <div className={`${styles.form} ${styles.form__ticket}`}>
      <h2>Registro de Tickets</h2>
      <button onClick={onClose}>X</button>
      <form onSubmit={handleSubmit}>
        <div className={styles.section}>
          <div>
            <label htmlFor="id_ticket">Número de ticket:</label>
            <input
              type="number"
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
        </div>

        <div className={styles.section_buttons}>
          <button type="submit" className={styles.button_main}>
            Guardar
          </button>
          <button
            type="button"
            className={styles.button_sec}
            onClick={handleClean}
          >
            Borrar
          </button>
        </div>
      </form>
    </div>
  );
}
