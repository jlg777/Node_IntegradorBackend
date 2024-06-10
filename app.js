import express from "express";
import dotenv from "dotenv";
import { foodsRouter } from "./src/routes/foods.routes.js";
import path from "path";

const app = express();
dotenv.config();

//const __dirname = path.dirname(new URL(import.meta.url).pathname);

const port = process.env.PORT;
const dbHost = process.env.DB_HOST;

// Middleware para analizar solicitudes JSON y formularios URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Configura Express para servir archivos estáticos desde la carpeta 'public'
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.use("/", foodsRouter);

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
