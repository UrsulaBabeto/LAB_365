const Sequelize = require ('sequelize');

const connection = new Sequelize({
    dialect:"postgres",    
    host:"localhost",
    username:"postgres",
    password:"SENAI",
    database:"trindadePlaces", 
    port:"5432"    
});

module.exports = connection;