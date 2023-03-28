const Sequelize = require('sequelize');
const database = require('./db.js');
const Equipamento = database.define('equipamento',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },

    preco:Sequelize.DECIMAL,
    descricao:Sequelize.STRING

})

module.exports = Equipamento;