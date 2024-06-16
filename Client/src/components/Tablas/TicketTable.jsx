import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllData } from "../../redux/actions";
import { FaPencil, FaEye, FaEraser } from "react-icons/fa6";

import styles from "./tablas.module.css";

function TicketTable() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.data.tickets);
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
  console.log(tickets);
  useEffect(() => {
    dispatch(getAllData("tickets"));
    dispatch(getAllData("people"));
  }, [dispatch]);

  const getPersonName = (personId) => {
    const person = people.find((p) => p.id === personId);
    return person ? person.name : "Desconocido";
  };

  return (
    <main>
      <h2 className={styles.subtitle}>Listado de Tickets</h2>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">No. Ticket</th>
              <th scope="col">Estado</th>
              <th scope="col">Asignado a</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((tkt, index) => (
              <tr key={index}>
                <td>{tkt.id_ticket}</td>
                <td>{tkt.state_ticket}</td>
                <td>{getPersonName(tkt.PersonId)}</td>

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

export default TicketTable;
