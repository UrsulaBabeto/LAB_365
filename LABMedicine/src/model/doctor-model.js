const { Sequelize } = require("sequelize");

const connection = require("../connection/connection");

const Doctor = connection.define("doctor", {
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
  crm: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  specialization: {
    type: Sequelize.ENUM,
    values: [
      "CLINICO-GERAL",
      "ANESTESISTA",
      "DERMATOLOGIA",
      "GINECOLOGIA",
      "NEUROLOGIA",
      "PEDIATRIA",
      "PSIQUIATRIA",
      "ORTOPEDIA",
    ],
    allowNull: false,
  },
  system_status: { 
    type: Sequelize.ENUM("ATIVO","INATIVO"), 
    defaultValue: "ATIVO",
    allowNull: false, 
  },  
  total_appointment: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
},
);

module.exports = Doctor;
