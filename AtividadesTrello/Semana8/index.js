(async () => {
  const database = require("./db.js");
  const user = require("./cadastro.js");
  await database.sync();

  //create
  const newUser = await user.create({
    firstName: "juju",
    lastName: "Babeto",
    cpf: "12345678911",
    adress: "",
    phoneNumber: "",
  });
  console.log(newUser);

  //read
  const allUsers = await user.findAll(); //find all
  const userPK = await user.findByPk(3); // find by primary Key

  //update
  userPK.adress = "Av Allohomora, 934";
  await userPK.save();

  //delete
  await userPK.destroy();
})();
