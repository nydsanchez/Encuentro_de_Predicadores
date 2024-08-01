export default function Formvalidation(formData) {
  const errors = {};

  // activity name
  if (!formData.name) {
    errors.name = "Ingrese el nombre de la congregación";
  }
  if (formData.name.length < 4) {
    errors.name = "Ingrese IDC y el nombre de su congregación";
  }

  // Validar departamento
  if (!formData.state) {
    errors.state = "Debe seleccionar una opción";
  }
  return errors;
}
