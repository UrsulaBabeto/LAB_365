const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  "Semana8Exercicios",
  "postgres",
  "SENAI",
  {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
  }
);

module.exports = sequelize;