import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";

import Footer from "../components/footer/Footer";

import styles from "../css/nuevo.module.css";
import Tabs from "../components/tab/Tabs";

function Consultas() {
  return (
    <div className={styles.page_new}>
      <header className={styles.page_new_header}>
        <Header />
      </header>
      <aside className={styles.page_new_asideMenu}>
        <Menu />
      </aside>
      <main className={styles.page_new_MainSection}>
        <Tabs />
      </main>
      <footer className={styles.page_new_footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Consultas;
