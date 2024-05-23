import Container from "react-bootstrap/Container";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Ticket from "../../components/form/Ticket";

export default function NewTicket() {
  return (
    <Container fluid className="app">
      <Header />
      <Menu />
      <Ticket />
    </Container>
  );
}
