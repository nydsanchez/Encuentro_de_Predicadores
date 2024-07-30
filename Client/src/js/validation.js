export default function validation(data) {
  let errors = {};

  if (data.name.trim() === "") {
    errors.e1 = "El nombre de la congregación es requerido";
  }
  if (data.name.length < 7) {
    errors.e1 = "Debe tener minimo 7 caracteres";
  }

  if (!data.state) {
    errors.e2 = "Debe seleccionar una opción";
  }
  return errors;
}
