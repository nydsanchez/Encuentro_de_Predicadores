import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllData } from "../../redux/actions";
import { FaPencil, FaEye, FaEraser } from "react-icons/fa6";

import styles from "./tablas.module.css";

function Churches() {
  const dispatch = useDispatch();
  const churches = useSelector((state) => state.data.churches);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const handleEdit = (index) => {
    console.log("Edit item at index:", index);
  };

  const handleViewDetails = (index) => {
    console.log("View details of item at index:", index);
  };

  const handleDelete = (index) => {
    console.log("Delete item at index:", index);
  };
  console.log("Renderizando Churches");

  useEffect(() => {
    dispatch(getAllData("churches"));
  }, [dispatch]);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al cargar los datos: {error}</p>;

  return (
    <main>
      <h2 className={styles.subtitle}>Lista de Congregaciones</h2>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {churches.map((church, index) => (
              <tr key={index}>
                <td>{church.church_name}</td>
                <td>{church.church_phone}</td>
                <td className={styles.actions}>
                  <button onClick={() => handleEdit(index)}>
                    <FaPencil className={styles.icon_mobile} />
                  </button>
                  <button onClick={() => handleViewDetails(index)}>
                    <FaEye className={styles.icon_mobile} />
                  </button>
                  <button onClick={() => handleDelete(index)}>
                    <FaEraser className={styles.icon_mobile} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Churches;
