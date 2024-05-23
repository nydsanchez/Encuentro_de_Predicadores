import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
    <nav>
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
              onClick={() => handleMenuClick("congregations")}
              className={`dropdown-toggle ${styles.menu} ${styles.bgItem}`}
            >
              <i className={`bi bi-hospital ${styles.iconosMenu}`}></i> Iglesias
            </Nav.Link>

            {activeMenu === "congregations" && (
              <Nav className="flex-column">
                <NavLink to="/iglesia/nuevo">Nueva Congregación</NavLink>
                <NavLink to="/iglesia/listado">Ver Congregaciones</NavLink>
              </Nav>
            )}

            <Nav.Link
              onClick={() => handleMenuClick("people")}
              className={`dropdown-toggle ${styles.menu} ${styles.bgItem} `}
            >
              <i className={`bi bi-person ${styles.iconosMenu}`}></i> Personas
            </Nav.Link>
            {activeMenu === "people" && (
              <Nav className="flex-column">
                <NavLink to="/personas">Registro de Personas</NavLink>
                <NavLink to="/personas/listado">Consultar Personas </NavLink>
              </Nav>
            )}

            <Nav.Link
              onClick={() => handleMenuClick("ticket")}
              className={`dropdown-toggle ${styles.menu} ${styles.bgItem}`}
            >
              <i className={`bi bi-ticket-perforated ${styles.iconosMenu}`}></i>
              {"    "}
              Tickets
            </Nav.Link>
            {activeMenu === "ticket" && (
              <Nav className="flex-column">
                <NavLink to="/tickets">Registro de tickets</NavLink>
                <NavLink to="/tickets/listado">Consultar tickets </NavLink>
              </Nav>
            )}

            <Nav.Link
              onClick={() => handleMenuClick("attendance")}
              className={`dropdown-toggle ${styles.menu} ${styles.bgItem}`}
            >
              <i className={`bi bi-journal-check ${styles.iconosMenu}`}></i>{" "}
              Asistencia
            </Nav.Link>
            {activeMenu === "attendance" && (
              <Nav className="flex-column">
                <NavLink to="/asistencias">Registro de Asistentes</NavLink>
                <NavLink to="/listado-de-asistencia">
                  Lista de asistencia
                </NavLink>
              </Nav>
            )}

            <Nav.Item className={`nav-item ${styles.bgItem}`}>
              <NavLink to="/rifa" className="nav-link">
                <i className={`bi bi-award ${styles.iconosMenu}`}></i> Rifa
              </NavLink>
            </Nav.Item>

            <hr />
            <Nav.Item className={`nav-item ${styles.bgItem}`}>
              <NavLink to="/" className="nav-link">
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
