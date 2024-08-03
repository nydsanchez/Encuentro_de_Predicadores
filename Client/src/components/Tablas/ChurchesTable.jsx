import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { retrieveData, deleteData } from "../../redux/actions";

import { FaEye, FaEraser } from "react-icons/fa6";

import styles from "./tablas.module.css";
import Pagination from "../pagination/Pagination";
import ChurchDetails from "../form/ChurchDetail";

function ChurchesTable() {
  const dispatch = useDispatch();
  const churches = useSelector((state) => state.data.churches);

  // Estado local para controlar el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChurch, setSelectedChurch] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const handleViewDetails = (id) => {
    const churchToView = churches.find((church) => church.id === id);
    setSelectedChurch(churchToView);
    setIsModalOpen(true); // Abre el mod
  };

  const handleDelete = (id) => {
    console.log(typeof id);
    if (
      window.confirm(
        "¿Está seguro que desea eliminar este registro? La acción no se puede deshacer."
      )
    ) {
      dispatch(deleteData("church", id))
        .then(() => {
          dispatch(retrieveData("churches"));
          window.alert("El registro ha sido borrado");
        })
        .catch((error) => {
          window.alert(`Error al borrar el registro: ${error}`);
        });
    }
  };

  useEffect(() => {
    dispatch(retrieveData("churches"));
  }, [dispatch]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = churches.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <main className={styles.container}>
      <h2 className={styles.subtitle}>Lista de Congregaciones</h2>
      <div className={styles.container_table}>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(churches.length / recordsPerPage)}
          onPageChange={setCurrentPage}
        />
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Departamento</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((church, index) => (
              <tr key={index}>
                <td>{church.church_name}</td>
                <td>{church.church_state}</td>
                <td className={styles.actions}>
                  <button onClick={() => handleViewDetails(church.id)}>
                    <FaEye className={styles.icon_mobile} />
                  </button>
                  <button onClick={() => handleDelete(church.id)}>
                    <FaEraser className={styles.icon_mobile} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setIsModalOpen(false)}
          />
          <div className={styles.modal}>
            <ChurchDetails
              onClose={() => setIsModalOpen(false)}
              church={selectedChurch}
            />
          </div>
        </>
      )}
    </main>
  );
}

export default ChurchesTable;
