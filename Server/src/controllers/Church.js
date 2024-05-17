const { Churches } = require("../db");

const getChurches = async (req, res) => {
  try {
    const count = await Churches.count();

    if (count > 0) {
      const allChurches = await Churches.findAll();
      return res.status(200).json(allChurches);
    } else {
      return res
        .status(404)
        .json({ message: "No se ha registrado ninguna congregación" });
    }
  } catch (error) {
    console.error("Error al obtener las iglesias:", error);
    return res
      .status(500)
      .send("Error interno del servidor al obtener las iglesias");
  }
};

const postChurch = async (req, res) => {
  try {
    const { name, state, address, phone } = req.body;

    // Verificar si todos los campos requeridos están presentes
    if (!(name && state && address && phone)) {
      return res
        .status(400)
        .send(
          "Faltan datos: se requiere nombre, departamento, dirección y teléfono"
        );
    }

    // Crear la iglesia o encontrarla si ya existe
    const [church, created] = await Churches.findOrCreate({
      where: {
        church_name: name,
        church_state: state,
      },
      defaults: {
        church_name: name,
        church_state: state,
        church_address: address,
        church_phone: phone,
      },
    });

    // Verificar si se creó la iglesia o si ya existía
    if (created) {
      return res.status(201).json(church); // Iglesia creada con éxito
    } else {
      return res.status(200).json(church); // Iglesia ya existía
    }
  } catch (error) {
    console.error("Error al registrar la iglesia:", error);
    return res
      .status(500)
      .send("Error interno del servidor al registrar la iglesia");
  }
};

const updateChurch = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, state, address, phone } = req.body;

    if (!name && !state && !address && !phone) {
      return res
        .status(400)
        .send("No se proporcionaron datos válidos para modificar la iglesia.");
    }

    const church = await Churches.findByPk(id);

    if (!church) {
      return res.status(404).send("La iglesia no existe.");
    }

    const updatedData = {};

    // Actualizar solo los campos modificados
    if (name && name !== church.church_name) {
      updatedData.church_name = name;
    }
    if (state && state !== church.church_state) {
      updatedData.church_state = state;
    }
    if (address && address !== church.church_address) {
      updatedData.church_address = address;
    }
    if (phone && phone !== church.church_phone) {
      updatedData.church_phone = phone;
    }

    await church.update(updatedData);

    return res.status(200).json(church);
  } catch (error) {
    console.error("Error al actualizar la iglesia:", error);
    return res
      .status(500)
      .send("Error interno del servidor al actualizar la iglesia.");
  }
};

module.exports = { getChurches, postChurch, updateChurch };
