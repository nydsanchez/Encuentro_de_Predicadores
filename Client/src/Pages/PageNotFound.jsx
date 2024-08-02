import { Link } from "react-router-dom";
import styles from "../css/PageNotFound.module.css";

import logo from "/Logo-Hor-BG-BCO.png";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <header>
        <img src={logo} alt="Logo" className={styles.logo} />
        <img className={styles.imgLogo} src="/baNotFound.png" alt="logo" />
        {/* <img className={styles.imgLogo} src="/logo-v2.png" alt="logo" /> */}
      </header>

      <main className={styles.textoPage}>
        <h1 className={styles.title}>404 - ¿TE PERDISTE DEL EVENTO?</h1>
        <p className={styles.message}>
          Parece que has tomado una ruta que aún no está en nuestro mapa. No te
          preocupes, en SC-EVENTS UNIVERSE cada desvío es una oportunidad para
          descubrir nuevos eventos. Regresa a la página inicio para conectarte
          con todos los eventos de nuestra plataforma.
        </p>
        <Link to="/home" className={styles.homeButton}>
          Volver a la página de inicio
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
