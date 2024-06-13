import Sequelize from "sequelize";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("db_prueba", "root", "", {
  host: "localhost",
  port: 3308,
  dialect: "mysql",
});

export const startDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexio establecida exitosamente.");
  } catch (error) {
    console.error("No se pudo conectar a la database:", error);
  }
};
