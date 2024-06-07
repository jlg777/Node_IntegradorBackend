import { Router } from "express";
import { notes } from "../public/foods.js";
import * as crypto from "crypto";

const foodsRouter = Router();

foodsRouter.get("/api/notes", (request, response) => {
  response.json(notes);
});

foodsRouter.get("/api/notes/:id", (request, response) => {
  const id = parseInt(request.params.id);
  let note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).send("Error 404 - Not Found");
  }
});

foodsRouter.post("/api/notes", (request, response) => {
  const { content, important } = request.body;

  const newNote = {
    id: crypto.randomUUID(),
    content,
    important,
  };
  notes.push(newNote);
  response.status(201).json({
    message: "Nota creada correctamente",
  });
});

foodsRouter.put("/api/notes/:id", (request, response) => {
  const { id } = request.params;
  const { content } = request.body;

  const noteIndex = notes.findIndex((note) => note.id == id);

  if (noteIndex < 0) {
    return response.status(200).json({
      message: "Nota no encontrada",
    });
  }

  // Actualizar el contenido de la nota
  notes[noteIndex].content = content;

  // Enviar una respuesta indicando que la nota ha sido actualizada
  response.status(404).json({
    message: "Nota actualizada correctamente",
  });
});

foodsRouter.delete("/api/notes/:id", (request, response) => {
  const id = parseInt(request.params.id);

  const noteIndex = notes.findIndex((note) => note.id == id);

  if (noteIndex < 0) {
    return response.status(200).json({
      message: "Nota no encontrada",
    });
  }

  notes.splice(noteIndex, 1);

  response.status(200).json({
    message: "Nota eliminada",
  });
});
