import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveData } from "../../redux/actions";

import PropTypes from "prop-types";

const SelectPeople = ({ person_Id, onChange }) => {
  SelectPeople.propTypes = {
    person_Id: PropTypes.string.isRequired, // onClose debe ser una función y es requerida
    onChange: PropTypes.func.isRequired, // isModal debe ser un booleano y es requerido
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.people);

  useEffect(() => {
    if (!data) {
      dispatch(retrieveData("people"));
    }
  }, [dispatch, data]);

  const handleSelectChange = (event) => {
    const selectedOptionId = event.target.value;
    const selectedPersonId = data?.find(
      (entity) => entity.id === selectedOptionId
    );
    onChange(selectedOptionId, selectedPersonId); // Llama a la función onChange prop
  };

  return (
    <select value={person_Id} onChange={handleSelectChange}>
      <option value="">Seleccione una opción</option>
      {data && data.length > 0 ? (
        data.map((person) => (
          <option key={person.id} value={person.id}>
            {person.name}
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

export default SelectPeople;
