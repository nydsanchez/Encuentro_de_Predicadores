import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../redux/actions";

function TestComponent() {
  const dispatch = useDispatch();
  const churches = useSelector((state) => state.data.churches);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getAllData("churches"));
  }, [dispatch]);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al cargar los datos: {error}</p>;

  return (
    <main>
      <h2>Lista de Congregaciones</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {churches.map((church, index) => (
              <tr key={index}>
                <td>{church.church_name}</td>
                <td>{church.church_phone}</td>
                <td>
                  <button onClick={() => console.log("Edit", index)}>
                    Edit
                  </button>
                  <button onClick={() => console.log("View", index)}>
                    View
                  </button>
                  <button onClick={() => console.log("Delete", index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default TestComponent;
