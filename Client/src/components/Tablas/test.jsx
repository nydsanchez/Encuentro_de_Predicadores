import { useSelector } from "react-redux";
import styles from "./tablas.module.css";
import Search from "../search/Search";

function TestComponent() {
  const ticket = useSelector((state) => state.search.ticket);
  const ERROR = useSelector((state) => state.error);

  let content;

  if (ERROR) {
    content = (
      <tbody>
        <tr>
          <td colSpan="4">{ERROR.message}</td>
        </tr>
      </tbody>
    );
  } else {
    content = (
      <tbody>
        {ticket.map((ticket) => (
          <tr key={ticket.id_ticket}>
            <td>{ticket.People.name}</td>
            <td>{ticket.People.id}</td>
            <td>{ticket.id_ticket}</td>
            <td>{ticket.state_ticket}</td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_search}>
        <Search entity={"ticket"} />
      </div>
      <div className={styles.container_table}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Cedula</th>
              <th scope="col">No. Ticket</th>
              <th scope="col">Estado del ticket</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </div>
  );
}

export default TestComponent;
