import { Sequelize } from "sequelize";

const db = new Sequelize("api_catatan", "root", "",{
    host: "35.193.25.9",
    dialect: "mysql",
    logging: console.log,
});

// crud api = nama db

export default db;
