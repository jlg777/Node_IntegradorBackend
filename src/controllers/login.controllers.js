import { users } from "../../public/mocks/users.js";

export const ctrlValidateUser = (request, response) => {
  try {
    const { correo, contraseña } = request.body;

    // Buscar el usuario por correo electrónico
    const user = users.find((user) => user.correo == correo);

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
    }

    // Si el correo electrónico y la contraseña son válidos, enviar el usuario
    response.json(user);
  } catch (error) {
    // Si ocurre un error, enviar un mensaje de error interno del servidor
    response.status(500).json({ error: "Error interno del servidor" });
  }
};
