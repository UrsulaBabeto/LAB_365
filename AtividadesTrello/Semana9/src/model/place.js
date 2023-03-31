const { Sequelize } = require("sequelize");
const connection = require("../connection/db.js");


  const Place = connection.define("place", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    openingHours: Sequelize.STRING,
    description: Sequelize.STRING,
    latitude: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  });

module.exports = Place;
