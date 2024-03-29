import { Routes, Route } from "react-router-dom";

import Header from "./component/header/Header";
import Menu from "./component/nav/Menu";
import Dashboard from "./component/Dashboard/Dashboard";
import PageNotFound from "./Pages/notFound/PageNotFound";
import Church from "./component/Form/Church";
import Event from "./component/Form/Event";
import Ticket from "./component/Form/Ticket";
import People from "./component/Form/People";

function App() {
  return (
    <div className={"app"}>
      <Header />
      <Menu />
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/congregaciones" element={<Church />} />
        <Route path="/tickets" element={<Ticket />} />
        <Route path="/eventos" element={<Event />} />
        <Route path="/participantes" element={<People />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
