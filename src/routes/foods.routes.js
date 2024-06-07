import { Router } from "express";
import {
  ctrlDeleteFood,
  ctrlGetFood,
  ctrlGetFoods,
  ctrlPostFood,
  ctrlPutFood,
} from "../controllers/foods.controllers.js";

const foodsRouter = Router();

foodsRouter.get("/api/comidas", ctrlGetFoods);

foodsRouter.get("/api/comidas/:id", ctrlGetFood);

foodsRouter.post("/api/comidas", ctrlPostFood);

foodsRouter.put("/api/comidas/:id", ctrlPutFood);

foodsRouter.delete("/api/comidas/:id", ctrlDeleteFood);

export { foodsRouter };
