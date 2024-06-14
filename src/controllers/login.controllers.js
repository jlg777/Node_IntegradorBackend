import { users } from "../../public/mocks/users.js";
import { Usuario } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const ctrlValidateUser = async (request, response) => {
  try {
    const { correo, contraseña } = request.body;

    // Buscar el usuario por correo electrónico
    /*const user = users.find((user) => user.correo == correo);

    if (!user) {
      // Si el usuario no existe, enviar un mensaje de error
      response.status(404).json({ error: "Usuario no encontrado" });
      return;
    }

    // Validar la contraseña
    if (user.contraseña !== contraseña) {
      // Si la contraseña no coincide, enviar un mensaje de error
      response.status(401).json({ error: "Contraseña incorrecta" });
      return;
    }*/

    /*bcrypt.compare(contraseña, user.contraseña, (err, result) => {
      if (err) {
        // Si ocurre un error al comparar las contraseñas, enviar un mensaje de error interno del servidor
        response.status(500).json({ error: "Error interno del servidor" });
        return;
      }
      if (!result) {
        // Si la contraseña no coincide, enviar un mensaje de error
        response.status(401).json({ error: "Contraseña incorrecta" });
        return;
      }*/

    // Buscar el usuario por correo electrónico en la base de datos
    const user = await Usuario.findOne({ where: { correo } });

    if (!user) {
      // Si el usuario no existe, enviar un mensaje de error
      return response.status(404).json({ error: "Usuario no encontrado" });
    }

    // Validar la contraseña hasheada
    const passwordMatch = await bcrypt.compare(contraseña, user.contraseña);
    if (!passwordMatch) {
      // Si la contraseña no coincide, enviar un mensaje de error
      return response.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Si el correo electrónico y la contraseña son válidos, enviar el usuario
    response.json({ message: "Usuario creado correctamente", user });
  } catch (error) {
    // Si ocurre un error, enviar un mensaje de error interno del servidor
    response.status(500).json({ error: "Error interno del servidor" });
  }
};
