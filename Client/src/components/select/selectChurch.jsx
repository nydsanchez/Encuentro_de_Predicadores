import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../redux/actions";

import PropTypes from "prop-types";

const SelectChurch = ({ selectedChurchId, onChange }) => {
  SelectChurch.propTypes = {
    selectedChurchId: PropTypes.string.isRequired, // onClose debe ser una función y es requerida
    onChange: PropTypes.func.isRequired, // isModal debe ser un booleano y es requerido
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.churches);

  useEffect(() => {
    if (!data) {
      dispatch(getAllData("churches"));
    }
  }, [dispatch, data]);

  const handleSelectChange = (event) => {
    const selectedOptionId = event.target.value;
    const selectedChurch = data?.find(
      (entity) => entity.id === selectedOptionId
    );
    onChange(selectedOptionId, selectedChurch); // Llama a la función onChange prop
  };

  return (
    <select value={selectedChurchId} onChange={handleSelectChange}>
      <option value="">Seleccione una opción</option>
      {data && data.length > 0 ? (
        data.map((church) => (
          <option key={church.id} value={church.id}>
            {church.church_name}
          </option>
        ))
      ) : (
        <option value="" disabled>
          No hay datos disponibles
        </option>
      )}
    </select>
  );
};

export default SelectChurch;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addData } from "../../redux/actions";
// import PropTypes from "prop-types";

// const Select = ({ entityType, handleFilter, idKey, nameKey }) => {
//   const dispatch = useDispatch();

//   const data = useSelector((state) => state.data[entityType]);
//   const loading = useSelector((state) => state.loading);

//   useEffect(() => {
//     if (!data && !loading) {
//       dispatch(addData(entityType));
//     }
//   }, [dispatch, entityType, data, loading]);

//   const handleEntityChange = (event) => {
//     const selectedOptionId = event.target.value;
//     if (data) {
//       const selectedEntity = data.find(
//         (entity) => entity[idKey] === selectedOptionId
//       );
//       if (selectedEntity) {
//         handleFilter(selectedEntity);
//       }
//     }
//   };

//   return (
//     <div>
//       {loading && <p>Cargando...</p>}
//       {data && data.length > 0 ? (
//         <select onChange={handleEntityChange}>
//           {data.map((entity) => (
//             <option key={entity[idKey]} value={entity[idKey]}>
//               {entity[nameKey]}
//             </option>
//           ))}
//         </select>
//       ) : (
//         <p>No hay datos disponibles</p>
//       )}
//     </div>
//   );
// };

// export default Select;

// Select.propTypes = {
//   entityType: PropTypes.string.isRequired,
//   handleFilter: PropTypes.func.isRequired,
//   idKey: PropTypes.string.isRequired,
//   nameKey: PropTypes.string.isRequired,
// };
