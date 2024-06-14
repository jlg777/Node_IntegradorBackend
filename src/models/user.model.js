import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

// Define el modelo de usuario
export const Usuario = sequelize.define(
  "Usuario",
  {
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
    timestamps: false,
  }
);

// Sincroniza el modelo con la base de datos (esto creará la tabla si no existe)
Usuario.sync();
