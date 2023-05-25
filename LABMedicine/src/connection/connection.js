const Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: process.env.DIALECT_DB,
  host: process.env.HOST_DB,
  username: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB,
  port: process.env.PORT_DB,
});

module.exports = connection;
