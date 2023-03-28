const Sequelize = require('sequelize');
//                        nome do database, nome do usuario, senha
const sequelize = new Sequelize("Trindade", "postgres", "****", {
  dialect: "postgres",
  host: "localhost",
  port: "5432",
});

module.exports = sequelize;
