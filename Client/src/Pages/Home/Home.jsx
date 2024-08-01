import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Container from "react-bootstrap/Container";
import styles from "../../css/page.module.css";
function Home() {
  return (
    <Container fluid className={styles.app}>
      <Header />
      <Menu />
      <main>hola soy may</main>
      <Footer />
    </Container>
  );
}

export default Home;
