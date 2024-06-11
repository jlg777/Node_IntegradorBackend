import * as crypto from "crypto";
import { users } from "../../public/mocks/users.js";

export const ctrlGetUsers = (request, response) => {
  try {
    response.json(users);
  } catch (error) {
    response.status(500).send("Error interno del servidor");
  }
};

export const ctrlGetUser = (request, response) => {
  try {
    const { id } = request.params;
    console.log(id);
    const user = users.find((user) => user.id === id);

    if (!user) {
      response.status(404).send("Error 404 - Not Found");
    } else {
      response.json(user);
    }
  } catch (error) {
    response.status(500).send("Error interno del servidor");
  }
};

export const ctrlPostUser = (request, response) => {
  try {
    const { nombre, correo, contraseña } = request.body;

    const newUser = {
      id: crypto.randomUUID(),
      nombre,
      correo,
      contraseña,
      genero: "masculino",
      avatar: "avatar",
      rol: "admin",
      createAt: new Date().toLocaleString(),
      updateAt: new Date().toLocaleString(),
    };
    users.push(newUser);
    response.status(201).json({
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    response.status(500).send("Error interno del servidor");
  }
};

export const ctrlPutFood = (request, response) => {
  try {
    const { id } = request.params;
    const { nombre, correo, contraseña, genero, avatar, rol, create, update } = request.body;

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return response.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    if (nombre) {
      users[userIndex].nombre = nombre;
    }

    if (correo) {
      users[userIndex].correo = correo;
    }

    if (contraseña) {
      users[userIndex].contraseña = contraseña;
    }

    if (genero) {
      users[userIndex].genero = genero;
    }

    if (avatar) {
      users[userIndex].avatar = avatar;
    }

    response.status(200).json({
      message: "Usuario actualizado correctamente",
    });
  } catch (error) {
    console.error("Error interno del servidor:", error);
    response.status(500).send("Error interno del servidor");
  }
};

export const ctrlDeleteFood = (request, response) => {
  try {
    const { id } = request.params;

    const userIndex = users.findIndex((user) => user.id == id);

    if (userIndex < 0) {
      return response.status(200).json({
        message: "Usuario no encontrado",
      });
    }

    users.splice(userIndex, 1);

    response.status(200).json({
      message: "Usuario eliminado",
    });
  } catch (error) {
    response.status(500).send("Error interno del servidor");
  }
};
