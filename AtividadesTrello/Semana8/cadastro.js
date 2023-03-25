const Sequelize = require('sequelize');
const database = require('./db.js');

const Enrollment = database.define('enrollment', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cpf: {
    type: Sequelize.STRING,
    unique:true,
    allowNull: false
  },
  adress: Sequelize.STRING,
  phoneNumber: Sequelize.STRING,
});

module.exports = Enrollment;