const { Sequelize } = require("sequelize");

const connection = require("../connection/connection");

const Patient = connection.define("patient", {
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
  emergency_phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  allergies: Sequelize.STRING,
  special_care: Sequelize.STRING,
  health_insurance: Sequelize.STRING,
  status: {
    type: Sequelize.ENUM(
      "EM_ATENDIMENTO",
      "AGUARDANDO_ATENDIMENTO",
      "ATENDIDO",
      "NAO_ATENDIDO"
    ),
  },
  total_appointment: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
},
);

module.exports = Patient;
