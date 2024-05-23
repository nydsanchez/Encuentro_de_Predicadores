import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllData } from "../../redux/actions";
import { FaPencil, FaEye, FaEraser } from "react-icons/fa6";

import styles from "./tablas.module.css";

function Churches() {
  const dispatch = useDispatch();
  const churches = useSelector((state) => state.data.churches);

  const handleEdit = (index) => {
    // Lógica para editar el elemento con el índice proporcionado
    console.log("Edit item at index:", index);
  };

  const handleViewDetails = (index) => {
    // Lógica para ver más detalles del elemento con el índice proporcionado
    console.log("View details of item at index:", index);
  };

  const handleDelete = (index) => {
    // Lógica para eliminar el elemento con el índice proporcionado
    console.log("Delete item at index:", index);
  };
  console.log(churches);
  useEffect(() => {
    dispatch(getAllData("churches"));
  }, [dispatch]);
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
