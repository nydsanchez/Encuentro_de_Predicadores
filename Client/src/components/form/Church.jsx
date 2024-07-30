import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecord } from "../../redux/actions";

import MaskedInput from "react-text-mask";
import validation from "../../js/validation";
import styles from "./form.module.css";

export default function Church() {
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
    console.log(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(createRecord("churches", newData));
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
    <main>
      <div className={styles.grid_container_2col}>
        <div className={styles.grid_container_text}>
          <h3>Registro de Congregaciones</h3>
          <p>
            Completa los datos de la congregación para comenzar a gestionar a
            los participantes de las actividades.
          </p>

          <form className={styles.formChurch} onSubmit={handleSubmit}>
            <div className={styles.miembros_info_personal}>
              <label htmlFor="name">Nombre de la congregación:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={newData.name}
                onChange={handleChange}
              />{" "}
              {errors.e1 ? (
                <p className={styles.error_msg}>{errors.e1}</p>
              ) : (
                <p>&nbsp;</p>
              )}
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
                <option value="RACCN">Región Autonoma del Caribe Norte</option>
                <option value="RACCS">Región Autonoma del Caribe Sur</option>
              </select>
            </div>
            <div className={styles.miembros_info_personal}>
              <label htmlFor="address">Dirección de la congregación</label>
              <input
                type="text"
                name="address"
                id="address"
                value={newData.address}
                onChange={handleChange}
              />{" "}
              {errors.e1 ? (
                <p className={styles.error_msg}>{errors.e1}</p>
              ) : (
                <p>&nbsp;</p>
              )}
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
              {errors.e1 ? (
                <p className={styles.error_msg}>{errors.e1}</p>
              ) : (
                <p>&nbsp;</p>
              )}
            </div>
            <div className={styles.formButton}>
              <button type="submit" className={styles.btn_form}>
                <i className="bi bi-floppy"></i> Guardar
              </button>
              <button
                type="button"
                className={`${styles.btn_form} ${styles.btn_x}`}
                onClick={handleClean}
              >
                <i className="bi bi-x-lg"></i> Borrar datos
              </button>
            </div>
          </form>
        </div>
        <div
          className={styles.grid_container_imgChurch}
          role="img"
          aria-label="foto de Iglesia de Cristo"
        ></div>
      </div>
    </main>
  );
}
