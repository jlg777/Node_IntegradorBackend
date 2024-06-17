import express from "express";
import dotenv from "dotenv";
//import { foodsRouter } from "./src/routes/foods.routes.js";
import path from "path";
import cors from "cors";
import { usersRouter } from "./src/routes/users.routes.js";
//import { loginRouter } from "./src/routes/login.routes.js";
//import { startDb } from "./src/config/db.js";
//import { sync } from "./src/models/user.model.js";

const app = express();
dotenv.config();

//const __dirname = path.dirname(new URL(import.meta.url).pathname);

const port = process.env.PORT;
const dbHost = process.env.DB_HOST;

// Middleware para analizar solicitudes JSON y formularios URL-encoded
app.use(express.json());
// Permitir todas las solicitudes CORS
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// Configura Express para servir archivos estáticos desde la carpeta 'public'
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

app.use("/user", usersRouter);


/*app.use((request, response) => {
  response.status(404).send("<h1>Error 404 - Not Found</h1>");
});*/

/*app.use(*, (request, response) => {
  response.status(404).send("<h1>Error 404 - Not Found</h1>");
});*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://${dbHost}:${port}`);
});
