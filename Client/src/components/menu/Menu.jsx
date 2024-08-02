import { NavLink } from "react-router-dom";

import {
  FaClipboardList,
  FaSearch,
  FaTachometerAlt,
  FaTrophy,
  FaUserCheck,
} from "react-icons/fa";

import styles from "./Menu.module.css";

function Menu() {
  return (
    <nav className={styles.menuprincipal}>
      <ul>
        <li>
          <NavLink to="/home" className="nav-link">
            <FaTachometerAlt className={styles.iconosMenu} /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/registro" className="nav-link">
            <FaClipboardList className={styles.iconosMenu} />
            Registro
          </NavLink>
        </li>
        <li>
          <NavLink to="/consultas" className="nav-link">
            <FaSearch className={styles.iconosMenu} /> Consultas
          </NavLink>
        </li>
        <li>
          <NavLink to="/confirmar-asitencia" className="nav-link">
            <FaUserCheck className={styles.iconosMenu} /> Asistencia
          </NavLink>
        </li>
        <li>
          <NavLink to="/confirmar-asitencia" className="nav-link">
            <FaTrophy className={styles.iconosMenu} /> Rifa
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;
