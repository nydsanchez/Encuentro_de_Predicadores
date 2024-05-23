import Container from "react-bootstrap/Container";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Churches from "../../components/Tablas/Churches";

export default function ChurchesList() {
  return (
    <Container fluid className="app">
      <Header />
      <Menu />
      <Churches />
    </Container>
  );
}
