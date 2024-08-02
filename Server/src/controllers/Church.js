const { Churches, People } = require("../db");

const getAllChurches = async (req, res) => {
  try {
    const count = await Churches.count();
    if (count > 0) {
      const allChurches = await Churches.findAll();
      return res.status(200).json(allChurches);
    } else {
      return res
        .status(400)
        .json({ message: "no se ha registrado ninguna congregacion" });
    }
  } catch (error) {
    console.error("Error al obtener las iglesias", error);
    return res.status(500).send(error.message);
  }
};

const postChurch = async (req, res) => {
  try {
    const { name, state, address, phone } = req.body;

    if (!name || !state) {
      return res.status(400).json({
        message: "El nombre y el departamento no pueden estar vacios",
      });
    }

    const [church, created] = await Churches.findOrCreate({
      where: {
        church_name: name,
        church_state: state,
      },
      defaults: {
        church_address: address,
        church_phone: phone,
      },
    });
    if (created) {
      return res.status(201).json(church);
    } else {
      return res
        .status(200)
        .json({ message: "Esta congregación ya ha sido registrada", church });
    }
  } catch (error) {
    console.error("Error al registrar la iglesia:", error);
    return res.status(500).send("Error interno del servidor");
  }
};

const editChurch = async (req, res) => {
  const { id } = req.params;
  const { name, state, address, phone } = req.body;

  try {
    const church = await Churches.findByPk(id);

    if (!church) {
      return res.status(404).send({ message: "Congregacion no encontrada" });
    }

    if (name && name !== church.church_name) {
      church.church_name = name;
    }

    if (state && state !== church.church_state) {
      church.church_state = state;
    }

    if (address && address !== church.church_address) {
      church.church_address = address;
    }

    if (phone && phone !== church.church_phone) {
      church.church_phone = phone;
    }

    await church.save();

    return res.status(200).json(church);
  } catch (error) {
    console.error("Error al modificar los datos de la congregacion:", error);
    return res.status(500).send("Error interno del servidor");
  }
};

const deleteChurch = async (req, res) => {
  const { id } = req.params;
  try {
    const church = await Churches.findByPk(id);

    // Verificar si la iglesia existe
    if (!church) {
      return res.status(404).json({ message: "Iglesia no encontrada" });
    }

    const peoplechurch = await church.getPeople();
    // Verificar si hay personas asociadas a la iglesia
    if (peoplechurch.length > 0) {
      return res.status(409).json({
        message: "No se puede eliminar la iglesia, hay personas asociadas",
      });
    }

    // Eliminar la iglesia
    await church.destroy();
    return res.status(204).send(); // Código 204 No Content para una eliminación exitosa
  } catch (error) {
    console.error("Error al eliminar los datos de la congregación:", error);
    return res.status(500).send("Error interno del servidor");
  }
};

module.exports = {
  getAllChurches,
  postChurch,
  editChurch,
  deleteChurch,
};
