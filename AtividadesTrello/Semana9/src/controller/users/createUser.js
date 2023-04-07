const User = require("../../model/users");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const userDb = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userDb) return res.status(403).json({ message: "Email ja cadastrado" });

    const hash = await bcrypt.hash(req.body.password, 10);

    const newUser = await {
      fullName: req.body.fullName,
      email: req.body.email,
      username: req.body.username,
      password: hash,
    };
    const user = await User.create(newUser);
    const { password, ...rest } = user.toJSON();

    res.status(200).json(rest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Algo deu errado, tente novamente" });
  }
};

module.exports = createUser;
