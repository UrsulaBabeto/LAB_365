const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Sequelize } = require("sequelize");

const User = require("../model/users");


const users = async (req,res)=>{
    try {
       const users = await User.findAll();
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Algo deu errado, tente novamente" }); 
    }   
};


const create = async (req, res) => {
  try {
    const userDb = await User.findOne({
         where: { 
            email: req.body.email 
        }
     });

    if (userDb) return res.status(409).json({ message: "email invalido" });
   
    const hash = await bcrypt.hash(req.body.password,10);

    const newUser = await {
      fullName: req.body.fullName,
      email: req.body.email,
      username: req.body.username,
      password: hash,
    };
    if (!newUser.fullName || !newUser.email || !newUser.username || !newUser.password) {
      res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }
    if (newUser.password < 8) {
      return res.status(411).json({ message: "A senha precisa ter, no mínimo, 8 caracteres" });
    }

    const user = await User.create(newUser);
    const { password, ...rest } = user.toJSON();
  
    res.status(200).json(rest);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Algo deu errado, tente novamente" });
  }

 
};

const sessions = async (req, res) => {
  try {
    const userDb = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!userDb) return res.status(404).json({ message: "Dados incorretos" });

    const passwordCheck = await bcrypt.compare(req.body.password,userDb.password);

    if(!passwordCheck) return res.status(404).json({ message: "Dados incorretos" });

    const token = jwt.sign(
        { id:userDb.id },
        'chave_mestr@',
        { expiresIn:"1d" }
    )
res.status(200).json({ name:userDb.fullName + ", Seja bem-vindo!", token:token})
  } catch (error) {
    res.status(500).json({ message: "Algo deu errado, tente novamente" });
  }
};


module.exports = {
  create,
  sessions,
  users,
};
