import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/notFound/PageNotFound";
import Home from "./Pages/Home/Home";
import NewChurches from "./Pages/Churches/NewChurches";
import ChurchesList from "./Pages/Churches/ChurchesList";
import NewPerson from "./Pages/People/NewPerson";
import PeopleList from "./Pages/People/PeopleList";
import NewTicket from "./Pages/Tickets/NewTicket";
import TicketList from "./Pages/Tickets/TicketList";
import Registro from "./Pages/registro";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/registro/" element={<Registro />} />
      <Route path="/registro/congregacion" element={<NewChurches />} />
      <Route path="/registro/persona" element={<NewPerson />} />
      <Route path="/registro/ticket" element={<NewTicket />} />
      <Route path="/registro/persona-ticket" element={<NewTicket />} />

      <Route path="/iglesia/listado" element={<ChurchesList />} />
      <Route path="/personas/listado" element={<PeopleList />} />
      <Route path="/tickets/listado" element={<TicketList />} />
    </Routes>
  );
}

export default App;
