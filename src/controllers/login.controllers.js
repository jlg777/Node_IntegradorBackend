import connection from "../config/db.js";
import { comparePasswords } from "../utils/hashPassword.js";

export const ctrLoginUser = async (request, response) => {
  const { correo, pass } = request.body; // Recibe email y password desde el cuerpo de la solicitud
  const sql = "SELECT * FROM usuarios WHERE correo = ?";

  connection.query(sql, [correo], async (err, results) => {
    if (err) {
      // Manejo del error
      return response.status(500).json({ error: "Error en la consulta a la base de datos" });
    }

    if (results.length === 0) {
      // Si no se encuentra ningún usuario con el email proporcionado
      return response.status(404).json({ error: "Usuario no encontrado" });
    }

    const user = results[0];

    const isMatch = await comparePasswords(pass, user.pass);

    if (!isMatch) {
      // Si las contraseñas no coinciden
      return response.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Si las credenciales son válidas, devolver el usuario (excluyendo la contraseña)
    const userWithoutPassword = { ...user };
    delete userWithoutPassword.pass;
    response.json(userWithoutPassword);
  });
};
