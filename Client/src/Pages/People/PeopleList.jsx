import Container from "react-bootstrap/Container";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import PeopleTable from "../../components/Tablas/PeopleTable";

export default function PeopleList() {
  return (
    <Container fluid className="app">
      <Header />
      <Menu />
      <PeopleTable />
    </Container>
  );
}
