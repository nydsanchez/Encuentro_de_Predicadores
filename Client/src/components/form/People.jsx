import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import SelectChurch from "../select/selectChurch";
//import validation from "../../assets/javascript/validation";
import styles from "./peopleform.module.css";

export default function People({ onClose, isModal }) {
  People.propTypes = {
    onClose: PropTypes.func.isRequired, // onClose debe ser una función y es requerida
    isModal: PropTypes.bool.isRequired, // isModal debe ser un booleano y es requerido
  };

  const [newData, setNewData] = useState({
    person_id: "",
    name: "",
    address: "",
    phone: "",
    genre: "",
    ChurchId: "",
  });
  // const [errors, setErrors] = useState({});
  //const [confirmClear, setConfirmClear] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });

    /*  const updatedErrors = validation({ ...newData, [name]: value });
    setErrors(updatedErrors); */
  };

  const handleSelectChurchChange = (id) => {
    setNewData({ ...newData, ChurchId: id });
  };

  function delete_formData() {
    setNewData({
      person_id: "",
      name: "",
      address: "",
      phone: "",
      genre: "",
      ChurchId: "",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData("people", newData));
    window.alert("Se ha guardado los datos exitosamente");
    if (isModal) {
      onClose(); // Cierra la modal al enviar el formulario
    }

    delete_formData();
  };

  function handleClearData() {
    // showConfirmation();
    if (window.confirm("¿Estás seguro de que quieres cerrar el registro?")) {
      navigate("/home");
    }
  }

  return (
    <main className={isModal ? styles.modalMain : ""}>
      <div className={isModal ? styles.modalContent : styles.grid_container}>
        <div className={styles.grid_container_text}>
          <h3>Registro de Personas</h3>

          <form className={styles.peopleform} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="person_id">Número de cedula:</label>
              <input
                type="text"
                name="person_id"
                id="person_id"
                value={newData.person_id}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="name">Nombre Completo:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={newData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="address">Dirección:</label>
              <input
                type="text"
                name="address"
                id="address"
                value={newData.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone">No. Teléfono/celular:</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={newData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
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
            <div>
              <label htmlFor="ChurchId">Congregación:</label>
              <SelectChurch
                selectedChurchId={newData.ChurchId}
                onChange={handleSelectChurchChange}
              />
            </div>
            <div className={styles.formButton}>
              <button
                type="submit"
                className={styles.btn_form}
                disabled={loading}
                onClick={onClose}
              >
                {isModal ? (
                  "Guardar y cerrar"
                ) : (
                  <>
                    <i className="bi bi-floppy"></i> Guardar
                  </>
                )}
              </button>
              <button
                type="button"
                className={`${styles.btn_form} ${styles.btn_x}`}
                onClick={() => {
                  handleClearData(); // Llama a handleClearData después de confirmar
                }}
                disabled={loading}
              >
                <i className="bi bi-x-lg"></i> Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
