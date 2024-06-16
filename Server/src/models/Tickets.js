const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Tickets", {
    id_ticket: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },

    state_ticket: {
      type: DataTypes.ENUM("reservado", "utilizado", "pagado"),
      allowNull: false,
      defaultValue: "reservado",
    },
  });
};
