import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecord } from "../../redux/actions";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import validation from "../../js/validationChurchForm";
import styles from "./form.module.css";

export default function Church({ onClose }) {
  const dispatch = useDispatch();
  const ERROR = useSelector((state) => state.error);

  const [newData, setNewData] = useState({
    name: "",
    state: "",
    address: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

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
    setNewData({ ...newData, [name]: value });
    setErrors(validation({ ...newData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation(newData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(createRecord("church", newData));
      setIsSubmitted(true);
      handleClean();
    }
  };

  function handleClean() {
    setNewData({
      name: "",
      state: "",
      address: "",
      phone: "",
    });
    setErrors({});
  }

  return (
    <div className={styles.form}>
      <h2>Registro de Congregaciones</h2>
      <button onClick={onClose}>X</button>
      <form onSubmit={handleSubmit}>
        <div className={styles.section}>
          <div className={styles.miembros_info_personal}>
            <label htmlFor="name">Nombre de la congregación:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={newData.name}
              onChange={handleChange}
              placeholder="IDC ..."
            />{" "}
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div className={styles.miembros_info_personal}>
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
              <option value="RACN">Región Autonoma del Caribe Norte</option>
              <option value="RACS">Región Autonoma del Caribe Sur</option>
            </select>
            {errors.state && <p className={styles.error}>{errors.state}</p>}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.miembros_info_personal}>
            <label htmlFor="address">Dirección de la congregación</label>
            <input
              type="text"
              name="address"
              id="address"
              value={newData.address}
              onChange={handleChange}
            />
          </div>

          <div className={styles.miembros_info_personal}>
            <label htmlFor="phone">Teléfono de la congregación</label>
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
              value={newData.phone || ""}
              onChange={handleChange}
              name="phone"
              id="phone"
              placeholder="(505)-9999-9999"
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
            Borrar datos
          </button>
        </div>
      </form>
    </div>
  );
}

Church.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose debe ser una función y es requerida
};
