import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecord, retrieveData } from "../../redux/actions";

import PropTypes from "prop-types";

import MaskedInput from "react-text-mask";
import SelectChurch from "../select/selectChurch";
import validation from "../../js/validationPeopleForm";
import styles from "./form.module.css";

export default function PeopleTicket({ onClose }) {
  const dispatch = useDispatch();

  const ERROR = useSelector((state) => state.error);

  const [newData, setNewData] = useState({
    person_id: "",
    name: "",
    state: "",
    address: "",
    phone: "",
    genre: "",
    ChurchId: "",
    id_ticket: 0,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  //const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(retrieveData("churches"));
  }, [dispatch]);

  useEffect(() => {
    if (isSubmitted) {
      alert(
        ERROR ? `Error: ${ERROR}` : "Congregación registrada exitosamente!"
      );
      setIsSubmitted(false);
    }
  }, [ERROR, isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convert the last character to uppercase if it is a letter
    if (name === "person_id" && value.length === 17) {
      const lastChar = value.charAt(16).toUpperCase();
      const newValue = value.slice(0, 16) + lastChar;
      setNewData({ ...newData, [name]: newValue });
      setErrors(validation({ ...newData, [name]: newValue }));
    } else {
      setNewData({ ...newData, [name]: value });
      setErrors(validation({ ...newData, [name]: value }));
    }
  };

  const handleSelectChurchChange = (id) => {
    setNewData({ ...newData, ChurchId: id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation(newData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(createRecord("person-ticket", newData));
      setIsSubmitted(true);

      handleClean();
    }
  };

  function handleClean() {
    setNewData({
      person_id: "",
      name: "",
      state: "",
      address: "",
      phone: "",
      genre: "",
      ChurchId: "",
      id_ticket: 0,
    });
    setErrors({});
  }

  return (
    <div className={styles.form}>
      <h2>Registro de Personas</h2>
      <button onClick={onClose}>X</button>
      <form onSubmit={handleSubmit}>
        <div className={styles.section}>
          <div className={styles.section_divImpar}>
            <label htmlFor="person_id">Número de cedula:</label>
            <MaskedInput
              mask={[
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /[A-Za-z]/,
              ]}
              guide={false}
              value={newData.person_id}
              onChange={handleChange}
              name="person_id"
              id="person_id"
              placeholder="123-456789-0123A"
            />
          </div>

          <div className={styles.section_divPar}>
            <label htmlFor="name">Nombre Completo:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={newData.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.section_divImpar}>
            <label htmlFor="state">Departamento:</label>
            <select
              name="state"
              id="state"
              value={newData.state}
              onChange={handleChange}
            >
              <option value="">Seleccione una opción</option>
              <option value="Boaco">Boaco</option>
              <option value="Carazo">Carazo</option>
              <option value="Chinandega">Chinandega</option>
              <option value="Chontales">Chontales</option>
              <option value="Esteli">Estelí</option>
              <option value="Granada">Granada</option>
              <option value="Jinotega">Jinotega</option>
              <option value="Leon">León</option>
              <option value="Madriz">Madriz</option>
              <option value="Managua">Managua</option>
              <option value="Masaya">Masaya</option>
              <option value="Matagalpa">Matagalpa</option>
              <option value="Nueva Segovia">Nueva Segovia</option>
              <option value="Rivas">Rivas</option>
              <option value="Rio San Juan">Río San Juan</option>
              <option value="RACCN">Región Autonoma del Caribe Norte</option>
              <option value="RACCS">Región Autonoma del Caribe Sur</option>
            </select>
          </div>
          <div className={styles.section_divPar}>
            <label htmlFor="address">Dirección:</label>
            <input
              type="text"
              name="address"
              id="address"
              value={newData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.section_divImpar}>
            <label htmlFor="phone">No. Teléfono/celular:</label>

            <MaskedInput
              mask={[
                "(",
                /\d/,
                /\d/,
                /\d/,
                ")",
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              guide={false}
              value={newData.phone}
              onChange={handleChange}
              name="phone"
              id="phone"
              placeholder="(505)-9999-9999"
            />
          </div>
          <div className={styles.section_divPar}>
            <label htmlFor="genre">Género:</label>
            <select
              name="genre"
              id="genre"
              value={newData.genre}
              onChange={handleChange}
            >
              <option value="">Seleccione una opción</option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
            </select>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.section_divImpar}>
            <label htmlFor="ChurchId">Congregación:</label>
            <SelectChurch
              selectedChurchId={newData.ChurchId}
              onChange={handleSelectChurchChange}
            />
          </div>

          <div className={styles.section_divPar}>
            <label htmlFor="id_ticket">Número de ticket:</label>
            <input
              type="number"
              name="id_ticket"
              id="id_ticket"
              value={newData.id_ticket}
              onChange={handleChange}
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
PeopleTicket.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose debe ser una función y es requerida
};
