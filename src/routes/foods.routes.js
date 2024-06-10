import { Router } from "express";
import {
  ctrlDeleteFood,
  ctrlGetFood,
  ctrlGetFoods,
  ctrlPostFood,
  ctrlPutFood,
} from "../controllers/foods.controllers.js";
import { createFoodsSchema, updateFoodsSchema, viewFoodsSchema } from "../schema/foods.schema.js";
import { validateFood } from "../middlewares/validator.js";

const foodsRouter = Router();

foodsRouter.get("/api/comidas", ctrlGetFoods);

foodsRouter.get("/api/comidas/:id", viewFoodsSchema, validateFood, ctrlGetFood);

foodsRouter.post("/api/comidas", createFoodsSchema, validateFood, ctrlPostFood);

foodsRouter.put("/api/comidas/:id", updateFoodsSchema, validateFood, ctrlPutFood);

foodsRouter.delete("/api/comidas/:id", ctrlDeleteFood);

export { foodsRouter };
