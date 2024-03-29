import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./menu.module.css";

const Menu = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleToggle = (index) => {
    if (expandedMenu === index) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(index);
    }
  };

  return (
    <nav className={styles.asideMenu}>
      <ul>
        <li>
          <div onClick={() => handleToggle(0)} className={styles.menu}>
            <NavLink to="/home">Dashboard</NavLink>
          </div>
        </li>
        <li>
          <div
            className={`${styles.menu} ${
              expandedMenu === 1 && styles.menu_active
            }`}
            onClick={() => handleToggle(1)}
          >
            Evento
          </div>
          {expandedMenu === 1 && (
            <ul>
              <li className={styles.box_option}>
                <NavLink to="/eventos" className={styles.submenu}>
                  Configurar Evento
                </NavLink>
              </li>
              <li className={styles.box_option}>
                <NavLink to="/eventos" className={styles.submenu}>
                  Consultar Eventos
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            className={`${styles.menu} ${
              expandedMenu === 2 && styles.menu_active
            }`}
            onClick={() => handleToggle(2)}
          >
            Congregaciones
          </div>
          {expandedMenu === 2 && (
            <ul>
              <li className={styles.box_option}>
                <NavLink to="/nueva-congregacion" className={styles.submenu}>
                  Nueva Congregación
                </NavLink>
              </li>
              <li className={styles.box_option}>
                <NavLink to="/ver-congregaciones" className={styles.submenu}>
                  Ver Congregaciones
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            className={`${styles.menu} ${
              expandedMenu === 3 && styles.menu_active
            }`}
            onClick={() => handleToggle(3)}
          >
            Ticket
          </div>
          {expandedMenu === 3 && (
            <ul>
              <li className={styles.box_option}>
                <NavLink to="/registro-ticket" className={styles.submenu}>
                  Registro de Ticket
                </NavLink>
              </li>
              <li className={styles.box_option}>
                <NavLink to="/consultar-tickets" className={styles.submenu}>
                  Consultar Tickets
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            className={`${styles.menu} ${
              expandedMenu === 4 && styles.menu_active
            }`}
            onClick={() => handleToggle(4)}
          >
            Personas
          </div>
          {expandedMenu === 4 && (
            <ul>
              <li className={styles.box_option}>
                <NavLink to="/agregar-personas" className={styles.submenu}>
                  Agregar Personas
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            className={`${styles.menu} ${
              expandedMenu === 5 && styles.menu_active
            }`}
            onClick={() => handleToggle(5)}
          >
            Asistencia
          </div>
          {expandedMenu === 5 && (
            <ul>
              <li className={styles.box_option}>
                <NavLink to="/registro-asistencia" className={styles.submenu}>
                  Registro de Asistencia
                </NavLink>
              </li>
              <li className={styles.box_option}>
                <NavLink to="/consultar-asistencia" className={styles.submenu}>
                  Consultar Asistencia
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

/* import { NavLink } from "react-router-dom";
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
