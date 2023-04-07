const Sequelize = require ('sequelize');

const connection = new Sequelize({
    dialect:process.env.DIALECT_DB,    
    host:process.env.HOST_DB,
    username:process.env.NAME_DB,
    password:process.env.PASSWORD_DB,
    database:process.env.USER_DB, 
    port:process.env.PORT_DB,    
});

module.exports = connection;