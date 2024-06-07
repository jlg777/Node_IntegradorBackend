import { Router } from "express";
import * as crypto from "crypto";
import { foods } from "../../public/foods.js";

const foodsRouter = Router();

foodsRouter.get("/api/comidas", (request, response) => {
  response.json(foods);
});

foodsRouter.get("/api/comidas/:id", (request, response) => {
  const { id } = request.params;
  let food = foods.find((food) => food.id === id);

  if (food) {
    response.json(food);
  } else {
    response.status(404).send("Error 404 - Not Found");
  }
});

foodsRouter.post("/api/comidas", (request, response) => {
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
});

foodsRouter.put("/api/comidas/:id", (request, response) => {
  const { id } = request.params;
  const { ingredientes } = request.body;

  const noteIndex = foods.findIndex((note) => note.id == id);

  if (noteIndex < 0) {
    return response.status(200).json({
      message: "Nota no encontrada",
    });
  }

  // Actualizar el contenido de la nota
  foods[noteIndex].ingredientes = ingredientes;

  // Enviar una respuesta indicando que la nota ha sido actualizada
  response.status(404).json({
    message: "Nota actualizada correctamente",
  });
});

foodsRouter.delete("/api/comidas/:id", (request, response) => {
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
});

export { foodsRouter };