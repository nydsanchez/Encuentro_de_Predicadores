import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/notFound/PageNotFound";
import Home from "./Pages/Home/Home";
import NewChurches from "./Pages/Churches/NewChurches";
import ChurchesList from "./Pages/Churches/ChurchesList";
import NewPerson from "./Pages/People/NewPerson";
import PeopleList from "./Pages/People/PeopleList";
import NewTicket from "./Pages/Tickets/NewTicket";
import TicketList from "./Pages/Tickets/TicketList";
import TestComponent from "./components/test";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/iglesia/nuevo" element={<NewChurches />} />
      <Route path="/iglesia/listado" element={<ChurchesList />} />
      <Route path="/personas" element={<NewPerson />} />
      <Route path="/personas/listado" element={<PeopleList />} />
      <Route path="/tickets" element={<NewTicket />} />
      <Route path="/tickets/listado" element={<TicketList />} />
      <Route path="/new" element={<TestComponent />} />
    </Routes>
  );
}

export default App;
