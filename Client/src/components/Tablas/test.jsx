import { useSelector } from "react-redux";
import { useState } from "react";
import styles from "./tablas.module.css";
import Search from "../search/Search";
import Btn from "../button/Buttons";
import TicketUpdate from "../tab/TicketUpdate";

function TestComponent() {
  const ticket = useSelector((state) => state.search.ticket);
  const ERROR = useSelector((state) => state.error);
  const [isOpen, setIsOpen] = useState(false);

  const handleAttendance = () => {
    console.log("estoy confirmando");
  };
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

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
      <div className={styles.container_table}>
        <div className={styles.container_header}>
          <Search entity={"ticket"} />
          <div className={styles.container_header_button}>
            <Btn onClick={handleAttendance}>Confirmar asistencia</Btn>
            <Btn onClick={handleOpenModal}>Editar datos</Btn>
          </div>
        </div>
        <h2>Informacion del ticket</h2>
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
      {isOpen && (
        <div>
          <TicketUpdate onClose={handleCloseModal} ticket={ticket} />
        </div>
      )}
    </div>
  );
}

export default TestComponent;
