import Container from "react-bootstrap/Container";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Church from "../../components/form/Church";

export default function NewChurches() {
  return (
    <Container fluid className="app">
      <Header />
      <Menu />
      <Church />
    </Container>
  );
}
