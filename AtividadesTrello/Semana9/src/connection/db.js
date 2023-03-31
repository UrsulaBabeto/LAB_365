const Sequelize = require ('sequelize');

const connection = new Sequelize({
    dialect:"postgres",    
    host:"localhost",
    username:"postgres",
    password:"SENAI",
    database:"trindade_places", 
    port:"5432"    
});

module.exports = connection;