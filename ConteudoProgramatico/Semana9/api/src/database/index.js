const  Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: "postgres", //tipo de sql
  host: "localhost", //onde o banco esta
  username: "postgres", //
  password: "SENAI",
  database: "tarefas_db",
  port: "5432",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = connection;
