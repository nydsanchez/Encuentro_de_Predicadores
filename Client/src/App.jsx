import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/notFound/PageNotFound";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
