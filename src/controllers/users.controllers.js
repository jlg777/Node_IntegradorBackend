import * as crypto from "crypto";
//import { UserModel } from "../models/Users.js";
//import { Usuario } from "../models/user.model.js";
import { hashPassword } from "../utils/hashPassword.js";
import connection from "../config/db.js";

export const ctrlGetUsers = async (request, response) => {
  try {
    const sql = "SELECT * FROM usuarios";

    connection.query(sql, (err, results) => {
      if (err) throw err;

      response.json(results);
    });
  } catch (error) {
    console.error(error);
  }
};

// Función para crear un nuevo usuario
export async function ctrlPostUser(request, response) {
  try {
    const { correo, pass } = request.body;
    const avatar = request.file.filename; // Nombre del archivo de la imagen subida
    const id = crypto.randomUUID();
    const hashedPassword = await hashPassword(pass);
    const sql = "INSERT INTO usuarios (id, correo, pass, avatar) VALUES (?,?,?,?)";

    connection.query(sql, [id, correo, hashedPassword, avatar], (err, result) => {
      if (err) {
        console.error(err);
        return response.status(500).json({ error: "Error al crear usuario" });
      }

      response.status(201).json({
        mensaje: "Usuario creado con éxito",
        idUsuario: result.insertId,
      });
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
}
