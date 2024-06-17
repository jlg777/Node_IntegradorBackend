import { Sequelize } from "sequelize";

// Configurar la conexión a la base de datos
export const sequelize = new Sequelize("dbprueba", "root", "", {
  host: "127.0.0.1",
  //port: 3308,
  dialect: "mysql", // O el dialecto de tu base de datos (postgresql, sqlite, etc.)
});

export const startDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexion establecida exitosamente.");
  } catch (error) {
    console.error("No se pudo conectar a la database:", error);
  }
};
