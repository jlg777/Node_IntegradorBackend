import { Router } from "express";
import { ctrlValidateUser } from "../controllers/login.controllers.js";

const loginRouter = Router();

loginRouter.post("/", ctrlValidateUser);

export { loginRouter };
