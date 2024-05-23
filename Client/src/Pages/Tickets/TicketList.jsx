import Container from "react-bootstrap/Container";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import TicketTable from "../../components/Tablas/TicketTable";

export default function TicketList() {
  return (
    <Container fluid className="app">
      <Header />
      <Menu />
      <TicketTable />
    </Container>
  );
}
