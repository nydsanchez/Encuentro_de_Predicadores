import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../redux/actions";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import validation from "../../js/validationChurchForm";
import styles from "./form.module.css";

export default function ChurchDetails({ onClose, church }) {
  const dispatch = useDispatch();
  const ERROR = useSelector((state) => state.error);

  const [isEditMode, setIsEditMode] = useState(false);

  const [newData, setNewData] = useState({
    name: church ? church.church_name : "",
    state: church ? church.church_state : "",
    address: church ? church.church_address : "",
    phone: church ? church.church_phone : "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isSubmitted) {
      alert(
        ERROR ? `Error: ${ERROR}` : "Congregación actualizada exitosamente!"
      );
      setIsSubmitted(false);
      if (!ERROR) {
        onClose(); // Cierra el modal después de la actualización exitosa si no hay errores
      }
    }
  }, [ERROR, isSubmitted, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
    setErrors(validation({ ...newData, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const validationErrors = validation(newData);
    setErrors(validationErrors);

    if (isEditMode && Object.keys(validationErrors).length === 0) {
      if (church && church.id) {
        dispatch(updateData("churches", church.id, newData));
        setIsSubmitted(true);
      } else {
        console.error("Error: ID de la iglesia no definido.");
        alert("Error al actualizar: ID de la iglesia no definido.");
      }
    }
  };

  const handleEditToggle = () => {
    setIsEditMode((prevMode) => !prevMode);
  };

  function handleClean() {
    setNewData({
      name: church ? church.church_name : "",
      state: church ? church.church_state : "",
      address: church ? church.church_address : "",
      phone: church ? church.church_phone : "",
    });
    setErrors({});
  }

  return (
    <div className={styles.form}>
      <h2>
        {isEditMode ? "Editar Congregación" : "Detalles de la Congregación"}
      </h2>
      <button onClick={onClose}>X</button>
      <form>
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
              disabled={!isEditMode}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div className={styles.miembros_info_personal}>
            <label htmlFor="state">Departamento:</label>
            <select
              name="state"
              id="state"
              value={newData.state}
              onChange={handleChange}
              disabled={!isEditMode}
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
              disabled={!isEditMode}
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
              disabled={!isEditMode}
            />
          </div>
        </div>

        <div className={styles.section_buttons}>
          {isEditMode ? (
            <>
              <button
                type="button"
                className={styles.button_main}
                onClick={handleUpdate}
              >
                Actualizar
              </button>
              <button
                type="button"
                className={styles.button_sec}
                onClick={handleClean}
              >
                Borrar
              </button>
            </>
          ) : (
            <button
              type="button"
              className={styles.button_main}
              onClick={handleEditToggle}
            >
              Editar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

ChurchDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  church: PropTypes.object.isRequired, // church es requerido y debe ser un objeto
};
