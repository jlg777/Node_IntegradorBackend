import * as crypto from "crypto";
import { foods } from "../../public/foods.js";

export const ctrlGetFoods = (request, response) => {
  try {
    response.json(foods);
  } catch (error) {
    response.status(500).send("Error interno del servidor");
  }
};

export const ctrlGetFood = (request, response) => {
  try {
    const { id } = request.params;
    const food = foods.find((food) => food.id === id);

    if (!food) {
      response.status(404).send("Error 404 - Not Found");
    } else {
      response.json(food);
    }
  } catch (error) {
    response.status(500).send("Error interno del servidor");
  }
};

export const ctrlPostFood = (request, response) => {
  try {
    const { nombre, ingredientes } = request.body;

    const newNote = {
      id: crypto.randomUUID(),
      nombre,
      ingredientes,
    };
    foods.push(newNote);
    response.status(201).json({
      message: "Nota creada correctamente",
    });
  } catch (error) {
    response.status(500).send("Error interno del servidor");
  }
};

export const ctrlPutFood = (request, response) => {
  try {
    const { id } = request.params;
    const { nombre, ingredientes } = request.body;

    const foodIndex = foods.findIndex((food) => food.id === id);

    if (foodIndex === -1) {
      return response.status(404).json({
        message: "Comida no encontrada",
      });
    }

    if (nombre) {
      foods[foodIndex].nombre = nombre;
    }

    if (ingredientes) {
      foods[foodIndex].ingredientes = ingredientes;
    }

    response.status(200).json({
      message: "Comida actualizada correctamente",
    });
  } catch (error) {
    console.error("Error interno del servidor:", error);
    response.status(500).send("Error interno del servidor");
  }
};

export const ctrlDeleteFood = (request, response) => {
  try {
    const { id } = request.params;

    const noteIndex = foods.findIndex((note) => note.id == id);

    if (noteIndex < 0) {
      return response.status(200).json({
        message: "Nota no encontrada",
      });
    }

    foods.splice(noteIndex, 1);

    response.status(200).json({
      message: "Nota eliminada",
    });
  } catch (error) {
    response.status(500).send("Error interno del servidor");
  }
};
