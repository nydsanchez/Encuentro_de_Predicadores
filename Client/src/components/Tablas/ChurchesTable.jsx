import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { retrieveData } from "../../redux/actions";

import { FaPencil, FaEye, FaEraser } from "react-icons/fa6";

import styles from "./tablas.module.css";
import Pagination from "../pagination/Pagination";

function ChurchesTable() {
  const dispatch = useDispatch();
  const churches = useSelector((state) => state.data.churches);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const handleEdit = (index) => {
    console.log("Edit item at index:", index);
  };

  const handleViewDetails = (index) => {
    console.log("View details of item at index:", index);
  };

  const handleDelete = (index) => {
    console.log("Delete item at index:", index);
  };

  useEffect(() => {
    dispatch(retrieveData("churches"));
  }, [dispatch]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = churches.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <main className={styles.container}>
      <div className={styles.container_table}>
        <h2 className={styles.subtitle}>Lista de Congregaciones</h2>
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
                  <button onClick={() => handleEdit(index)}>
                    <FaPencil className={styles.icon_mobile} />
                  </button>
                  <button onClick={() => handleViewDetails(index)}>
                    <FaEye className={styles.icon_mobile} />
                  </button>
                  <button onClick={() => handleDelete(index)}>
                    <FaEraser className={styles.icon_mobile} />
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

export default ChurchesTable;
