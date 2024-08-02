import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerGanadores } from "../actions/rifaActions";
import "./Rifa.css"; // Asegúrate de incluir los estilos

const Rifa = () => {
  const [numGanadores, setNumGanadores] = useState("");
  const dispatch = useDispatch();

  // Obtener el estado del store
  const ganadores = useSelector((state) => state.rifa.ganadores);
  const loading = useSelector((state) => state.rifa.loading);
  const error = useSelector((state) => state.rifa.error);

  // Manejar el cambio en el input
  const handleInputChange = (e) => {
    setNumGanadores(e.target.value);
  };

  // Manejar el click del botón para obtener los ganadores
  const handleGetGanadores = () => {
    dispatch(obtenerGanadores(numGanadores));
  };

  return (
    <div className="rifa-container">
      <h2>Generar Ganadores</h2>
      <div className="input-group">
        <input
          type="number"
          min="1"
          placeholder="Número de ganadores"
          value={numGanadores}
          onChange={handleInputChange}
        />
        <button onClick={handleGetGanadores} disabled={loading}>
          {loading ? "Cargando..." : "Obtener Ganadores"}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {ganadores.length > 0 && (
        <ul className="ganadores-list">
          {ganadores.map((ganador, index) => (
            <li key={index}>{ganador}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Rifa;
