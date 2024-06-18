import { Router } from "express";
import { ctrLoginUser } from "../controllers/login.controllers.js";

const loginRouter = Router();

loginRouter.post("/", ctrLoginUser);

export { loginRouter };
