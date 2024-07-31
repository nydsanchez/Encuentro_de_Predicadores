const { Op } = require("sequelize");
const { Tickets, People } = require("../db");
const { postPeople } = require("./People");

const regTicket = async (req, res) => {
  try {
    const { no_ticket, personCedula } = req.body;

    if (!(no_ticket && personCedula)) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const ticket = await Tickets.findByPk(no_ticket);
    if (!ticket) {
      ticket = await Tickets.create({
        no_ticket,
        PersonId: personCedula,
      });
      return res.status(201).json(ticket);
    } else {
      res.status(200).json({ message: "Este ticket ya ha sido registrado" });
    }
  } catch (error) {
    console.error("Error al crear el ticket:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getAllTickets = async (req, res) => {
  try {
    const count = await Tickets.count();

    if (count > 0) {
      const allTickets = await Tickets.findAll();
      return res.status(200).json(allTickets);
    } else {
      return res
        .status(404)
        .json({ message: "No se ha registrado ningún ticket" });
    }
  } catch (error) {
    console.error("Error al obtener la lista de los tickets:", error);
    return res
      .status(500)
      .send("Error interno del servidor al obtener los tickets");
  }
};

const updateTicket = async (req, res) => {
  try {
    const {
      person_id,
      name,
      state,
      address,
      phone,
      genre,
      ChurchId,
      id_ticket,
      status_ticket,
    } = req.body;

    if (!(person_id && name && genre && ChurchId && id_ticket)) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    // Verificar si el ticket existe
    const ticket = await Tickets.findByPk(id_ticket);
    if (!ticket) {
      return res.status(404).json({ error: "El ticket no existe" });
    }

    // Verificar el estado del ticket
    if (ticket.state_ticket === "utilizado") {
      return res.status(409).json({ error: "El ticket ya ha sido utilizado" });
    }

    // Verificar si la persona existe
    let personCheck = await People.findByPk(person_id);
    if (!personCheck) {
      // Si la persona no existe, crearla
      personCheck = await People.create({
        id: person_id, // Asegúrate de que el campo person_id en tu base de datos se llama 'id'
        name,
        state,
        address,
        phone,
        genre,
        ChurchId,
      });
    }

    // Asociar el ticket con la nueva persona
    await ticket.setPerson(personCheck);

    // Actualizar el estado del ticket si es necesario
    if (status_ticket && status_ticket !== ticket.state_ticket) {
      ticket.state_ticket = status_ticket;
    }

    await ticket.save();

    // Obtener la nueva persona con los tickets asociados (opcional)
    const updatedPersonWithTickets = await People.findByPk(person_id, {
      include: {
        model: Tickets,
        attributes: ["id_ticket", "state_ticket"],
      },
    });

    return res.status(200).json(updatedPersonWithTickets || ticket);
  } catch (error) {
    console.error("Error al actualizar los datos del ticket:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getTicket = async (req, res) => {
  try {
    const { id_ticket } = req.body;

    if (!id_ticket) {
      return res
        .status(400)
        .json({ error: "Debe introducir el numero de ticket" });
    }

    // Verificar si el ticket existe
    const ticket = await Tickets.findByPk(id_ticket, {
      include: {
        model: People,
        attributes: ["name", "id"],
      },
    });

    if (!ticket) {
      return res.status(404).json({ error: "El ticket no existe" });
    }

    return res.status(200).json(ticket);
  } catch (error) {
    console.error("Error al obtener la informacion del ticket:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const registerAttendance = async (req, res) => {
  try {
    const { id_ticket } = req.body;

    if (!id_ticket) {
      return res
        .status(400)
        .json({ error: "Debe introducir el numero de ticket" });
    }

    // Verificar si el ticket existe
    const ticket = await Tickets.findByPk(id_ticket);
    if (!ticket) {
      return res.status(404).json({ error: "El ticket no existe" });
    }

    // Verificar el estado del ticket
    if (ticket.state_ticket === "utilizado") {
      return res.status(409).json({ error: "El ticket ya ha sido utilizado" });
    }

    // Actualizar el estado del ticket a "utilizado"
    ticket.state_ticket = "utilizado";
    await ticket.save();

    return res
      .status(200)
      .json({ message: "Asistencia registrada correctamente" });
  } catch (error) {
    console.error("Error al registrar la asistencia:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
module.exports = {
  regTicket,
  getAllTickets,
  getTicket,
  updateTicket,
  registerAttendance,
};
