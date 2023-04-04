const { Sequelize } = require("sequelize");
const connection = require("../database");

const User = connection.define('user',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey:true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = User;