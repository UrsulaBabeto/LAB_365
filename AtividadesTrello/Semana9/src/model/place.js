const { Sequelize } = require("sequelize");
const connection = require("../connection/db.js");

const User = require("./users.js");


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
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    longitude: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
  });

  Place.belongsTo(User,{foreignKey:'user_id'})

module.exports = Place;
