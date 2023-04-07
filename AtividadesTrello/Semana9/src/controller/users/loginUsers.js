const User = require("../../model/users");
const jwt = require("jsonwebtoken");

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
          process.env.CHAVE_DO_TOKEN,
          { expiresIn:"1d" }
      )
  res.status(200).json({ name:userDb.fullName + ", Seja bem-vindo!", token:token})
    } catch (error) {
      res.status(500).json({ message: "Algo deu errado, tente novamente" });
    }
  };

module.exports = sessions;