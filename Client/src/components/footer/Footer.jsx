import styles from "./footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © Copyright 2024 Nydia Massiel Sánchez |
        <a href="https://sc-consulting.online/"> SC-Consulting. </a> Todos los
        derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
