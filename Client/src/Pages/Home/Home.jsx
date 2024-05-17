import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <Container fluid className="app">
      <Header />
      <Menu />
      <main>hola soy may</main>
    </Container>
  );
}

export default Home;
