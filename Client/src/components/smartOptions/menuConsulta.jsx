import Btn from "../button/Buttons";
import styles from "./Smart.module.css";
function OptConsulta() {
  return (
    <div className={styles.band}>
      <div className={styles.crud}>
        <Btn>Personas</Btn>
        <Btn>Congregaciones</Btn>
        <Btn>Tickets</Btn>
      </div>
    </div>
  );
}

export default OptConsulta;
