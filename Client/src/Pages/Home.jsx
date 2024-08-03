import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";

import styles from "../css/page.module.css";
function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.home_header}>
        <Header />
      </header>
      <aside className={styles.home_asideMenu}>
        <Menu />
      </aside>
      <main className={styles.home_MainSection}>hola soy may</main>
      <footer className={styles.home_footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
