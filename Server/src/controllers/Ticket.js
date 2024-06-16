const { Tickets } = require("../db");

const postTicket = async (req, res) => {
  try {
    const { id_ticket, state_ticket, personId } = req.body;

    if (!(id_ticket && state_ticket && personId)) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    let ticket = await Tickets.findByPk(id_ticket);

    if (!ticket) {
      ticket = await Tickets.create({
        id_ticket,
        state_ticket,
        PersonId: personId,
      });
    }

    return res.status(201).json(ticket);
  } catch (error) {
    console.error("Error al crear el ticket:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getTickets = async (req, res) => {
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
    const { id } = req.params;
    const { state_ticket, personId } = req.body;

    if (!state_ticket && !personId) {
      return res
        .status(400)
        .send(
          "No se proporcionaron datos válidos para modificar los datos del ticket."
        );
    }

    const ticket = await Tickets.findByPk(id);

    if (!ticket) {
      return res.status(404).send("No se ha registrado este ticket.");
    }

    const updatedData = {};

    // Actualizar solo los campos modificados
    if (state_ticket && state_ticket !== ticket.state_ticket) {
      updatedData.state_ticket = state_ticket;
    }

    if (personId && personId !== ticket.PersonId) {
      updatedData.PersonId = personId;
    }

    await ticket.update(updatedData);

    return res.status(200).json(ticket);
  } catch (error) {
    console.error("Error al actualizar los datos del ticket:", error);
    return res
      .status(500)
      .send("Error interno del servidor al actualizar los datos del ticket.");
  }
};
module.exports = { postTicket, getTickets, updateTicket };
