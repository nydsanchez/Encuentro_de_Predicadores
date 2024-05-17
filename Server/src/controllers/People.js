const { People } = require("../db");

const postPeople = async (req, res) => {
  try {
    const { person_id, name, state, address, phone, genre, ChurchId } =
      req.body;

    if (
      !(person_id && name && state && address && phone && genre && ChurchId)
    ) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const formattedBirthDate = `20${person_id.substring(
      7,
      9
    )}-${person_id.substring(5, 7)}-${person_id.substring(3, 5)}`;

    const person = await People.findByPk(person_id);

    if (!person) {
      person = await People.create({
        id: person_id,
        name,
        state,
        address,
        phone,
        genre,
        ChurchId: Number(ChurchId),
        dob: formattedBirthDate,
      });
    }

    return res.status(201).json(person);
  } catch (error) {
    console.error("Error al crear la persona:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getPeople = async (req, res) => {
  try {
    const count = await People.count();

    if (count > 0) {
      const allPeople = await People.findAll();
      return res.status(200).json(allPeople);
    } else {
      return res
        .status(404)
        .json({ message: "No se ha registrado ninguna persona" });
    }
  } catch (error) {
    console.error("Error al obtener la lista de las personas:", error);
    return res
      .status(500)
      .send("Error interno del servidor al obtener a las personas");
  }
};

const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, phone, genre, ChurchId } = req.body;

    if (!name && !genre && !address && !phone && !ChurchId) {
      return res
        .status(400)
        .send(
          "No se proporcionaron datos válidos para modificar los datos de la persona."
        );
    }

    const person = await People.findByPk(id);

    if (!person) {
      return res.status(404).send("Esta persona no existe en los registros.");
    }

    const updatedData = {};

    // Actualizar solo los campos modificados
    if (id && id !== person.id) {
      updatedData.id = id;
    }
    if (name && name !== person.name) {
      updatedData.name = name;
    }
    if (genre && genre !== person.genre) {
      updatedData.genre = genre;
    }
    if (address && address !== person.address) {
      updatedData.address = address;
    }
    if (phone && phone !== person.phone) {
      updatedData.phone = phone;
    }
    if (ChurchId && ChurchId !== person.ChurchId) {
      updatedData.ChurchId = ChurchId;
    }

    await person.update(updatedData);

    return res.status(200).json(person);
  } catch (error) {
    console.error("Error al actualizar los datos de la persona:", error);
    return res
      .status(500)
      .send(
        "Error interno del servidor al actualizar los datos de la persona."
      );
  }
};
module.exports = { postPeople, getPeople, updatePerson };
