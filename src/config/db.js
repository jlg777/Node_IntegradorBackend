import { createConnection } from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const dbUser = process.env.DB_USER;



const connection = createConnection({
  host: "localhost",
  user: dbUser,
  password: "",
  database: "usuarios_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos", err);
    return;
  }

  console.log("Conectado a la base de datos");

  connection.query(
    "CREATE DATABASE IF NOT EXISTS usuarios_db",
    (err, results) => {
      if (err) {
        console.log("Error creando la base de datos");
        return;
      }

      console.log("Base de datos asegurada");

      connection.changeUser({ database: "usuarios_db" }, (err) => {
        if (err) {
          console.error("Error al cambiar a usuarios_db", err);
          return;
        }

        const createTableQuery = `
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(100) NOT NULL,
                    apellido VARCHAR(100) NOT NULL,
                    mail VARCHAR(255) NOT NULL
                );            
            `;

        connection.query(createTableQuery, (err, results) => {
          if (err) {
            console.log("Error creando la tabla: ", err);
            return;
          }

          console.log("Tabla asegurada");
        });
      });
    }
  );
});

export default connection;
