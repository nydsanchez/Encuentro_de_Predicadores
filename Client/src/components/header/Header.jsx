import { format } from "date-fns";
import esLocale from "date-fns/locale/es";

import styles from "./header.module.css";

const Header = () => {
  let today = new Date();
  const formattedDate = format(today, "EEEE, d MMMM yyyy", {
    locale: esLocale,
  });
  const year = today.getFullYear();

  return (
    <header className={`${styles.header} fixed-top w-100 bg-light`}>
      <div className={styles.imgLogoBox}>
        <img className={styles.imgLogo} src="logo-v2.png" alt="logo" />
      </div>
      <div className={styles.headerText}>
        <h1 data-date={formattedDate}>Encuentro de Predicadores {year}</h1>
        <p>Iglesia de Cristo en Nicaragua | Evento presencial</p>
        <p>{formattedDate}</p>
      </div>
      <div></div>
    </header>
  );
};
export default Header;
