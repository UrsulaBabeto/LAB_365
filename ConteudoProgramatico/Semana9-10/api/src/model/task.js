const { Sequelize } = require("sequelize");
const connection = require("../database");
const User = require("./user");


const Task = connection.define("task", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  user_id:{
    type:Sequelize.INTEGER,
  }
});

//cria outra coluna na tabela/cria FK
//Task.belongsTo(User,{foreignKey:'user_id'});

module.exports= Task;