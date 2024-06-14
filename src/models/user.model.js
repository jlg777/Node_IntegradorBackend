import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

// Define el modelo de usuario
export const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.STRING,
      //autoIncrement: true,
      primaryKey: true,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Para asegurar que no haya correos duplicados en la base de datos
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// Sincroniza el modelo con la base de datos (esto creará la tabla si no existe)
export const sync = async () => {
  await Usuario.sync({ force: true });
  console.log("The table for the User model was just (re)created!");
};
