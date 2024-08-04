import { useState } from "react";
import { useSelector } from "react-redux";
import Search from "../search/Search";
import People from "../form/People";
import ConfirmChange from "./ConfirmChange";
import styles from "./tab.module.css";

function Steps({ onClose, ticket }) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Usa el selector para obtener los resultados de búsqueda del estado de Redux
  const searchResultPerson = useSelector((state) => state.search.people);

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  const handlePersonSelect = (person) => {
    setSelectedPerson(person);
    handleNextStep(); // Avanzar al siguiente paso
  };

  const handleNewPersonCreated = (personData) => {
    setSelectedPerson(personData);
    handleNextStep(); // Avanzar al siguiente paso
  };

  const handleConfirmChange = () => {
    // Aquí puedes cerrar el modal una vez que la confirmación sea exitosa
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.step_buttons}>
          <button
            className={activeStep === 1 ? styles.active : ""}
            onClick={() => setActiveStep(1)}
            disabled={activeStep === 1}
          >
            Buscar Persona
          </button>
          <button
            className={activeStep === 2 ? styles.active : ""}
            onClick={() => setActiveStep(2)}
            disabled={activeStep < 2}
          >
            Registrar Persona
          </button>
          <button
            className={activeStep === 3 ? styles.active : ""}
            onClick={() => setActiveStep(3)}
            disabled={activeStep < 3}
          >
            Confirmar Cambio
          </button>
          <button onClick={onClose} className={styles.close_button}>
            Cerrar
          </button>
        </div>
        <div className={styles.step_content}>
          {activeStep === 1 && (
            <div>
              <h3>Buscar Persona</h3>
              <Search entity="persona" />
              {searchResultPerson && (
                <div>
                  <p>Resultado: {searchResultPerson.name}</p>
                  <button
                    onClick={() => handlePersonSelect(searchResultPerson)}
                  >
                    Seleccionar
                  </button>
                </div>
              )}
              <button onClick={() => setActiveStep(2)}>
                Registrar Nueva Persona
              </button>
            </div>
          )}
          {activeStep === 2 && (
            <People
              onClose={handlePreviousStep}
              onNewPersonCreated={handleNewPersonCreated}
            />
          )}
          {activeStep === 3 && (
            <ConfirmChange
              selectedPerson={selectedPerson}
              ticket={ticket}
              onConfirm={handleConfirmChange}
              onBack={handlePreviousStep}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Steps;
