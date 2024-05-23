import Container from "react-bootstrap/Container";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import People from "../../components/form/People";

export default function NewPerson() {
  return (
    <Container fluid className="app">
      <Header />
      <Menu />
      <People />
    </Container>
  );
}
