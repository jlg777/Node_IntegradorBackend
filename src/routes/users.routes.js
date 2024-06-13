import { Router } from "express";
import { ctrlGetUsers, ctrlPostUser } from "../controllers/users.controllers.js";

const usersRouter = Router();

usersRouter.get("/", ctrlGetUsers);

//usersRouter.get("/:id", ctrlGetUser);

usersRouter.post("/", ctrlPostUser);

//usersRouter.put("/:id", ctrlPutFood);

//usersRouter.delete("/:id", ctrlDeleteFood);

export { usersRouter };
