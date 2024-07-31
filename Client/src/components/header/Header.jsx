import Logo from "./logo";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} fixed-top w-100 bg-light`}>
      <Logo />

      <div className={styles.headerText}>
        <h1>Encuentro de Predicadores</h1>
        <p>Iglesia de Cristo en Nicaragua | Evento presencial</p>
      </div>

      <div>
        <img
          className={styles.imgLogo2}
          src="/logoHeadName.png"
          alt="logo SC - Consulting"
        />
      </div>
    </header>
  );
};
export default Header;
