import { NavLink } from "react-router-dom";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <main className={styles.notfound}>
      <h2> Página no encontrada!</h2>,
      <p>
        ¡Oops! Parece que te has desviado del camino. <br /> Para regresar
        presion el botón
      </p>
    </main>
  );
}
