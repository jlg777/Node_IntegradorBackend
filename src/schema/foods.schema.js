import { body, param } from "express-validator";

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
  param("id").isUUID().withMessage("El ID debe ser un UUID válido"),
  body("nombre").optional().isString().withMessage("El nombre debe ser una cadena"),
  body("ingredientes").optional().isArray().withMessage("Los ingredientes deben ser un array"),
];

export const viewFoodsSchema = [param("id").isUUID().withMessage("El ID debe ser un UUID válido")];

export const deleteFoodsSchema = [
  param("id").isUUID().withMessage("El ID debe ser un UUID válido"),
];
