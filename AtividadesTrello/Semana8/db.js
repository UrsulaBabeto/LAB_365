const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  "Semana8Exercicios",
  "postgres",
  "*****",
  {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
  }
);

module.exports = sequelize;