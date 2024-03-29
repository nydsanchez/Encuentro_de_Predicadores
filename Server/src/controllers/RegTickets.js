const { Tickets, People, Event } = require("../db");

const regTicket = async (req, res) => {
  try {
    const evento = await Event.findByPk(id_event);
    const totalTicketsEvento = evento ? evento.num_tickets : null;
    const {
      id_ticket,
      id_event,
      vendedor,
      state_ticket,
      person_id,
      name,
      genre,
      church,
    } = req.body;

    if (
      id_ticket &&
      id_event &&
      vendedor &&
      state_ticket &&
      person_id &&
      name &&
      genre &&
      church
    ) {
      console.log("recibido todos los datos");

      const cod_event = Number(id_event);
      let salePerson = vendedor.toUpperCase();

      const day = person_id.substring(3, 5);
      const month = person_id.substring(5, 7);
      let year = person_id.substring(7, 9);

      // Determinar el siglo del año de nacimiento
      const currentCentury = new Date()
        .getFullYear()
        .toString()
        .substring(0, 2);
      if (parseInt(year) > parseInt(currentCentury.slice(-2))) {
        // Asumir que el año de nacimiento es del siglo pasado
        year = `19${year}`;
      } else {
        // Asumir que el año de nacimiento es del siglo actual
        year = `20${year}`;
      }

      // Construir la fecha de nacimiento en formato "YYYY-MM-DD"
      const formattedBirthDate = `${year}-${month}-${day}`;

      let person = await People.findByPk(person_id);

      if (!person) {
        // Si la persona no existe, no hay necesidad de verificar más campos
        person = await People.create({
          id: person_id,
          name,
          genre,
          church,
          dob: formattedBirthDate,
        });
      }

      if (id_ticket <= totalTicketsEvento) {
        // Crear un nuevo registro de ticket (Tickets) asociado al person_id proporcionado
        const ticket = await Tickets.create({
          id_ticket,
          id_event: cod_event,
          vendedor: salePerson,
          state_ticket,
          PersonId: person_id,
          EventIdEvent: id_event,
        });
        if (id_ticket == totalTicketsEvento) {
          await evento.update({ event_state: "finalizado" });
        }
        return res
          .status(201)
          .json({ message: "Ticket creado exitosamente", ticket, person });
      } else {
        return res.status(500).json({ error: "Este evento esta cerrado" });
      }
    } else {
      return res.status(500).json({ error: "Faltan datos" });
    }
  } catch (error) {
    console.error("Error al crear el ticket:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = regTicket;
