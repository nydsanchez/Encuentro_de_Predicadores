import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";

import Footer from "../components/footer/Footer";

import styles from "../css/nuevo.module.css";
import TestComponent from "../components/Tablas/test";

function Asistencia() {
  return (
    <div className={styles.page_new}>
      <header className={styles.page_new_header}>
        <Header />
      </header>
      <aside className={styles.page_new_asideMenu}>
        <Menu />
      </aside>
      <main className={styles.page_new_MainSection}>
        <TestComponent />
      </main>
      <footer className={styles.page_new_footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Asistencia;
