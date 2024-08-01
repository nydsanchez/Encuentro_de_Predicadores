import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";
import styles from "../../css/nuevo.module.css";
export default function NewPerson() {
  return (
    <div className={styles.page_new}>
      <header className={styles.page_new_header}>
        <Header />
      </header>
      <aside className={styles.page_new_asideMenu}>
        <Menu />
      </aside>
      <footer className={styles.page_new_footer}>
        <Footer />
      </footer>
    </div>
  );
}
