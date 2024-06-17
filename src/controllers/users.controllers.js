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
    const { nombre, apellido, mail } = request.body;

    const sql = "INSERT INTO usuarios (nombre,apellido,mail) VALUES (?,?,?)";
  
    connection.query(sql, [nombre, apellido, mail], (err, result) => {
      if (err) throw err;
  
      response.json({
        mensaje: "Usuario Creado con EXITO",
        idUsuario: result.insertId,
      });
    });
  } catch (error) {
    console.error(error);
  }
}


