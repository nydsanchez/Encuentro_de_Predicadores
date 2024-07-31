import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { FaClipboardList, FaSearch, FaUserCheck } from "react-icons/fa";

import styles from "./Menu.module.css";

function Menu() {
  const [expanded, setExpanded] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className={styles.menuprincipal}>
      <Navbar expand="lg" className={`  ${styles.menu}`}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
          {expanded && <span className="navbar-toggler-icon"></span>}
        </Navbar.Toggle>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className={expanded ? "show" : ""}
        >
          <Nav className="mr-auto flex-column">
            <Nav.Item className={`nav-item ${styles.bgItem}`}>
              <NavLink to="/home" className="nav-link">
                <i className={`bi bi-speedometer2 ${styles.iconosMenu}`}></i>{" "}
                Dashboard
              </NavLink>
            </Nav.Item>

            <Nav.Link
              onClick={() => handleMenuClick("registro")}
              className={`dropdown-toggle ${styles.menu} ${styles.bgItem}`}
            >
              <FaClipboardList className={styles.iconosMenu} />
              Registro
            </Nav.Link>

            {activeMenu === "registro" && (
              <Nav className={`flex-column ${styles.submenu}`}>
                <NavLink
                  to="/registro/congregacion"
                  className={styles.submenu__background}
                >
                  Nueva Congregación
                </NavLink>
                <NavLink
                  to="/registro/persona"
                  className={styles.submenu__background}
                >
                  Agregar persona
                </NavLink>
                <NavLink
                  to="/registro/ticket"
                  className={styles.submenu__background}
                >
                  Agregar Ticket
                </NavLink>
                <NavLink
                  to="/registro/persona-ticket"
                  className={styles.submenu__background}
                >
                  Agregar persona y ticket
                </NavLink>
              </Nav>
            )}

            <Nav.Item className={`nav-item ${styles.bgItem}`}>
              <NavLink to="/home" className="nav-link">
                <FaSearch className={styles.iconosMenu} />
                Consultas
              </NavLink>
            </Nav.Item>

            <Nav.Link
              onClick={() => handleMenuClick("attendance")}
              className={`dropdown-toggle ${styles.menu} ${styles.bgItem}`}
            >
              <FaUserCheck className={styles.iconosMenu} /> Asistencia
            </Nav.Link>
            {activeMenu === "attendance" && (
              <Nav className={`flex-column ${styles.submenu}`}>
                <NavLink to="/asistencias">Registro</NavLink>
                <NavLink to="/listado-de-asistencia">Listado</NavLink>
              </Nav>
            )}

            <Nav.Item className={`nav-item ${styles.bgItem}`}>
              <NavLink to="/rifa" className="nav-link">
                <i className={`bi bi-award ${styles.iconosMenu}`}></i> Rifa
              </NavLink>
            </Nav.Item>

            <hr />
            <Nav.Item className={`nav-item ${styles.bgItem}`}>
              <NavLink to="/new" className="nav-link">
                <i className={`bi bi-box-arrow-right ${styles.iconosMenu}`}></i>{" "}
                Salir
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
export default Menu;
