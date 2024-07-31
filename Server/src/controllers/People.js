const { People, Tickets } = require("../db");
const moment = require("moment");

const postPeople = async (req, res) => {
  try {
    const { person_id, name, state, address, phone, genre, ChurchId } =
      req.body;

    if (!(person_id && name && genre && ChurchId)) {
      return res.status(400).json({ error: "faltan datos" });
    }

    const formattedBirthDate = `20${person_id.substring(
      4,
      6
    )}-${person_id.substring(6, 8)}-${person_id.substring(8, 10)}`;
    const birthDate = moment(formattedBirthDate, "DD-MM-YY");
    if (!birthDate.isValid()) {
      throw new Error("Fecha de nacimiento invalida");
    }

    const isoBirthDate = birthDate.format("YYYY-MM-DD");

    let person = await People.findByPk(person_id);

    if (!person) {
      person = await People.create({
        cedula: person_id,
        name,
        state,
        address,
        phone,
        genre,
        ChurchId: Number(ChurchId),
        dob: isoBirthDate,
      });
    } else {
      return res.status(409).json({ error: "La persona ya existe" });
    }

    return res.status(201).json(person);
  } catch (error) {
    console.error("Error al crear la persona:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const postPersonWithTicket = async (req, res) => {
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
    } = req.body;

    if (!(person_id && name && genre && ChurchId && id_ticket)) {
      return res.status(400).json({ error: "faltan datos" });
    }

    // Formatear la fecha de nacimiento a partir del ID de la persona
    const formattedBirthDate = `20${person_id.substring(
      4,
      6
    )}-${person_id.substring(6, 8)}-${person_id.substring(8, 10)}`;
    const birthDate = moment(formattedBirthDate, "DD-MM-YY");
    if (!birthDate.isValid()) {
      throw new Error("Fecha de nacimiento invalida");
    }
    const isoBirthDate = birthDate.format("YYYY-MM-DD");

    // Verificar si la persona ya existe
    const personExists = await People.findByPk(person_id);
    if (personExists) {
      return res.status(409).json({ error: "La persona ya existe" });
    }

    // Verificar si el ticket ya existe
    const ticketExists = await Tickets.findByPk(id_ticket);
    if (ticketExists) {
      return res.status(409).json({ error: "El ticket ya existe" });
    }

    // Crear la persona
    const person = await People.create({
      id: person_id,
      name,
      state,
      address,
      phone,
      genre,
      ChurchId: Number(ChurchId),
      dob: isoBirthDate,
    });

    // Crear el ticket
    const ticket = await Tickets.create({
      id_ticket,
    });

    // Asociar el ticket a la persona
    await ticket.setPerson(person);

    // Obtener la persona con los tickets asociados
    const personWithTickets = await People.findByPk(person_id, {
      include: {
        model: Tickets,
        attributes: ["id_ticket", "state_ticket"],
      },
    });

    return res.status(201).json(personWithTickets);
  } catch (error) {
    console.error("Error al crear la persona y el ticket:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getAllPeople = async (req, res) => {
  try {
    const countPeople = await People.count();
    if (countPeople > 0) {
      const allPeople = await People.findAll();
      return res.status(200).json(allPeople);
    } else {
      return res.status(400).json({
        message: "no se han registrado ninguna persona en la base de datos",
      });
    }
  } catch (error) {
    console.error("Error al obtener la lista de las personas", error);
    return res.status(500).send(error.message);
  }
};

const getPerson = async (req, res) => {
  try {
    const { id } = req.query;
    const detailPerson = await People.findByPk(id);

    if (detailPerson) {
      return res.status(200).json(detailPerson);
    } else {
      res.status(404).json({
        message: "no se han registrado ninguna persona con esa identificacion",
      });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const editPerson = async (req, res) => {
  const { id } = req.params;
  const { name, state, address, phone, genre, dob, churchId } = req.body;
  try {
    const person = await People.findByPk(id);
    if (!person) {
      return res
        .status(404)
        .send({ message: "Esta persona no esta registrada" });
    }

    if (id && id !== person.id) {
      person.id = id;
    }

    if (name && name !== person.name) {
      person.name = name;
    }

    if (state && state !== person.state) {
      person.state = state;
    }

    if (address && address !== person.address) {
      person.address = address;
    }

    if (phone && phone !== person.phone) {
      person.phone = phone;
    }
    if (genre && genre !== person.genre) {
      person.genre = genre;
    }

    if (dob && dob !== person.dob) {
      person.dob = dob;
    }

    if (churchId && churchId !== person.ChurchId) {
      person.churchId = churchId;
    }

    await person.save();

    return res.status(200).json(person);
  } catch (error) {
    console.error("Error al modificar los datos de la persona:", error);
    return res.status(500).send("Error interno del servidor");
  }
};

module.exports = {
  postPeople,
  getAllPeople,
  getPerson,
  editPerson,
  postPersonWithTicket,
};
