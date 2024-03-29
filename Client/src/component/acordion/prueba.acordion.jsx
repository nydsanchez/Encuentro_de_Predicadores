import { useState } from "react";
import "./styles.css";

const menu = [
  {
    Dashboard: [""],
  },
  {
    Evento: ["Configurar Evento", "Consultar Eventos"],
  },
  {
    Congregaciones: ["Nueva Congregación", "Ver Congregaciones"],
  },
  {
    Ticket: ["Registro de Ticket", "Consultar Tickets"],
  },
  {
    Personas: ["Agregar Personas"],
  },
  {
    Asistencia: ["Registro de asistencia", "Consultar"],
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={menu} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

/*
import { NavLink } from "react-router-dom";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.asideMenu}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <NavLink
            className={styles.menuLink}
            activeclassname={styles.active}
            to="/home"
          >
            📊 Dashboard
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            className={styles.menuLink}
            activeclassname={styles.active}
            to="/eventos"
          >
            🎭 Datos del Evento
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            className={styles.menuLink}
            activeclassname={styles.active}
            to="/congregaciones"
          >
            ⛪️ Congregaciones
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            className={styles.menuLink}
            activeclassname={styles.active}
            to="/tickets"
          >
            🎟️ Registro de Tickets
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            className={styles.menuLink}
            activeclassname={styles.active}
            to="/participantes"
          >
            📝 Registro de Participantes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;


*/
