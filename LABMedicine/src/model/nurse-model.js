const { Sequelize } = require("sequelize");
const connection = require("../connection/connection");

const Nurse = connection.define("nurse", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: Sequelize.STRING,
  birth_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    unique: true,
  },
  phone_number: Sequelize.STRING,
  college: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  coren_uf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Nurse;
