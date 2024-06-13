import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const UserModel = sequelize.define(
  "User",
  {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: true },
    nombre: { type: DataTypes.STRING, allowNull: true },
    correo: { type: DataTypes.STRING, allowNull: true },
    contraseña: { type: DataTypes.STRING, allowNull: true },
    /*genero: { type: DataTypes.STRING, allowNull: true },
  avatar: { type: DataTypes.STRING, allowNull: true },
  rol: { type: DataTypes.STRING, allowNull: true },
  createAt: { type: DataTypes.STRING, allowNull: true },
  updateAt: { type: DataTypes.STRING, allowNull: true },*/
  },
  {
    timestamps: false,
  }
);

/*const userModel1 = sequelize.define(
  "User",
  {
    id: { type: DataTypes.STRING, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    correo: { type: DataTypes.STRING, allowNull: false },
    contraseña: { type: DataTypes.STRING, allowNull: false },
    genero: { type: DataTypes.STRING, allowNull: false },
    avatar: { type: DataTypes.STRING, allowNull: false },
    rol: { type: DataTypes.STRING, allowNull: false },
    createAt: { type: DataTypes.STRING, allowNull: false },
    updateAt: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "Users1",
  }
);

const userModel2 = sequelize.define(
  "User",
  {
    id: { type: DataTypes.STRING, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    correo: { type: DataTypes.STRING, allowNull: false },
    contraseña: { type: DataTypes.STRING, allowNull: false },
    genero: { type: DataTypes.STRING, allowNull: false },
    avatar: { type: DataTypes.STRING, allowNull: false },
    rol: { type: DataTypes.STRING, allowNull: false },
    createAt: { type: DataTypes.STRING, allowNull: false },
    updateAt: { type: DataTypes.STRING, allowNull: false },
  },
  {
    freezeTableName: true,
  }
);*/
