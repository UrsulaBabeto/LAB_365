/* const { Sequelize } = require("sequelize");
const connection = require("../connection/connection.js");

const Person = connection.define("person", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  full_name: Sequelize.STRING,
  gender: Sequelize.STRING,
  birth_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    unique: true 
  },
  phone_number: Sequelize.STRING,
});

module.exports = Person;
 */