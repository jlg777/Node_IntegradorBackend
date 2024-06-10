import { body } from "express-validator";

export const createFoodsSchema = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre no puede estar vacío")
    .isString()
    .withMessage("El nombre debe ser una cadena"),
  body("ingredientes")
    .notEmpty()
    .withMessage("El nombre no puede estar vacío")
    .isArray()
    .withMessage("Los ingredientes deben ser un array"),
];

export const updateFoodsSchema = [
  body("nombre").optional().isString().withMessage("El nombre debe ser una cadena"),
  body("ingredientes").optional().isArray().withMessage("Los ingredientes deben ser un array"),
];
