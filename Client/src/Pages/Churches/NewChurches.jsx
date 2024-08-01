import Container from "react-bootstrap/Container";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Church from "../../components/form/Church";
import Footer from "../../components/footer/Footer";

export default function NewChurches() {
  return (
    <Container fluid className="app">
      <Header />
      <Menu />
      <Church />
      <Footer />
    </Container>
  );
}
