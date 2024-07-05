/*  */

const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
});

module.exports = sequelize;
