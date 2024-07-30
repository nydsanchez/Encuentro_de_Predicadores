export default function validation(data) {
  let errors = {};

  if (!data.person_id || data.person_id.length < 14) {
    errors.cedula = "Debe introducir un número de cedula valido";
  }

  if (!data.name) {
    errors.name = "Name is required";
  }
  if (data.name.length < 7) {
    errors.name = "Debe tener minimo 7 caracteres";
  }

  if (!data.state) {
    errors.state = "Debe seleccionar una opción";
  }
  if (!data.ChurchId) {
    errors.church = "Debe seleccionar una opción";
  }
  if (!data.id_ticket) {
    errors.ticket = "Debe introducir el número de ticket";
  }
  if (
    !data.id_ticket ||
    isNaN(data.id_ticket) ||
    data.id_ticket < 1 ||
    data.id_ticket > 300
  ) {
    errors.duration = "el numero de ticket debe ser entre 1 y 300";
  }
  return errors;
}

/*/*person_id: "",
    name: "",
    state: "",
    address: "",
    phone: "",
    genre: "",
    ChurchId: "",*/
