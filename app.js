import express from "express";
import { foodsRouter } from "./src/routes/foods.routes.js";
const app = express();
const port = 3000;

// Middleware para analizar solicitudes JSON y formularios URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", foodsRouter);

app.use((request, response) => {
  response.status(404).send("<h1>Error 404 - Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
