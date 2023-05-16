const User = require("../../model/users");

const findUser = async (req,res)=>{
    try {
       const users = await User.findAll();

       const userData = users.map(el => {
        const { password, ...rest } = el.toJSON();
        return rest;
       })
  
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({ message: "Algo deu errado, tente novamente" }); 
    }   
};

module.exports = findUser;


