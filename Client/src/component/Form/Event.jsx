import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../redux/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import validation from "../js/validation_form";
import styles from "./form.module.css";

export default function Event() {
  const [eventData, setEventData] = useState({
    name: "",
    event_type: "",
    start_date: null,
    end_date: null,
    tickets: 0,
    description: "",
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });

    const updatedErrors = validation({ ...eventData, [name]: value });
    setErrors(updatedErrors);
  };

  const handleDateChange = (date, field) => {
    setEventData({ ...eventData, [field]: date });
    const updatedErrors = validation({ ...eventData, [field]: date });
    setErrors(updatedErrors);
  };
  function delete_formData() {
    setEventData({
      name: "",
      event_type: "",
      start_date: null,
      end_date: null,
      tickets: 0,
      description: "",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof eventData);
    dispatch(addEvent(eventData));
    delete_formData();
  };

  function handleChangeOnClick() {
    delete_formData();
  }

  const showAlert = (message) => {
    alert(message);
  };

  return (
    <main className={styles.container}>
      <div className={styles.boxTitle}>
        <h2 className={styles.subtitle}>Eventos</h2>
      </div>
      <form className={styles.formChurch} onSubmit={handleSubmit}>
        <h3>Registro de Eventos</h3>
        <div className={styles.miembros_info_personal}>
          <label htmlFor="name">Nombre del evento</label>
          <input
            type="text"
            name="name"
            id="name"
            value={eventData.name}
            onChange={handleChange}
          />

          {errors.e1 ? (
            <p className={styles.error_msg}>{errors.e1}</p>
          ) : (
            <p>&nbsp;</p>
          )}

          <label className={styles.mg_top} htmlFor="event_type">
            Tipo de evento:
          </label>

          <select
            name="event_type"
            id="event_type"
            value={eventData.event_type}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="Conferencia">Conferencia</option>
            <option value="Capacitación">Capacitación</option>
            <option value="Retiro">Retiro</option>
            <option value="Culto Unido">Culto Unido</option>
            <option value="Taller">Estelí</option>
            <option value="Confraternidad">Confraternidad</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.e2 ? (
            <p className={styles.error_msg}>{errors.e2}</p>
          ) : (
            <p>&nbsp;</p>
          )}
        </div>

        <div className={styles.formDate}>
          <div>
            <label htmlFor="start_date">Fecha de inicio:</label>
            <DatePicker
              selected={eventData.start_date}
              onChange={(date) => handleDateChange(date, "start_date")}
              dateFormat="dd/MM/yyyy"
            />
            {errors.e3 && <p className={styles.error_msg}>{errors.e3}</p>}
          </div>
          <div>
            <label htmlFor="end_date">Fecha de finalización:</label>
            <DatePicker
              selected={eventData.end_date}
              onChange={(date) => handleDateChange(date, "end_date")}
              dateFormat="dd/MM/yyyy"
            />
            {errors.e4 && <p className={styles.error_msg}>{errors.e4}</p>}
          </div>

          <div>
            <label htmlFor="tickets">No. Cupos para el evento:</label>
            <input
              type="number"
              name="tickets"
              id="tickets"
              value={eventData.tickets}
              onChange={handleChange}
            />
          </div>
          <div className={styles.miembros_info_personal}>
            <label htmlFor="description">Descripción del evento:</label>
            <textarea
              name="description"
              id="description"
              cols="74"
              rows="5"
              value={eventData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.btn_form}>Registrar</button>
          <button className={styles.btn_form} onClick={handleChangeOnClick}>
            Limpiar datos
          </button>
        </div>
      </form>

      {error && showAlert(error)}
    </main>
  );
}
