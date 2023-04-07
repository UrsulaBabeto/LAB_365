const  Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: process.env.DIALECT_DB,//tipo de sql
  host: process.env.HOST_DB, //onde o banco esta
  username: process.env.USER_DB, //
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
  port: process.env.PORT_DB,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = connection;


//complexidade da criptografia 