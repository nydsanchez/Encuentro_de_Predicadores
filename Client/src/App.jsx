import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";

import Registro from "./Pages/registro";
import Consultas from "./Pages/consultas";
import Asistencia from "./Pages/asistencia";

import Raffle from "./Pages/raffle";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />

      <Route path="/registro" element={<Registro />} />
      <Route path="/consultas" element={<Consultas />} />
      <Route path="/confirmar-asitencia" element={<Asistencia />} />
      <Route path="/rifa" element={<Raffle />} />
    </Routes>
  );
}

export default App;
