import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllData } from "../../redux/actions";
import { FaPencil, FaEye, FaEraser } from "react-icons/fa6";

import styles from "./tablas.module.css";

function PeopleTable() {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.data.people);

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
  console.log(people);
  useEffect(() => {
    dispatch(getAllData("people"));
  }, [dispatch]);
  return (
    <main>
      <h2 className={styles.subtitle}>Listado de Personas</h2>
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
            {people.map((per, index) => (
              <tr key={index}>
                <td>{per.name}</td>
                <td>{per.phone}</td>

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

export default PeopleTable;
